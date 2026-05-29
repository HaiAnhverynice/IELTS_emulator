import type { ReactNode } from 'react'
import { useStore } from '../../store'

/** Wraps a single discrete question: scroll anchor (#q{n}), its number, the
 *  body, and the "Review" flag checkbox shown in the real test. */
export default function QuestionShell({
  n,
  children,
}: {
  n: number
  children: ReactNode
}) {
  const flagged = useStore((s) => !!s.flags[n])
  const current = useStore((s) => s.currentQuestion === n)
  const toggleFlag = useStore((s) => s.toggleFlag)

  return (
    <div
      id={`q${n}`}
      className="py-2 scroll-mt-4"
      style={current ? { boxShadow: 'inset 3px 0 0 var(--ielts-accent)', paddingLeft: '0.6rem' } : undefined}
    >
      <div className="flex items-start gap-2">
        <span
          className="shrink-0 inline-flex items-center justify-center w-6 h-6 border text-sm font-bold"
          style={{ borderColor: 'var(--ielts-border)' }}
        >
          {n}
        </span>
        <div className="flex-1 min-w-0">{children}</div>
        <label className="shrink-0 flex items-center gap-1 text-xs opacity-70 cursor-pointer select-none">
          <input type="checkbox" checked={flagged} onChange={() => toggleFlag(n)} />
          Review
        </label>
      </div>
    </div>
  )
}
