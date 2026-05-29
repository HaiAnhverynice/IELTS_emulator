import { useEffect, useRef, useState } from 'react'
import { useStore } from '../../store'

function genId(): string {
  return crypto.randomUUID?.() ?? `hl-${Date.now()}-${Math.random().toString(36).slice(2)}`
}

/** Plain-text character offset of (node, off) from the start of `container`. */
function offsetOf(container: HTMLElement, node: Node, off: number): number {
  const r = document.createRange()
  r.setStart(container, 0)
  r.setEnd(node, off)
  return r.toString().length
}

/** Find the text node + local offset for a plain-text offset within container. */
function locate(container: HTMLElement, target: number): { node: Text; offset: number } | null {
  const walker = document.createTreeWalker(container, NodeFilter.SHOW_TEXT)
  let len = 0
  let last: Text | null = null
  let cur = walker.nextNode() as Text | null
  while (cur) {
    const l = cur.textContent?.length ?? 0
    if (len + l >= target) return { node: cur, offset: target - len }
    len += l
    last = cur
    cur = walker.nextNode() as Text | null
  }
  return last ? { node: last, offset: last.textContent?.length ?? 0 } : null
}

function intersectingTextNodes(range: Range): Text[] {
  const root = range.commonAncestorContainer
  const rootEl = (root.nodeType === Node.TEXT_NODE ? root.parentNode : root) as HTMLElement
  const walker = document.createTreeWalker(rootEl, NodeFilter.SHOW_TEXT)
  const out: Text[] = []
  let node = walker.nextNode()
  while (node) {
    if (range.intersectsNode(node)) out.push(node as Text)
    node = walker.nextNode()
  }
  return out
}

function wrapPortion(node: Text, start: number, end: number, id: string, note?: string) {
  if (end <= start) return
  const r = document.createRange()
  r.setStart(node, start)
  r.setEnd(node, end)
  const span = document.createElement('span')
  span.className = 'ielts-hl'
  span.dataset.hlId = id
  if (note) {
    span.title = note
    span.dataset.note = note
    span.style.textDecoration = 'underline dotted'
  }
  try {
    r.surroundContents(span)
  } catch {
    /* skip portions crossing element boundaries */
  }
}

function wrapRange(range: Range, id: string, note?: string) {
  const nodes = intersectingTextNodes(range)
  const ops = nodes.map((node) => ({
    node,
    start: node === range.startContainer ? range.startOffset : 0,
    end: node === range.endContainer ? range.endOffset : node.length,
  }))
  for (const op of ops) wrapPortion(op.node, op.start, op.end, id, note)
}

function unwrap(id: string, container: HTMLElement) {
  container.querySelectorAll<HTMLElement>(`span.ielts-hl[data-hl-id="${id}"]`).forEach((span) => {
    const parent = span.parentNode
    if (!parent) return
    while (span.firstChild) parent.insertBefore(span.firstChild, span)
    parent.removeChild(span)
    parent.normalize()
  })
}

function setNoteOnSpans(id: string, note: string, container: HTMLElement) {
  container.querySelectorAll<HTMLElement>(`span.ielts-hl[data-hl-id="${id}"]`).forEach((span) => {
    span.title = note
    span.dataset.note = note
    span.style.textDecoration = note ? 'underline dotted' : ''
  })
}

interface Menu {
  x: number
  y: number
  mode: 'select' | 'existing'
  id?: string
  /** For 'select' mode: captured offsets, so highlighting does not depend on
   *  the live selection still existing when the button is clicked. */
  start?: number
  end?: number
}

