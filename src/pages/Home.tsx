import { useRef, useState } from 'react'
import { useStore } from '../store'
import { builtInTests } from '../data'
import {
  downloadTemplate,
  loadImportedTests,
  parseTest,
  saveImportedTests,
} from '../lib/importTest'
import { clearSession, loadSession } from '../lib/session'
import { formatClock } from '../lib/hooks'
import type { IeltsTest, ModuleType } from '../types'

const MODULES: { key: ModuleType; label: string }[] = [
  { key: 'listening', label: 'Listening' },
  { key: 'reading', label: 'Reading' },
  { key: 'writing', label: 'Writing' },
]

function TestCard({ test, onRemove }: { test: IeltsTest; onRemove?: () => void }) {
  const loadAndStart = useStore((s) => s.loadAndStart)
  const counts: Record<ModuleType, number | null> = {
    listening: test.listening ? test.listening.parts.flatMap((p) => p.groups).flatMap((g) => g.questions).length : null,
    reading: test.reading ? test.reading.passages.flatMap((p) => p.groups).flatMap((g) => g.questions).length : null,
    writing: test.writing ? test.writing.tasks.length : null,
  }

  return (
    <div className="border p-4" style={{ borderColor: 'var(--ielts-border)' }}>
      <div className="flex items-start justify-between gap-2">
        <div>
          <h3 className="font-bold text-lg">{test.title}</h3>
          <span className="text-xs uppercase tracking-wide opacity-60">{test.category}</span>
        </div>
        {onRemove && (
          <button className="text-xs underline opacity-60 hover:opacity-100" onClick={onRemove}>
            remove
          </button>
        )}
      </div>

      {test.source && <p className="text-xs opacity-60 mt-1">{test.source}</p>}

      <div className="flex flex-wrap gap-2 mt-3">
        {MODULES.map((m) => {
          const available = counts[m.key] != null
          return (
            <button
              key={m.key}
              disabled={!available}
              onClick={() => loadAndStart(test, m.key)}
              className="px-3 py-1.5 border text-sm font-semibold disabled:opacity-30"
              style={{ borderColor: 'var(--ielts-border)' }}
            >
              {m.label}
              {available && m.key !== 'writing' && <span className="opacity-50"> · {counts[m.key]}Q</span>}
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default function Home() {
  const [imported, setImported] = useState<IeltsTest[]>(() => loadImportedTests())
  const [paste, setPaste] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [showImport, setShowImport] = useState(false)
  const [session, setSession] = useState(() => loadSession())
  const fileRef = useRef<HTMLInputElement>(null)
  const resumeSession = useStore((s) => s.resumeSession)

  const sessionTest = session
    ? [...builtInTests, ...imported].find((t) => t.id === session.testId)
    : undefined

  const addTest = (json: string) => {
    try {
      const t = parseTest(json)
      const next = [...imported.filter((x) => x.id !== t.id), t]
      setImported(next)
      saveImportedTests(next)
      setPaste('')
      setError(null)
      setShowImport(false)
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Import failed.')
    }
  }

  const removeTest = (id: string) => {
    const next = imported.filter((x) => x.id !== id)
    setImported(next)
    saveImportedTests(next)
  }

  const onFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return
    file.text().then(addTest)
    e.target.value = ''
  }

  return (
    <div className="flex-1 overflow-auto ielts-scroll">
      <div className="max-w-3xl mx-auto p-6">
        <h1 className="text-2xl font-bold">IELTS on Computer — Practice Simulator</h1>
        <p className="opacity-70 mt-1">
          A faithful re-creation of the computer-delivered IELTS test environment: timed Listening,
          Reading and Writing modules, the same navigation, highlighter, settings and review tools.
        </p>

        <div className="border-l-4 p-3 my-5 text-sm" style={{ borderColor: 'var(--ielts-flag)', background: 'var(--ielts-panel)' }}>
          <strong>About the content.</strong> The bundled test is original material written for this
          app (CC0) and is <em>not</em> affiliated with Cambridge or IELTS. Cambridge IELTS books are
          copyrighted, so they are not included. Use the importer to load any test you legally own, and
          add officially free practice material from <span className="font-mono">ielts.org</span>,
          the British Council or IDP. Listening audio is spoken by your browser from a transcript.
        </div>

        {session && sessionTest && (
          <div
            className="border p-4 my-5 flex items-center justify-between gap-3"
            style={{ borderColor: 'var(--ielts-accent)', background: 'var(--ielts-panel)' }}
          >
            <div>
              <div className="font-bold">Resume your test in progress</div>
              <div className="text-sm opacity-70">
                {sessionTest.title} — {session.module}
                {session.endsAt != null &&
                  ` · ${formatClock(Math.max(0, Math.round((session.endsAt - Date.now()) / 1000)))} left`}
              </div>
            </div>
            <div className="flex gap-2 shrink-0">
              <button
                className="px-3 py-1.5 text-sm border"
                style={{ borderColor: 'var(--ielts-border)' }}
                onClick={() => {
                  clearSession()
                  setSession(null)
                }}
              >
                Discard
              </button>
              <button
                className="px-3 py-1.5 text-sm font-bold border"
                style={{ borderColor: 'var(--ielts-border)', background: 'var(--ielts-accent)', color: 'var(--ielts-accent-fg)' }}
                onClick={() => resumeSession(sessionTest, session)}
              >
                Resume
              </button>
            </div>
          </div>
        )}

        <h2 className="font-bold text-lg mt-6 mb-2">Tests</h2>
        <div className="grid gap-3">
          {builtInTests.map((t) => (
            <TestCard key={t.id} test={t} />
          ))}
          {imported.map((t) => (
            <TestCard key={t.id} test={t} onRemove={() => removeTest(t.id)} />
          ))}
        </div>

        <div className="mt-6">
          <div className="flex gap-2">
            <button
              className="px-3 py-1.5 border text-sm font-semibold"
              style={{ borderColor: 'var(--ielts-border)' }}
              onClick={() => setShowImport((v) => !v)}
            >
              {showImport ? 'Close importer' : '+ Import a test (JSON)'}
            </button>
            <button
              className="px-3 py-1.5 border text-sm"
              style={{ borderColor: 'var(--ielts-border)' }}
              onClick={downloadTemplate}
            >
              Download JSON template
            </button>
          </div>

          {showImport && (
            <div className="border p-4 mt-3" style={{ borderColor: 'var(--ielts-border)' }}>
              <label className="block text-sm font-semibold mb-1">Upload a .json file</label>
              <input ref={fileRef} type="file" accept="application/json,.json" onChange={onFile} className="text-sm" />

              <div className="text-sm font-semibold mt-4 mb-1">…or paste JSON</div>
              <textarea
                value={paste}
                onChange={(e) => setPaste(e.target.value)}
                spellCheck={false}
                className="w-full h-40 border p-2 font-mono text-xs"
                style={{ borderColor: 'var(--ielts-border)', background: 'var(--ielts-bg)', color: 'var(--ielts-fg)' }}
                placeholder='{ "id": "...", "title": "...", "reading": { ... } }'
              />
              <div className="flex gap-2 mt-2">
                <button
                  className="px-3 py-1.5 border text-sm font-semibold"
                  style={{ borderColor: 'var(--ielts-border)', background: 'var(--ielts-accent)', color: 'var(--ielts-accent-fg)' }}
                  onClick={() => addTest(paste)}
                >
                  Import
                </button>
              </div>
              {error && <p className="text-rose-500 text-sm mt-2">{error}</p>}
            </div>
          )}
        </div>

        <p className="text-xs opacity-50 mt-8">
          Speaking is a face-to-face / video interview in the real exam and is not part of the
          computer-delivered session, so it is not simulated here.
        </p>
      </div>
    </div>
  )
}
