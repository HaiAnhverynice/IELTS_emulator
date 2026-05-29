import { useStore } from '../../store'
import type { Option } from '../../types'

/** Text input for a single-line gap / short answer. Focusing it makes that
 *  question the "current" one so the nav highlight follows the user. */
export function GapInput({ n, width }: { n: number; width?: string }) {
  const value = useStore((s) => s.answers[n]) as string | undefined
  const setAnswer = useStore((s) => s.setAnswer)
  const goToQuestion = useStore((s) => s.goToQuestion)
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
  return (
    <div className="flex flex-col gap-1 mt-1">
      {options.map((o) => (
        <label key={o.value} className="flex items-start gap-2 cursor-pointer">
          <input
            type="radio"
            name={`q${n}`}
            className="mt-1"
            checked={value === o.value}
            onChange={() => {
              goToQuestion(n)
              setAnswer(n, o.value)
            }}
          />
          <span>
            <span className="font-semibold mr-1">{o.value}</span>
            {o.label}
          </span>
        </label>
      ))}
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