export default function Highlighter({ html, passage }: { html: string; passage: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const [menu, setMenu] = useState<Menu | null>(null)
  const highlights = useStore((s) => s.highlights)
  const addHighlight = useStore((s) => s.addHighlight)
  const removeHighlight = useStore((s) => s.removeHighlight)
  const setHighlightNote = useStore((s) => s.setHighlightNote)

  // Reconcile the DOM highlights for this passage to match the store. This
  // single effect covers creation, removal, note edits, and restoring saved
  // highlights after a reload — and is idempotent, so it survives React
  // re-rendering the dangerouslySetInnerHTML container.
  useEffect(() => {
    const container = ref.current
    if (!container) return
    const mine = highlights.filter((h) => h.passage === passage)
    const wanted = new Map(mine.map((h) => [h.id, h]))

    container.querySelectorAll<HTMLElement>('span.ielts-hl').forEach((sp) => {
      const id = sp.dataset.hlId
      if (id && !wanted.has(id)) unwrap(id, container)
    })

    for (const h of mine) {
      if (container.querySelector(`span.ielts-hl[data-hl-id="${h.id}"]`)) {
        setNoteOnSpans(h.id, h.note ?? '', container)
        continue
      }
      const s = locate(container, h.start)
      const e = locate(container, h.end)
      if (!s || !e) continue
      const r = document.createRange()
      r.setStart(s.node, s.offset)
      r.setEnd(e.node, e.offset)
      wrapRange(r, h.id, h.note)
    }
  }, [highlights, passage])

  useEffect(() => {
    const onDocDown = (e: MouseEvent) => {
      if (!(e.target as HTMLElement).closest('.hl-menu')) setMenu(null)
    }
    document.addEventListener('mousedown', onDocDown)
    return () => document.removeEventListener('mousedown', onDocDown)
  }, [])

  const onMouseUp = (e: React.MouseEvent) => {
    const sel = window.getSelection()
    const container = ref.current
    if (!container) return

    if (sel && sel.rangeCount > 0 && !sel.isCollapsed && container.contains(sel.anchorNode)) {
      const range = sel.getRangeAt(0)
      let start = offsetOf(container, range.startContainer, range.startOffset)
      let end = offsetOf(container, range.endContainer, range.endOffset)
      if (start > end) [start, end] = [end, start]
      if (end <= start) {
        setMenu(null)
        return
      }
      const rect = range.getBoundingClientRect()
      setMenu({ x: rect.left + rect.width / 2, y: rect.top - 8, mode: 'select', start, end })
      return
    }

    const target = (e.target as HTMLElement).closest('span.ielts-hl') as HTMLElement | null
    if (target?.dataset.hlId) {
      setMenu({ x: e.clientX, y: e.clientY - 8, mode: 'existing', id: target.dataset.hlId })
      return
    }
    setMenu(null)
  }

  const askNote = (id: string) => {
    const note = window.prompt('Note:') ?? ''
    setHighlightNote(id, note)
  }

  const doHighlight = (withNote: boolean) => {
    if (menu?.mode !== 'select' || menu.start == null || menu.end == null) return
    const id = genId()
    window.getSelection()?.removeAllRanges()
    addHighlight({ id, passage, start: menu.start, end: menu.end })
    if (withNote) askNote(id)
    setMenu(null)
  }

  const doRemove = (id: string) => {
    removeHighlight(id)
    setMenu(null)
  }

  return (
    <div className="relative">
      <div ref={ref} onMouseUp={onMouseUp} className="passage ielts-scale" dangerouslySetInnerHTML={{ __html: html }} />

      {menu && (
        <div
          className="hl-menu fixed z-50 flex border shadow-lg text-sm"
          // Keep the text selection alive when the menu is clicked (mousedown
          // would otherwise collapse it before the click handler runs).
          onMouseDown={(e) => e.preventDefault()}
          style={{
            left: menu.x,
            top: menu.y,
            transform: 'translate(-50%, -100%)',
            background: 'var(--ielts-panel)',
            color: 'var(--ielts-panel-fg)',
            borderColor: 'var(--ielts-border)',
          }}
        >
          {menu.mode === 'select' ? (
            <>
              <button className="px-3 py-1 hover:opacity-70" onClick={() => doHighlight(false)}>
                Highlight
              </button>
              <button className="px-3 py-1 border-l hover:opacity-70" style={{ borderColor: 'var(--ielts-border)' }} onClick={() => doHighlight(true)}>
                Highlight + Note
              </button>
            </>
          ) : (
            <>
              <button className="px-3 py-1 hover:opacity-70" onClick={() => menu.id && askNote(menu.id)}>
                Note
              </button>
              <button className="px-3 py-1 border-l hover:opacity-70" style={{ borderColor: 'var(--ielts-border)' }} onClick={() => menu.id && doRemove(menu.id)}>
                Clear
              </button>
            </>
          )}
        </div>
      )}
    </div>
  )
}
