import { useEffect, useRef, useState } from 'react'
import { useStore } from '../../store'
import { asset } from '../../lib/asset'
import type { ListeningPart } from '../../types'

type Mode = 'audio' | 'tts' | 'none'

/**
 * Listening audio that mimics the exam: it plays once automatically and cannot
 * be paused or rewound. Parent must mount this with key={partIndex} so each
 * part starts fresh.
 *
 * Source priority: a real `audio` file if the part has one; if that is absent
 * or fails to load, it falls back to reading `transcript` aloud with the Web
 * Speech API so the simulator always has audio.
 */
export default function AudioPlayer({ part, onEnded }: { part: ListeningPart; onEnded: () => void }) {
  const volume = useStore((s) => s.volume)
  const audioRef = useRef<HTMLAudioElement>(null)
  const onEndedRef = useRef(onEnded)
  onEndedRef.current = onEnded

  const hasTTS = !!part.transcript && 'speechSynthesis' in window
  const initialMode: Mode = part.audio ? 'audio' : hasTTS ? 'tts' : 'none'

  const [mode, setMode] = useState<Mode>(initialMode)
  const [progress, setProgress] = useState(0)
  const [playing, setPlaying] = useState(false)
  const [needsGesture, setNeedsGesture] = useState(false)

  const finish = () => {
    setProgress(1)
    setPlaying(false)
    onEndedRef.current()
  }

  const startTTS = () => {
    if (!part.transcript) return
    const synth = window.speechSynthesis
    synth.cancel()
    const u = new SpeechSynthesisUtterance(part.transcript)
    u.volume = volume
    u.rate = 1
    u.lang = 'en-GB'
    const total = Math.max(1, part.transcript.length)
    u.onboundary = (e) => setProgress(Math.min(0.99, e.charIndex / total))
    u.onend = finish
    setMode('tts')
    setNeedsGesture(false)
    setPlaying(true)
    synth.speak(u)
  }

  const startAudio = () => {
    const a = audioRef.current
    if (!a) return
    a.volume = volume
    a.play()
      .then(() => {
        setNeedsGesture(false)
        setPlaying(true)
      })
      .catch(() => setNeedsGesture(true)) // autoplay blocked — show a Play button
  }

  /** Real audio file missing or unreadable → use speech synthesis if we can. */
  const fallback = () => {
    if (hasTTS) startTTS()
    else setMode('none')
  }

  // Start playback on mount (fresh per part via key).
  useEffect(() => {
    setProgress(0)
    if (initialMode === 'audio') {
      startAudio()
    } else if (initialMode === 'tts') {
      startTTS()
      const t = setTimeout(() => {
        const synth = window.speechSynthesis
        if (!synth.speaking && !synth.pending) setNeedsGesture(true)
      }, 500)
      return () => {
        clearTimeout(t)
        window.speechSynthesis.cancel()
      }
    } else {
      setMode('none')
    }
    return () => {
      if ('speechSynthesis' in window) window.speechSynthesis.cancel()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (audioRef.current) audioRef.current.volume = volume
  }, [volume])

  const pct = Math.round(progress * 100)
  const unavailable = mode === 'none'

  return (
    <div className="border p-3 mb-4" style={{ borderColor: 'var(--ielts-border)', background: 'var(--ielts-panel)' }}>
      <div className="flex items-center gap-3">
        <span className="text-xl" aria-hidden>
          {playing ? '🔊' : unavailable ? '🔇' : '⏸'}
        </span>
        <div className="flex-1">
          <div className="font-bold text-sm">
            Part {part.number} audio{mode === 'tts' && part.audio ? ' (read aloud)' : ''}
          </div>
          <div className="text-xs opacity-70">
            {unavailable ? 'No audio for this part.' : 'The recording plays once. You cannot pause or replay it.'}
          </div>
          <div className="mt-2 h-2 w-full overflow-hidden" style={{ background: 'var(--ielts-border)' }}>
            <div
              className={`h-full ${playing && pct === 0 ? 'animate-pulse' : ''}`}
              style={{ width: `${Math.max(pct, playing ? 4 : 0)}%`, background: 'var(--ielts-accent)', transition: 'width .3s' }}
            />
          </div>
        </div>
      </div>

      {needsGesture && (
        <button
          onClick={mode === 'audio' ? startAudio : startTTS}
          className="mt-3 px-4 py-1.5 font-bold border"
          style={{ borderColor: 'var(--ielts-border)', background: 'var(--ielts-accent)', color: 'var(--ielts-accent-fg)' }}
        >
          ▶ Play audio
        </button>
      )}

      {part.audio && mode === 'audio' && (
        <audio
          ref={audioRef}
          src={asset(part.audio)}
          onTimeUpdate={(e) => {
            const a = e.currentTarget
            if (a.duration) setProgress(a.currentTime / a.duration)
          }}
          onEnded={finish}
          onError={fallback}
          preload="auto"
        />
      )}
    </div>
  )
}
