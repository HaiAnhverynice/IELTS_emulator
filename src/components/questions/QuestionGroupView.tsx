import { useMemo, type ReactNode } from 'react'
import { useStore } from '../../store'
import { useReview } from '../../lib/hooks'
import type { Option, QuestionGroup } from '../../types'
import { htmlToReact } from '../../lib/htmlToReact'
import { asset } from '../../lib/asset'
import { Dropdown, GapInput, RadioGroup } from './inputs'
import QuestionShell from './QuestionShell'

const TFNG: Option[] = [
  { value: 'TRUE', label: 'True' },
  { value: 'FALSE', label: 'False' },
  { value: 'NOT GIVEN', label: 'Not Given' },
]
const YNNG: Option[] = [
  { value: 'YES', label: 'Yes' },
  { value: 'NO', label: 'No' },
  { value: 'NOT GIVEN', label: 'Not Given' },
]

function questionRange(group: QuestionGroup): string {
  const nums = group.questions.map((q) => q.number)
  if (nums.length === 0) return ''
  const lo = Math.min(...nums)
  const hi = Math.max(...nums)
  return lo === hi ? `Question ${lo}` : `Questions ${lo}–${hi}`
}

function Instructions({ group }: { group: QuestionGroup }) {
  return (
    <div className="mb-3">
      <div className="font-bold">{questionRange(group)}</div>
      <div className="mt-1" dangerouslySetInnerHTML={{ __html: group.instructions }} />
      {group.wordLimit && (
        <div className="mt-1 font-bold italic uppercase text-sm">{group.wordLimit}</div>
      )}
    </div>
  )
}

/** Shared option bank shown above matching / heading / map questions. */
function OptionBank({ title, options }: { title: string; options: Option[] }) {
  return (
    <div className="mb-3 border p-3" style={{ borderColor: 'var(--ielts-border)', background: 'var(--ielts-panel)' }}>
      <div className="font-bold mb-1">{title}</div>
      <ul className="space-y-0.5">
        {options.map((o) => (
          <li key={o.value}>
            <span className="font-semibold mr-2">{o.value}</span>
            {o.label}
          </li>
        ))}
      </ul>
    </div>
  )
}

/** Renders bodyHtml where `{{n}}` placeholders become numbered input boxes,
 *  parsing the HTML into a React tree so arbitrary structure (notes, forms,
 *  tables, flow-charts) is preserved and the inputs are fully React-managed. */
function InlineGapBody({ html }: { html: string }) {
  const tree = useMemo(
    () =>
      htmlToReact(html, (n) => (
        <span id={`q${n}`} className="scroll-mt-4 inline-flex items-baseline">
          <GapInput n={n} width="6rem" />
        </span>
      )),
    [html],
  )
  return <div className="inline-gap-body">{tree}</div>
}

/** Checkboxes for "Choose TWO/THREE letters" — one selection set written to
 *  every question number the group covers. */
