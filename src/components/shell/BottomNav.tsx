import { useStore } from '../../store'
import { allQuestionNumbers, getSections } from '../../lib/sections'
import type { AnswerValue } from '../../types'

export function isAnswered(v: AnswerValue | undefined): boolean {
  if (v == null) return false
  if (Array.isArray(v)) return v.length > 0
  return v.trim().length > 0
}

export default function BottomNav({ onSubmit }: { onSubmit: () => void }) {
  const test = useStore((s) => s.test)
  const module = useStore((s) => s.module)
  const activeSection = useStore((s) => s.activeSection)
  const currentQuestion = useStore((s) => s.currentQuestion)
  const answers = useStore((s) => s.answers)
  const flags = useStore((s) => s.flags)
  const navigateTo = useStore((s) => s.navigateTo)
  const toggleFlag = useStore((s) => s.toggleFlag)
  const setActiveSection = useStore((s) => s.setActiveSection)

  if (!test || !module) return null
  const sections = getSections(test, module)
  const isWriting = module === 'writing'

  const flatQs = allQuestionNumbers(sections)
  const idx = flatQs.indexOf(currentQuestion)
  const goPrev = () => {
    if (isWriting) {
      setActiveSection(Math.max(0, activeSection - 1))
    } else if (idx > 0) {
      navigateTo(flatQs[idx - 1])
    }
  }
  const goNext = () => {
    if (isWriting) {
      setActiveSection(Math.min(sections.length - 1, activeSection + 1))
    } else if (idx >= 0 && idx < flatQs.length - 1) {
      navigateTo(flatQs[idx + 1])
    }
  }

  return (
    <footer
      className="shrink-0 border-t flex items-stretch"
      style={{ background: 'var(--ielts-panel)', color: 'var(--ielts-panel-fg)', borderColor: 'var(--ielts-border)' }}
    >
      <div className="flex-1 flex items-stretch overflow-x-auto ielts-scroll">
        {sections.map((sec, i) => {
          const answeredCount = sec.questions.filter((n) => isAnswered(answers[n])).length
          const isActive = i === activeSection

          if (isWriting) {
            return (
              <button
                key={i}
                onClick={() => setActiveSection(i)}
                className="px-4 border-r text-sm font-bold whitespace-nowrap"
                style={{
                  borderColor: 'var(--ielts-border)',
                  background: isActive ? 'var(--ielts-bg)' : 'transparent',
                }}
              >
                {sec.label}
              </button>
            )
          }

          if (!isActive) {
            return (
              <button
                key={i}
                onClick={() => {
                  setActiveSection(i)
                  if (sec.questions[0] != null) navigateTo(sec.questions[0])
                }}
                className="px-3 border-r text-sm whitespace-nowrap flex flex-col justify-center"
                style={{ borderColor: 'var(--ielts-border)' }}
                title={`Go to ${sec.label}`}
              >
                <span className="font-bold">{sec.label}</span>
                <span className="opacity-60 text-xs">
                  {answeredCount} of {sec.questions.length}
                </span>
              </button>
            )
          }

          // Active section: expand all question-number buttons.
          return (
            <div
              key={i}
              className="flex items-center gap-1 px-3 border-r"
              style={{ borderColor: 'var(--ielts-border)', background: 'var(--ielts-bg)' }}
            >
              <span className="font-bold text-sm mr-1 whitespace-nowrap">{sec.label}</span>
              <div className="flex items-center gap-1 py-2">
                {sec.questions.map((n) => (
                  <button
                    key={n}
                    className="qbtn"
                    data-answered={isAnswered(answers[n])}
                    data-flagged={!!flags[n]}
                    data-current={n === currentQuestion}
                    onClick={() => navigateTo(n)}
                    onContextMenu={(e) => {
                      e.preventDefault()
                      toggleFlag(n)
                    }}
                    title={flags[n] ? `Question ${n} (flagged — right-click to unflag)` : `Question ${n} (right-click to flag)`}
                  >
                    {n}
                  </button>
                ))}
              </div>
            </div>
          )
        })}
      </div>

      <div className="flex items-center gap-2 px-3 border-l" style={{ borderColor: 'var(--ielts-border)' }}>
        <button
          onClick={onSubmit}
          className="px-3 py-1 text-sm font-bold border"
          style={{ borderColor: 'var(--ielts-border)' }}
        >
          Submit
        </button>
        <button
          onClick={goPrev}
          className="w-9 h-9 border text-lg leading-none disabled:opacity-30"
          style={{ borderColor: 'var(--ielts-border)' }}
          disabled={isWriting ? activeSection === 0 : idx <= 0}
          aria-label="Previous"
        >
          ◀
        </button>
        <button
          onClick={goNext}
          className="w-9 h-9 border text-lg leading-none disabled:opacity-30"
          style={{ borderColor: 'var(--ielts-border)' }}
          disabled={isWriting ? activeSection === sections.length - 1 : idx >= flatQs.length - 1}
          aria-label="Next"
        >
          ▶
        </button>
      </div>
    </footer>
  )
}
