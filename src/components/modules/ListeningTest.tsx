import { useState } from 'react'
import { useStore } from '../../store'
import { usePendingScroll } from '../../lib/hooks'
import AudioPlayer from './AudioPlayer'
import QuestionGroupView from '../questions/QuestionGroupView'

export default function ListeningTest() {
  const test = useStore((s) => s.test)
  const activeSection = useStore((s) => s.activeSection)
  const navigateTo = useStore((s) => s.navigateTo)
  usePendingScroll()

  const [playingPart, setPlayingPart] = useState(0)

  const listening = test?.listening
  if (!listening) return null
  const parts = listening.parts
  const active = parts[activeSection]

  const onPartEnded = () => {
    const next = playingPart + 1
    if (next < parts.length) {
      setPlayingPart(next)
      const firstQ = parts[next].groups[0]?.questions[0]?.number
      if (firstQ != null) navigateTo(firstQ) // screen follows the recording
    }
  }

  return (
    <div className="flex-1 overflow-auto ielts-scroll p-5">
      <div className="max-w-3xl mx-auto ielts-scale">
        <AudioPlayer key={playingPart} part={parts[playingPart]} onEnded={onPartEnded} />

        {active && (
          <>
            <div className="mb-3">
              <div className="font-bold opacity-70">{active.heading}</div>
              {active.context && <p className="mt-1">{active.context}</p>}
            </div>
            {active.groups.map((g) => (
              <QuestionGroupView key={g.id} group={g} />
            ))}
          </>
        )}
      </div>
    </div>
  )
}