function MultiSelect({ group }: { group: QuestionGroup }) {
  const nums = group.questions.map((q) => q.number)
  const value = (useStore((s) => s.answers[nums[0]]) as string[] | undefined) ?? []
  const setAnswerMany = useStore((s) => s.setAnswerMany)
  const goToQuestion = useStore((s) => s.goToQuestion)
  const review = useReview()
  const max = nums.length
  const options = group.options ?? []

  const toggle = (v: string) => {
    goToQuestion(nums[0])
    if (value.includes(v)) setAnswerMany(nums, value.filter((x) => x !== v))
    else if (value.length < max) setAnswerMany(nums, [...value, v])
  }

  // Correct letters for this group = the union of accepted answers across its
  // question numbers (the key stores them per number).
  const correctSet = new Set(
    review.reviewMode
      ? nums.flatMap((n) => {
          const k = review.key?.[n]
          return (Array.isArray(k) ? k : k ? [k] : []).map((x) => String(x).trim().toUpperCase())
        })
      : [],
  )
  const gotCount = nums.reduce((acc, n) => acc + (review.result?.perQuestion[n] ? 1 : 0), 0)

  return (
    <div>
      <div className="flex flex-col gap-1">
        {options.map((o) => {
          const checked = value.includes(o.value)
          const atLimit = !checked && value.length >= max
          const isCorrectOpt = review.reviewMode && correctSet.has(o.value.trim().toUpperCase())
          const isWrongPick = review.reviewMode && checked && !isCorrectOpt
          return (
            <label
              key={o.value}
              className={`flex items-start gap-2 ${review.reviewMode ? '' : atLimit ? 'opacity-40' : 'cursor-pointer'}`}
            >
              <input
                type="checkbox"
                className="mt-1"
                checked={checked}
                disabled={review.reviewMode || atLimit}
                onChange={() => toggle(o.value)}
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
      {review.reviewMode ? (
        <div className="text-xs mt-1 font-semibold">
          {gotCount} of {max} marks
        </div>
      ) : (
        <div className="text-xs opacity-60 mt-1">
          {value.length} of {max} selected
        </div>
      )}
    </div>
  )
}

/** Render a stem that may contain a `___` blank inline; otherwise append the
 *  input after the text. */
function StemWithBlank({ text, n }: { text: string; n: number }): ReactNode {
  if (text.includes('___')) {
    const [before, ...rest] = text.split(/_{3,}/)
    const after = rest.join('___')
    return (
      <span>
        {before}
        <GapInput n={n} />
        {after}
      </span>
    )
  }
  return (
    <span>
      {text} <GapInput n={n} />
    </span>
  )
}

export default function QuestionGroupView({ group }: { group: QuestionGroup }) {
  return (
    <section className="mb-7">
      <Instructions group={group} />
      <GroupBody group={group} />
    </section>
  )
}

function GroupBody({ group }: { group: QuestionGroup }) {
  switch (group.type) {
    case 'mcq-single':
      return (
        <>
          {group.questions.map((q) => (
            <QuestionShell key={q.number} n={q.number}>
              <div>{q.text}</div>
              <RadioGroup n={q.number} options={q.options ?? []} />
            </QuestionShell>
          ))}
        </>
      )

    case 'mcq-multi':
      // The whole group shares one checkbox set; anchor it on the first number.
      return (
        <div id={`q${group.questions[0]?.number}`} className="scroll-mt-4">
          <MultiSelect group={group} />
        </div>
      )

    case 'tfng':
    case 'ynng':
      return (
        <>
          {group.questions.map((q) => (
            <QuestionShell key={q.number} n={q.number}>
              <div>{q.text}</div>
              <RadioGroup n={q.number} options={group.type === 'tfng' ? TFNG : YNNG} />
            </QuestionShell>
          ))}
        </>
      )

    case 'matching':
      return (
        <>
          {group.options && <OptionBank title="Options" options={group.options} />}
          {group.questions.map((q) => (
            <QuestionShell key={q.number} n={q.number}>
              <div className="flex items-center gap-2 flex-wrap">
                <span className="flex-1 min-w-0">{q.text}</span>
                <Dropdown n={q.number} options={group.options ?? []} />
              </div>
            </QuestionShell>
          ))}
        </>
      )

    case 'matching-headings':
      return (
        <>
          {group.options && <OptionBank title="List of Headings" options={group.options} />}
          {group.questions.map((q) => (
            <QuestionShell key={q.number} n={q.number}>
              <div className="flex items-center gap-2 flex-wrap">
                <span className="flex-1 min-w-0">{q.text}</span>
                <Dropdown n={q.number} options={group.options ?? []} />
              </div>
            </QuestionShell>
          ))}
        </>
      )

    case 'map-labeling':
      return (
        <>
          {group.imageUrl && (
            <img src={asset(group.imageUrl)} alt="Map or plan to label" className="max-w-full border mb-3" style={{ borderColor: 'var(--ielts-border)' }} />
          )}
          {group.options && <OptionBank title="Options" options={group.options} />}
          {group.questions.map((q) => (
            <QuestionShell key={q.number} n={q.number}>
              <div className="flex items-center gap-2 flex-wrap">
                <span className="flex-1 min-w-0">{q.text}</span>
                <Dropdown n={q.number} options={group.options ?? []} />
              </div>
            </QuestionShell>
          ))}
        </>
      )

    case 'inline-gap':
      return (
        <div className="ielts-inline-gap">
          {group.bodyHtml && <InlineGapBody html={group.bodyHtml} />}
        </div>
      )

    case 'gap-fill':
      return (
        <>
          {group.questions.map((q) => (
            <QuestionShell key={q.number} n={q.number}>
              <StemWithBlank text={q.text ?? ''} n={q.number} />
            </QuestionShell>
          ))}
        </>
      )

    case 'short-answer':
      return (
        <>
          {group.questions.map((q) => (
            <QuestionShell key={q.number} n={q.number}>
              <div className="mb-1">{q.text}</div>
              <GapInput n={q.number} width="12rem" />
            </QuestionShell>
          ))}
        </>
      )

    default:
      return null
  }
}
