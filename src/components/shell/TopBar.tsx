import { useCallback, useEffect, useRef, useState } from 'react'
import { useStore } from '../../store'
import { formatClock, useRemainingSeconds } from '../../lib/hooks'
import SettingsMenu from './SettingsMenu'

const MODULE_LABEL: Record<string, string> = {
  listening: 'Listening',
  reading: 'Reading',
  writing: 'Writing',
}

export default function TopBar() {
  const module = useStore((s) => s.module)
  const endsAt = useStore((s) => s.endsAt)
  const submit = useStore((s) => s.submit)
  const submitted = useStore((s) => s.submitted)
  const showTimer = useStore((s) => s.settings.showTimer)
  const updateSettings = useStore((s) => s.updateSettings)
  const volume = useStore((s) => s.volume)
  const setVolume = useStore((s) => s.setVolume)

  const [menuOpen, setMenuOpen] = useState(false)
  const [warning, setWarning] = useState<string | null>(null)
  const prevRef = useRef<number>(Infinity)

  const onExpire = useCallback(() => {
    if (!useStore.getState().submitted) submit()
  }, [submit])

  const remaining = useRemainingSeconds(endsAt, onExpire)

  // Fire 10 / 5 / 1-minute warnings when the countdown crosses each threshold.
  useEffect(() => {
    const prev = prevRef.current
    for (const mins of [10, 5, 1]) {
      const t = mins * 60
      if (prev > t && remaining <= t && remaining > 0) {
        setWarning(`You have ${mins} minute${mins > 1 ? 's' : ''} left.`)
        const id = setTimeout(() => setWarning(null), 6000)
        prevRef.current = remaining
        return () => clearTimeout(id)
      }
    }
    prevRef.current = remaining
  }, [remaining])

  const low = remaining <= 300 // last 5 minutes -> red

  return (
    <header
      className="shrink-0 flex items-center justify-between px-4 h-12 border-b select-none"
      style={{ background: 'var(--ielts-panel)', color: 'var(--ielts-panel-fg)', borderColor: 'var(--ielts-border)' }}
    >
      <div className="flex items-center gap-4 min-w-0">
        <span className="font-bold whitespace-nowrap">IELTS on Computer</span>
        <span className="opacity-70 text-sm whitespace-nowrap hidden sm:inline">
          Candidate: 000001 — {module ? MODULE_LABEL[module] : ''}
        </span>
      </div>

      <div className="flex items-center gap-3">
        {module === 'listening' && (
          <div className="flex items-center gap-1" title="Volume">
            <span aria-hidden>🔊</span>
            <input
              type="range"
              min={0}
              max={1}
              step={0.05}
              value={volume}
              onChange={(e) => setVolume(Number(e.target.value))}
              className="w-24"
            />
          </div>
        )}

        {!submitted && (
          <div className="flex items-center gap-2">
            {showTimer ? (
              <span
                className="font-mono text-lg tabular-nums"
                style={{ color: low ? '#e11d48' : 'inherit' }}
                aria-live="polite"
              >
                ⏱ {formatClock(remaining)}
              </span>
            ) : (
              <span className="text-sm opacity-60">timer hidden</span>
            )}
            <button
              onClick={() => updateSettings({ showTimer: !showTimer })}
              className="text-xs underline opacity-70 hover:opacity-100"
            >
              {showTimer ? 'Hide' : 'Show'}
            </button>
          </div>
        )}

        <div className="relative">
          <button
            onClick={() => setMenuOpen((o) => !o)}
            className="px-2 py-1 border text-sm"
            style={{ borderColor: 'var(--ielts-border)' }}
            aria-haspopup="menu"
            aria-expanded={menuOpen}
          >
            ⚙ Settings
          </button>
          {menuOpen && <SettingsMenu onClose={() => setMenuOpen(false)} />}
        </div>
      </div>

      {warning && (
        <div
          className="fixed left-1/2 -translate-x-1/2 top-16 z-50 px-6 py-3 border shadow-lg text-center font-bold"
          style={{ background: '#fffbe6', color: '#7a5b00', borderColor: '#e8a33d' }}
          role="alert"
        >
          {warning}
        </div>
      )}
    </header>
  )
}
