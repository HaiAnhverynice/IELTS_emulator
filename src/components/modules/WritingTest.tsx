import { useRef } from 'react'
import { useStore } from '../../store'
import { countWords } from '../../lib/scoring'
import { asset } from '../../lib/asset'
import type { WritingTask } from '../../types'
import SplitPane from '../reading/SplitPane'

function Editor({ task }: { task: WritingTask }) {
  const value = (useStore((s) => s.writing[task.number]) as string | undefined) ?? ''
  const setWriting = useStore((s) => s.setWriting)
  const ref = useRef<HTMLTextAreaElement>(null)
  const words = countWords(value)

  // The real test disables the right-click menu and provides Cut/Copy/Paste
  // buttons instead — replicate that here.
  const copy = async () => {
    const t = ref.current
    if (!t) return
    const sel = value.substring(t.selectionStart, t.selectionEnd)
    if (sel) await navigator.clipboard.writeText(sel).catch(() => {})
  }
  const cut = async () => {
    const t = ref.current
    if (!t) return
    const { selectionStart: a, selectionEnd: b } = t
    const sel = value.substring(a, b)
    if (!sel) return
    await navigator.clipboard.writeText(sel).catch(() => {})
    setWriting(task.number, value.slice(0, a) + value.slice(b))
    requestAnimationFrame(() => {
      t.focus()
      t.selectionStart = t.selectionEnd = a
    })
  }
  const paste = async () => {
    const t = ref.current
    if (!t) return
    try {
      const clip = await navigator.clipboard.readText()
      const { selectionStart: a, selectionEnd: b } = t
      setWriting(task.number, value.slice(0, a) + clip + value.slice(b))
      requestAnimationFrame(() => {
        t.focus()
        t.selectionStart = t.selectionEnd = a + clip.length
      })
    } catch {
      /* clipboard blocked */
    }
  }

  return (
    <div className="flex flex-col h-full">
      <div className="flex gap-2 p-2 border-b" style={{ borderColor: 'var(--ielts-border)' }}>
        {[
          ['Cut', cut],
          ['Copy', copy],
          ['Paste', paste],
        ].map(([label, fn]) => (
          <button
            key={label as string}
            onMouseDown={(e) => e.preventDefault()}
            onClick={fn as () => void}
            className="px-3 py-1 text-sm border"
            style={{ borderColor: 'var(--ielts-border)' }}
          >
            {label as string}
          </button>
        ))}
      </div>
      <textarea
        ref={ref}
        value={value}
        onChange={(e) => setWriting(task.number, e.target.value)}
        onContextMenu={(e) => e.preventDefault()}
        spellCheck={false}
        autoCorrect="off"
        autoCapitalize="off"
        className="flex-1 resize-none p-4 ielts-scale leading-relaxed outline-none"
        style={{ background: 'var(--ielts-bg)', color: 'var(--ielts-fg)' }}
        placeholder="Type your answer here…"
      />
      <div
        className="p-2 border-t text-sm flex justify-between"
        style={{ borderColor: 'var(--ielts-border)' }}
      >
        <span>
          Word count: <span className="font-bold">{words}</span>
        </span>
        <span className={words < task.minWords ? 'text-rose-500' : 'opacity-60'}>
          minimum {task.minWords} words
        </span>
      </div>
    </div>
  )
}

export default function WritingTest() {
  const test = useStore((s) => s.test)
  const activeSection = useStore((s) => s.activeSection)

  const writing = test?.writing
  if (!writing) return null
  const task = writing.tasks[activeSection]
  if (!task) return null

  return (
    <SplitPane
      left={
        <div className="p-5 ielts-scale">
          <div className="font-bold text-lg">Writing Task {task.number}</div>
          <p className="italic text-sm opacity-70 mt-1 mb-3">
            You should spend about {task.number === 1 ? 20 : 40} minutes on this task. Write at least{' '}
            {task.minWords} words.
          </p>
          <div dangerouslySetInnerHTML={{ __html: task.promptHtml }} />
          {task.imageUrl && (
            <img
              src={asset(task.imageUrl)}
              alt="Task 1 visual"
              className="max-w-full border mt-3"
              style={{ borderColor: 'var(--ielts-border)' }}
            />
          )}
        </div>
      }
      right={<Editor task={task} />}
    />
  )
}
