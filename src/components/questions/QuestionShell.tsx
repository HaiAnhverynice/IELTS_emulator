import type { ReactNode } from 'react'
import { useStore } from '../../store'
import { useReview } from '../../lib/hooks'
import { EvidenceButton } from './inputs'

/** Wraps a single discrete question: scroll anchor (#q{n}), its number, the
 *  body, and the "Review" flag checkbox shown in the real test. */
export default function QuestionShell({
  n,
  children,
  evidence,
}: {
  n: number
  children: ReactNode
  /** When set and in review mode, shows a "Show in passage" affordance. */
  evidence?: string
}) {
  const flagged = useStore((s) => !!s.flags[n])
  const current = useStore((s) => s.currentQuestion === n)
  const toggleFlag = useStore((s) => s.toggleFlag)
  const review = useReview()
  const ok = review.reviewMode ? review.result?.perQuestion[n] : undefined

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
        <div className="flex-1 min-w-0">
          {children}
          {review.reviewMode && evidence && (
            <div className="mt-1">
              <EvidenceButton n={n} />
            </div>
          )}
        </div>
        {review.reviewMode ? (
          <span className={`shrink-0 text-lg font-bold ${ok ? 'rev-tick' : 'rev-cross'}`} aria-label={ok ? 'Correct' : 'Incorrect'}>
            {ok ? '✓' : '✗'}
          </span>
        ) : (
          <label className="shrink-0 flex items-center gap-1 text-xs opacity-70 cursor-pointer select-none">
            <input type="checkbox" checked={flagged} onChange={() => toggleFlag(n)} />
            Review
          </label>
        )}
      </div>
    </div>
  )
}
