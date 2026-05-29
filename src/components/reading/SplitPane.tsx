import { useEffect, useRef, useState, type ReactNode } from 'react'

/** Horizontal split with a draggable divider — passage on the left, questions
 *  on the right, exactly like the computer-delivered Reading test. */
export default function SplitPane({ left, right }: { left: ReactNode; right: ReactNode }) {
  const [pct, setPct] = useState(52)
  const containerRef = useRef<HTMLDivElement>(null)
  const dragging = useRef(false)

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (!dragging.current || !containerRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      const next = ((e.clientX - rect.left) / rect.width) * 100
      setPct(Math.min(75, Math.max(25, next)))
    }
    const onUp = () => {
      dragging.current = false
      document.body.style.cursor = ''
      document.body.style.userSelect = ''
    }
    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseup', onUp)
    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseup', onUp)
    }
  }, [])

  return (
    <div ref={containerRef} className="flex flex-1 min-h-0">
      <div className="min-w-0 overflow-auto ielts-scroll" style={{ width: `${pct}%` }}>
        {left}
      </div>
      <div
        onMouseDown={() => {
          dragging.current = true
          document.body.style.cursor = 'col-resize'
          document.body.style.userSelect = 'none'
        }}
        className="w-2 shrink-0 cursor-col-resize"
        style={{ background: 'var(--ielts-border)' }}
        role="separator"
        aria-orientation="vertical"
      />
      <div className="min-w-0 overflow-auto ielts-scroll" style={{ width: `${100 - pct}%` }}>
        {right}
      </div>
    </div>
  )
}
