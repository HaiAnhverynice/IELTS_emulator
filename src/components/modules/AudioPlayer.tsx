import { useEffect, useRef, useState } from 'react'
import { useStore } from '../../store'
import { asset } from '../../lib/asset'
import type { ListeningPart } from '../../types'

type Mode = 'audio' | 'tts' | 'none'

/** Prefer a British English voice, then any English, else the default. */
function pickVoice(voices: SpeechSynthesisVoice[]): SpeechSynthesisVoice | null {
  return (
    voices.find((v) => v.lang === 'en-GB') ??
    voices.find((v) => v.lang?.startsWith('en')) ??
    null
  )
}

/**
 * Resolve the available voices. On a freshly-loaded origin Chrome returns an
 * empty list until the async `voiceschanged` event fires; calling speak()
 * before then silently drops the utterance. Wait for it (with a timeout so we
 * never hang) so the first part is audible on a cold page load.
 */
function loadVoices(): Promise<SpeechSynthesisVoice[]> {
  const synth = window.speechSynthesis
  const ready = synth.getVoices()
  if (ready.length) return Promise.resolve(ready)
  return new Promise((resolve) => {
    let done = false
    const finish = () => {
      if (done) return
      done = true
      resolve(synth.getVoices())
    }
    synth.addEventListener?.('voiceschanged', finish, { once: true })
    setTimeout(finish, 1500)
  })
}

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
  const ttsActive = useRef(false) // guards the sentence queue against stale resumes
  const startedRef = useRef(false) // true once an utterance actually begins speaking

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

    // Chrome silently truncates a single long utterance (~15s). Speak the
    // transcript one sentence at a time, queued, with a short gap between
    // sentences so the pace is natural and easy to follow.
    const text = part.transcript
    const chunks = text.match(/[^.!?]+[.!?]*\s*/g) ?? [text]
    const total = Math.max(1, text.length)
    let i = 0
    let spoken = 0
    ttsActive.current = true
    startedRef.current = false

    setMode('tts')
    setNeedsGesture(false)
    setPlaying(true)

    // Wait for voices before speaking (empty on a cold origin), then queue
    // sentences one at a time so Chrome doesn't truncate a long utterance.
    loadVoices().then((voices) => {
      if (!ttsActive.current) return
      const voice = pickVoice(voices)

      const speakNext = () => {
        if (!ttsActive.current) return
        if (i >= chunks.length) {
          finish()
          return
        }
        const chunk = chunks[i]
        const u = new SpeechSynthesisUtterance(chunk)
        u.volume = volume
        u.rate = 0.95 // a touch under natural so it stays followable
        u.lang = 'en-GB'
        if (voice) u.voice = voice
        u.onstart = () => {
          startedRef.current = true
          setNeedsGesture(false)
        }
        u.onend = () => {
          spoken += chunk.length
          setProgress(Math.min(0.99, spoken / total))
          i++
          setTimeout(speakNext, 350) // brief pause between sentences
        }
        u.onerror = () => {
          i++
          setTimeout(speakNext, 0)
        }
        synth.speak(u)
      }

      speakNext()
    })
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
      // If nothing actually started speaking (autoplay blocked, or voices
      // never loaded), surface a Play button instead of leaving it silent.
      const t = setTimeout(() => {
        if (!startedRef.current) setNeedsGesture(true)
      }, 2500)
      return () => {
        clearTimeout(t)
        ttsActive.current = false
        window.speechSynthesis.cancel()
      }
    } else {
      setMode('none')
    }
    return () => {
      ttsActive.current = false
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
