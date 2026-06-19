import { memo, useCallback, useEffect, useRef, useState, type RefObject } from 'react'
import { useStore } from '../../store'
import type { HighlightColor } from '../../types'

const COLORS: { key: HighlightColor; swatch: string; label: string }[] = [
  { key: 'yellow', swatch: '#ffe14d', label: 'Yellow' },
  { key: 'green', swatch: '#9ae6b4', label: 'Green' },
  { key: 'pink', swatch: '#fbb6ce', label: 'Pink' },
]

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

function wrapPortion(node: Text, start: number, end: number, id: string, note?: string, color?: HighlightColor) {
  if (end <= start) return
  const r = document.createRange()
  r.setStart(node, start)
  r.setEnd(node, end)
  const span = document.createElement('span')
  span.className = 'ielts-hl'
  span.dataset.hlId = id
  span.dataset.color = color ?? 'yellow'
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

function wrapRange(range: Range, id: string, note?: string, color?: HighlightColor) {
  const nodes = intersectingTextNodes(range)
  const ops = nodes.map((node) => ({
    node,
    start: node === range.startContainer ? range.startOffset : 0,
    end: node === range.endContainer ? range.endOffset : node.length,
  }))
  for (const op of ops) wrapPortion(op.node, op.start, op.end, id, note, color)
}

function setColorOnSpans(id: string, color: HighlightColor, container: HTMLElement) {
  container.querySelectorAll<HTMLElement>(`span.ielts-hl[data-hl-id="${id}"]`).forEach((span) => {
    span.dataset.color = color
  })
}

/** Wrap a portion of one text node in a transient preview span (no hl-id,
 *  distinct class) so it is never confused with a committed highlight. */
function wrapPreviewPortion(node: Text, start: number, end: number) {
  if (end <= start) return
  const r = document.createRange()
  r.setStart(node, start)
  r.setEnd(node, end)
  const span = document.createElement('span')
  span.className = 'ielts-hl-preview'
  try {
    r.surroundContents(span)
  } catch {
    /* skip portions crossing element boundaries */
  }
}

/** Paint a temporary preview over [start,end] showing what will be
 *  highlighted once a colour is chosen. Run from an effect (after React
 *  commits) so the manual DOM mutation survives the re-render. */
function applyPreview(container: HTMLElement, start: number, end: number) {
  const s = locate(container, start)
  const e = locate(container, end)
  if (!s || !e) return
  const r = document.createRange()
  r.setStart(s.node, s.offset)
  r.setEnd(e.node, e.offset)
  const nodes = intersectingTextNodes(r)
  const ops = nodes.map((node) => ({
    node,
    start: node === r.startContainer ? r.startOffset : 0,
    end: node === r.endContainer ? r.endOffset : node.length,
  }))
  for (const op of ops) wrapPreviewPortion(op.node, op.start, op.end)
}

/** Remove all transient preview spans, restoring the original text. */
function clearPreview(container: HTMLElement) {
  container.querySelectorAll<HTMLElement>('span.ielts-hl-preview').forEach((span) => {
    const parent = span.parentNode
    if (!parent) return
    while (span.firstChild) parent.insertBefore(span.firstChild, span)
    parent.removeChild(span)
    parent.normalize()
  })
}

/** Wrap one text-node portion in an evidence span (distinct class, no hl-id) so
 *  it is never confused with a committed highlight. Returns the span. */
function wrapEvidencePortion(node: Text, start: number, end: number): HTMLElement | null {
  if (end <= start) return null
  const r = document.createRange()
  r.setStart(node, start)
  r.setEnd(node, end)
  const span = document.createElement('span')
  span.className = 'ielts-evidence'
  try {
    r.surroundContents(span)
    return span
  } catch {
    return null
  }
}

/** Paint an evidence highlight over [start,end] and return its first span. */
function applyEvidence(container: HTMLElement, start: number, end: number): HTMLElement | null {
  const s = locate(container, start)
  const e = locate(container, end)
  if (!s || !e) return null
  const r = document.createRange()
  r.setStart(s.node, s.offset)
  r.setEnd(e.node, e.offset)
  const nodes = intersectingTextNodes(r)
  const ops = nodes.map((node) => ({
    node,
    start: node === r.startContainer ? r.startOffset : 0,
    end: node === r.endContainer ? r.endOffset : node.length,
  }))
  let first: HTMLElement | null = null
  for (const op of ops) {
    const span = wrapEvidencePortion(op.node, op.start, op.end)
    if (span && !first) first = span
  }
  return first
}

/** Remove all evidence spans, restoring the original text. */
function clearEvidenceSpans(container: HTMLElement) {
  container.querySelectorAll<HTMLElement>('span.ielts-evidence').forEach((span) => {
    const parent = span.parentNode
    if (!parent) return
    while (span.firstChild) parent.insertBefore(span.firstChild, span)
    parent.removeChild(span)
    parent.normalize()
  })
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

/**
 * The passage body, rendered via dangerouslySetInnerHTML. Memoised so it never
 * re-renders on menu/state changes: otherwise React re-commits the element and
 * wipes the highlight spans we mutate into it by hand (they would vanish every
 * time the highlight menu pops up and only reappear after the next commit).
 * All props are stable (constant html, stable ref + handler), so it renders
 * exactly once.
 */
const PassageBody = memo(function PassageBody({
  html,
  innerRef,
  onMouseUp,
}: {
  html: string
  innerRef: RefObject<HTMLDivElement | null>
  onMouseUp: (e: React.MouseEvent) => void
}) {
  return (
    <div
      ref={innerRef}
      onMouseUp={onMouseUp}
      className="passage ielts-scale"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )
})

export default function Highlighter({ html, passage }: { html: string; passage: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const [menu, setMenu] = useState<Menu | null>(null)
  const highlights = useStore((s) => s.highlights)
  const addHighlight = useStore((s) => s.addHighlight)
  const removeHighlight = useStore((s) => s.removeHighlight)
  const setHighlightNote = useStore((s) => s.setHighlightNote)
  const setHighlightColor = useStore((s) => s.setHighlightColor)
  const evidence = useStore((s) => s.evidence)

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
        setColorOnSpans(h.id, h.color ?? 'yellow', container)
        continue
      }
      const s = locate(container, h.start)
      const e = locate(container, h.end)
      if (!s || !e) continue
      const r = document.createRange()
      r.setStart(s.node, s.offset)
      r.setEnd(e.node, e.offset)
      wrapRange(r, h.id, h.note, h.color)
    }
  }, [highlights, passage])

  // Flash-highlight the passage sentence that justifies a question's answer
  // (review mode). Cleared and repainted whenever the target changes; only the
  // passage that owns the evidence reacts. Depends only on [evidence, passage]
  // so adding/removing user highlights never re-scrolls the page.
  useEffect(() => {
    const container = ref.current
    if (!container) return
    clearEvidenceSpans(container)
    if (!evidence || evidence.passage !== passage) return
    const full = container.textContent ?? ''
    const i = full.indexOf(evidence.text)
    if (i < 0) return
    const span = applyEvidence(container, i, i + evidence.text.length)
    span?.scrollIntoView({ behavior: 'smooth', block: 'center' })
    return () => clearEvidenceSpans(container)
  }, [evidence, passage])

  useEffect(() => {
    const onDocDown = (e: MouseEvent) => {
      // Clicking the menu keeps the preview (a colour may be chosen); clicking
      // anywhere else dismisses the menu, which removes the preview.
      if (!(e.target as HTMLElement).closest('.hl-menu')) setMenu(null)
    }
    document.addEventListener('mousedown', onDocDown)
    return () => document.removeEventListener('mousedown', onDocDown)
  }, [])

  // Paint a temporary preview of the pending selection while the colour menu is
  // open. Done in an effect (after commit) so the manual DOM mutation survives
  // the re-render; the cleanup removes it when the menu closes or changes.
  useEffect(() => {
    const container = ref.current
    if (!container) return
    if (menu?.mode === 'select' && menu.start != null && menu.end != null) {
      applyPreview(container, menu.start, menu.end)
      return () => clearPreview(container)
    }
  }, [menu])

  // Stable so the memoised PassageBody never re-renders (see PassageBody note).
  // References only setMenu (stable) and the ref, so [] deps are safe.
  const onMouseUp = useCallback((e: React.MouseEvent) => {
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
      // Drop the native selection (its paint vanishes once the menu takes
      // focus anyway) and let the preview effect paint a stable DOM highlight
      // in a distinct colour over the captured offsets instead.
      sel.removeAllRanges()
      setMenu({ x: rect.left + rect.width / 2, y: rect.top - 8, mode: 'select', start, end })
      return
    }

    const target = (e.target as HTMLElement).closest('span.ielts-hl') as HTMLElement | null
    if (target?.dataset.hlId) {
      setMenu({ x: e.clientX, y: e.clientY - 8, mode: 'existing', id: target.dataset.hlId })
      return
    }
    setMenu(null)
  }, [])

  const askNote = (id: string) => {
    const note = window.prompt('Note:') ?? ''
    setHighlightNote(id, note)
  }

  const doHighlight = (color: HighlightColor, withNote: boolean) => {
    if (menu?.mode !== 'select' || menu.start == null || menu.end == null) return
    const id = genId()
    window.getSelection()?.removeAllRanges()
    // Remove the preview first so the reconcile effect wraps the committed
    // highlight over clean, un-split text nodes.
    if (ref.current) clearPreview(ref.current)
    addHighlight({ id, passage, start: menu.start, end: menu.end, color })
    if (withNote) askNote(id)
    setMenu(null)
  }

  const doRemove = (id: string) => {
    removeHighlight(id)
    setMenu(null)
  }

  return (
    <div className="relative">
      <PassageBody html={html} innerRef={ref} onMouseUp={onMouseUp} />

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
              {COLORS.map((c) => (
                <button
                  key={c.key}
                  className="px-2 py-1 hover:opacity-70"
                  title={`Highlight ${c.label}`}
                  onClick={() => doHighlight(c.key, false)}
                >
                  <span
                    className="inline-block w-4 h-4 rounded-sm border align-middle"
                    style={{ background: c.swatch, borderColor: 'var(--ielts-border)' }}
                  />
                </button>
              ))}
              <button
                className="px-3 py-1 border-l hover:opacity-70"
                style={{ borderColor: 'var(--ielts-border)' }}
                onClick={() => doHighlight('yellow', true)}
              >
                + Note
              </button>
            </>
          ) : (
            <>
              {COLORS.map((c) => (
                <button
                  key={c.key}
                  className="px-2 py-1 hover:opacity-70"
                  title={`Recolour ${c.label}`}
                  onClick={() => menu.id && setHighlightColor(menu.id, c.key)}
                >
                  <span
                    className="inline-block w-4 h-4 rounded-sm border align-middle"
                    style={{ background: c.swatch, borderColor: 'var(--ielts-border)' }}
                  />
                </button>
              ))}
              <button
                className="px-3 py-1 border-l hover:opacity-70"
                style={{ borderColor: 'var(--ielts-border)' }}
                onClick={() => menu.id && askNote(menu.id)}
              >
                Note
              </button>
              <button
                className="px-3 py-1 border-l hover:opacity-70"
                style={{ borderColor: 'var(--ielts-border)' }}
                onClick={() => menu.id && doRemove(menu.id)}
              >
                Clear
              </button>
            </>
          )}
        </div>
      )}
    </div>
  )
}
