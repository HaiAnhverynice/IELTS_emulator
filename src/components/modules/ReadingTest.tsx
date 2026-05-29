import { useStore } from '../../store'
import { usePendingScroll } from '../../lib/hooks'
import SplitPane from '../reading/SplitPane'
import Highlighter from '../reading/Highlighter'
import QuestionGroupView from '../questions/QuestionGroupView'

export default function ReadingTest() {
  const test = useStore((s) => s.test)
  const activeSection = useStore((s) => s.activeSection)
  usePendingScroll()

  const reading = test?.reading
  if (!reading) return null
  const passages = reading.passages
  const active = passages[activeSection]

  return (
    <SplitPane
      left={
        <div className="p-5">
          {/* All passages stay mounted so highlights survive passage switches. */}
          {passages.map((p, i) => (
            <div key={p.number} style={{ display: i === activeSection ? 'block' : 'none' }}>
              <div className="mb-3">
                <div className="font-bold opacity-70">{p.heading}</div>
                <h3 className="text-xl font-bold">{p.title}</h3>
                <p className="text-sm italic opacity-70 mt-1">
                  You should spend about 20 minutes on this passage.
                </p>
              </div>
              <Highlighter html={p.html} passage={p.number} />
            </div>
          ))}
        </div>
      }
      right={
        <div className="p-5 ielts-scale">
          {active?.groups.map((g) => (
            <QuestionGroupView key={g.id} group={g} />
          ))}
        </div>
      }
    />
  )
}
