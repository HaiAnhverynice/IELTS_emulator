import { useStore } from '../../store'
import { useReview } from '../../lib/hooks'
import type { Option } from '../../types'

/** Format an accepted-answer key value (string or list of variants) for the
 *  "correct answer" hint shown in review. */
function fmtKey(k: string | string[] | undefined): string {
  if (k == null) return '—'
  return Array.isArray(k) ? k.join(' / ') : k
}

/** Case/space-insensitive membership test against accepted variants. */
function isAccepted(v: string, k: string | string[] | undefined): boolean {
  if (k == null) return false
  const norm = (s: string) => s.trim().toLowerCase()
  const variants = Array.isArray(k) ? k : [k]
  return variants.some((x) => norm(x) === norm(v))
}

/** Review-mode affordance: jump to and flash the passage text that justifies
 *  this question's answer. Rendered only when the question has `evidence`. */
export function EvidenceButton({ n }: { n: number }) {
  const reveal = useStore((s) => s.revealEvidenceFor)
  return (
    <button
      type="button"
      onClick={() => reveal(n)}
      className="text-xs underline opacity-70 hover:opacity-100 cursor-pointer"
      title="Show the supporting text in the passage"
      aria-label={`Show the supporting text for question ${n} in the passage`}
    >
      🔍 Show in passage
    </button>
  )
}

/** Text input for a single-line gap / short answer. Focusing it makes that
 *  question the "current" one so the nav highlight follows the user. */
export function GapInput({ n, width }: { n: number; width?: string }) {
  const value = useStore((s) => s.answers[n]) as string | undefined
  const setAnswer = useStore((s) => s.setAnswer)
  const goToQuestion = useStore((s) => s.goToQuestion)
  const review = useReview()

  if (review.reviewMode) {
    const ok = review.result?.perQuestion[n]
    return (
      <span className="inline-flex items-baseline gap-1">
        <input
          type="text"
          readOnly
          className={`ielts-input ielts-gap ${ok ? 'rev-ok' : 'rev-bad'}`}
          style={width ? { minWidth: width } : undefined}
          value={value ?? ''}
          aria-label={`Answer ${n}`}
        />
        {ok ? (
          <span className="rev-tick">✓</span>
        ) : (
          <span className="rev-correct">✗ {fmtKey(review.key?.[n])}</span>
        )}
      </span>
    )
  }

  return (
    <input
      type="text"
      className="ielts-input ielts-gap"
      style={width ? { minWidth: width } : undefined}
      value={value ?? ''}
      onChange={(e) => setAnswer(n, e.target.value)}
      onFocus={() => goToQuestion(n)}
      autoComplete="off"
      spellCheck={false}
      aria-label={`Answer ${n}`}
    />
  )
}

export function RadioGroup({ n, options }: { n: number; options: Option[] }) {
  const value = useStore((s) => s.answers[n]) as string | undefined
  const setAnswer = useStore((s) => s.setAnswer)
  const goToQuestion = useStore((s) => s.goToQuestion)
  const review = useReview()
  const correct = review.reviewMode ? review.key?.[n] : undefined

  return (
    <div className="flex flex-col gap-1 mt-1">
      {options.map((o) => {
        const isCorrectOpt = review.reviewMode && isAccepted(o.value, correct)
        const isWrongPick = review.reviewMode && value === o.value && !isCorrectOpt
        return (
          <label
            key={o.value}
            className={`flex items-start gap-2 ${review.reviewMode ? '' : 'cursor-pointer'}`}
          >
            <input
              type="radio"
              name={`q${n}`}
              className="mt-1"
              checked={value === o.value}
              disabled={review.reviewMode}
              onChange={() => {
                goToQuestion(n)
                setAnswer(n, o.value)
              }}
            />
            <span className={isCorrectOpt ? 'rev-opt-correct' : isWrongPick ? 'rev-opt-wrong' : ''}>
              <span className="font-semibold mr-1">{o.value}</span>
              {o.label}
              {isCorrectOpt && <span className="rev-tick ml-1">✓</span>}
              {isWrongPick && <span className="rev-cross ml-1">✗</span>}
            </span>
          </label>
        )
      })}
    </div>
  )
}

export function CheckboxGroup({ n, options, maxSelect }: { n: number; options: Option[]; maxSelect: number }) {
  const value = (useStore((s) => s.answers[n]) as string[] | undefined) ?? []
  const setAnswer = useStore((s) => s.setAnswer)
  const goToQuestion = useStore((s) => s.goToQuestion)

  const toggle = (v: string) => {
    goToQuestion(n)
    if (value.includes(v)) {
      setAnswer(n, value.filter((x) => x !== v))
    } else if (value.length < maxSelect) {
      setAnswer(n, [...value, v])
    }
    // At the limit, further ticks are ignored (matches the exam UI).
  }

  return (
    <div className="flex flex-col gap-1 mt-1">
      {options.map((o) => {
        const checked = value.includes(o.value)
        const atLimit = !checked && value.length >= maxSelect
        return (
          <label key={o.value} className={`flex items-start gap-2 ${atLimit ? 'opacity-40' : 'cursor-pointer'}`}>
            <input type="checkbox" className="mt-1" checked={checked} disabled={atLimit} onChange={() => toggle(o.value)} />
            <span>
              <span className="font-semibold mr-1">{o.value}</span>
              {o.label}
            </span>
          </label>
        )
      })}
    </div>
  )
}

/** Dropdown used for matching / matching-headings / map-labeling — the
 *  computer-delivered test presents these as select menus. */
export function Dropdown({ n, options }: { n: number; options: Option[] }) {
  const value = useStore((s) => s.answers[n]) as string | undefined
  const setAnswer = useStore((s) => s.setAnswer)
  const goToQuestion = useStore((s) => s.goToQuestion)
  const review = useReview()

  if (review.reviewMode) {
    const ok = review.result?.perQuestion[n]
    return (
      <span className="inline-flex items-baseline gap-1">
        <span className={`ielts-input ${ok ? 'rev-ok' : 'rev-bad'}`}>{value || '—'}</span>
        {ok ? (
          <span className="rev-tick">✓</span>
        ) : (
          <span className="rev-correct">✗ {fmtKey(review.key?.[n])}</span>
        )}
      </span>
    )
  }

  return (
    <select
      className="ielts-input"
      value={value ?? ''}
      onChange={(e) => {
        goToQuestion(n)
        setAnswer(n, e.target.value)
      }}
      onFocus={() => goToQuestion(n)}
      aria-label={`Answer ${n}`}
    >
      <option value="">—</option>
      {options.map((o) => (
        <option key={o.value} value={o.value}>
          {o.value}
          {o.label ? ` · ${o.label}` : ''}
        </option>
      ))}
    </select>
  )
}
