import { useStore } from '../store'
import {
  collectGroups,
  countWords,
  listeningBand,
  markTest,
  readingBand,
} from '../lib/scoring'
import type { AnswerKey, AnswerValue, QuestionGroup } from '../types'

function fmt(v: AnswerValue | string | string[] | undefined): string {
  if (v == null) return '—'
  if (Array.isArray(v)) return v.length ? v.join(', ') : '—'
  return v.trim() ? v : '—'
}

function ResultsHeader({ title }: { title: string }) {
  const exitToHome = useStore((s) => s.exitToHome)
  return (
    <header
      className="shrink-0 flex items-center justify-between px-4 h-12 border-b"
      style={{ background: 'var(--ielts-panel)', color: 'var(--ielts-panel-fg)', borderColor: 'var(--ielts-border)' }}
    >
      <span className="font-bold">{title}</span>
      <button className="px-3 py-1 border text-sm" style={{ borderColor: 'var(--ielts-border)' }} onClick={exitToHome}>
        ← Back to start
      </button>
    </header>
  )
}

function WritingResults() {
  const test = useStore((s) => s.test)
  const writing = useStore((s) => s.writing)
  const tasks = test?.writing?.tasks ?? []

  return (
    <div className="flex flex-col h-full">
      <ResultsHeader title="IELTS on Computer — Writing submitted" />
      <div className="flex-1 overflow-auto ielts-scroll p-6">
        <div className="max-w-3xl mx-auto">
          <div className="border p-4 mb-5" style={{ borderColor: 'var(--ielts-border)', background: 'var(--ielts-panel)' }}>
            <h2 className="font-bold mb-1">No automatic band for Writing</h2>
            <p className="text-sm">
              Writing is assessed by a trained examiner on four criteria: Task Achievement/Response,
              Coherence &amp; Cohesion, Lexical Resource, and Grammatical Range &amp; Accuracy. Use your
              responses below for self-review or to share with a teacher.
            </p>
          </div>

          {tasks.map((t) => {
            const text = (writing[t.number] as string | undefined) ?? ''
            const words = countWords(text)
            return (
              <div key={t.number} className="mb-6">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold">Task {t.number}</h3>
                  <span className={`text-sm ${words < t.minWords ? 'text-rose-500' : 'opacity-60'}`}>
                    {words} words (min {t.minWords})
                  </span>
                </div>
                <pre
                  className="whitespace-pre-wrap font-sans border p-3 text-sm"
                  style={{ borderColor: 'var(--ielts-border)' }}
                >
                  {text || '(no response)'}
                </pre>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default function Results() {
  const test = useStore((s) => s.test)
  const module = useStore((s) => s.module)
  const answers = useStore((s) => s.answers)

  if (!test || !module) return null
  if (module === 'writing') return <WritingResults />

  const key: AnswerKey = (module === 'listening' ? test.listening?.answerKey : test.reading?.answerKey) ?? {}
  const result = markTest(test, module, answers)
  const band = module === 'listening' ? listeningBand(result.correct) : readingBand(result.correct, test.category)
  const groups = collectGroups(test, module)
  const sectionLabel = module === 'listening' ? 'Part' : 'Passage'
  const moduleSections = (module === 'listening' ? test.listening!.parts : test.reading!.passages) as Array<{
    number: number
    groups: QuestionGroup[]
  }>

  return (
    <div className="flex flex-col h-full">
      <ResultsHeader title={`IELTS on Computer — ${module === 'listening' ? 'Listening' : 'Reading'} results`} />
      <div className="flex-1 overflow-auto ielts-scroll p-6">
        <div className="max-w-3xl mx-auto">
          <div
            className="border p-6 mb-6 flex items-center justify-around text-center"
            style={{ borderColor: 'var(--ielts-border)', background: 'var(--ielts-panel)' }}
          >
            <div>
              <div className="text-5xl font-bold">{band.toFixed(1)}</div>
              <div className="text-sm opacity-70 mt-1">Estimated band</div>
            </div>
            <div>
              <div className="text-5xl font-bold">
                {result.correct}
                <span className="text-2xl opacity-60">/{result.total}</span>
              </div>
              <div className="text-sm opacity-70 mt-1">Correct answers</div>
            </div>
          </div>
          <p className="text-xs opacity-60 mb-5">
            Band is a published approximation of the raw-score conversion and is indicative only.
          </p>

          {/* Per-question review, grouped by part/passage */}
          {moduleSections.map((sec, si) => {
            const secGroups = groups.filter((g) => sec.groups.includes(g))
            return (
              <div key={si} className="mb-5">
                <h3 className="font-bold mb-2">
                  {sectionLabel} {sec.number}
                </h3>
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="text-left opacity-70">
                      <th className="border px-2 py-1 w-12" style={{ borderColor: 'var(--ielts-border)' }}>#</th>
                      <th className="border px-2 py-1" style={{ borderColor: 'var(--ielts-border)' }}>Your answer</th>
                      <th className="border px-2 py-1" style={{ borderColor: 'var(--ielts-border)' }}>Correct answer</th>
                      <th className="border px-2 py-1 w-10" style={{ borderColor: 'var(--ielts-border)' }} />
                    </tr>
                  </thead>
                  <tbody>
                    {secGroups.flatMap((g) =>
                      g.questions.map((q) => {
                        const ok = result.perQuestion[q.number]
                        const userAns = g.type === 'mcq-multi' ? answers[g.questions[0].number] : answers[q.number]
                        return (
                          <tr key={q.number}>
                            <td className="border px-2 py-1 font-bold" style={{ borderColor: 'var(--ielts-border)' }}>{q.number}</td>
                            <td className="border px-2 py-1" style={{ borderColor: 'var(--ielts-border)' }}>{fmt(userAns)}</td>
                            <td className="border px-2 py-1" style={{ borderColor: 'var(--ielts-border)' }}>{fmt(key[q.number])}</td>
                            <td className="border px-2 py-1 text-center" style={{ borderColor: 'var(--ielts-border)' }}>
                              {ok ? '✓' : '✗'}
                            </td>
                          </tr>
                        )
                      }),
                    )}
                  </tbody>
                </table>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
