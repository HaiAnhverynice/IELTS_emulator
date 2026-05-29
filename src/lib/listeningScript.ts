import type { ListeningPart, TranscriptTurn } from '../types'

// ---------------------------------------------------------------------------
// Turns a Listening part into an ordered list of play segments that mimic the
// real exam: a spoken section introduction, time to read the questions, the
// recording itself (with a distinct voice per speaker), and an end-of-section
// announcement followed by a short pause before the next part.
//
// Shared by the audio generator (scripts) and the in-app TTS fallback so both
// behave identically.
// ---------------------------------------------------------------------------

export type SpeakerId = 'narrator' | 'M' | 'W' | 'A' | 'B' | 'C'

export interface PlaySegment {
  kind: 'speech' | 'pause'
  /** speech */ text?: string
  voice?: SpeakerId
  /** pause, in seconds */ seconds?: number
}

/** Per-speaker voice settings: a piper model name (audio generation) and a
 *  pitch multiplier (browser TTS fallback, to keep speakers distinguishable). */
export const VOICE_MAP: Record<SpeakerId, { piper: string; pitch: number }> = {
  narrator: { piper: 'alba', pitch: 1.0 },
  M: { piper: 'alan', pitch: 0.8 }, // service person / man
  W: { piper: 'cori', pitch: 1.15 }, // customer / woman
  A: { piper: 'alan', pitch: 0.85 }, // student A
  B: { piper: 'cori', pitch: 1.2 }, // student B
  C: { piper: 'lessac', pitch: 1.0 }, // third speaker / tutor
}

/** Seconds given to read the questions before each section plays. The real
 *  exam allows ~30s; we use a shorter, practice-friendly pause. */
export const READING_PAUSE_SEC = 12
/** Pause after a section, before the next part starts. */
export const END_PAUSE_SEC = 5

function contentSegments(part: ListeningPart): PlaySegment[] {
  const t = part.transcript
  if (t == null) return []
  if (typeof t === 'string') return [{ kind: 'speech', voice: 'narrator', text: t }]

  const rotation = part.speakers && part.speakers.length ? part.speakers : ['narrator']
  const nameToVoice = new Map<string, string>() // "Tom" -> 'A'
  let ri = 0
  const segs: PlaySegment[] = []
  for (const turn of t) {
    if (typeof turn !== 'string') {
      const ex = turn as TranscriptTurn
      segs.push({ kind: 'speech', voice: ex.speaker as SpeakerId, text: ex.text })
      continue
    }
    // A leading "Name:" prefix names the speaker — use it to pick (and keep
    // consistent) a voice, and strip it so it isn't read aloud.
    const m = turn.match(/^([A-Za-z][\w'’]*)\s*:\s*(.*)$/)
    let voice: string
    let text = turn
    if (m) {
      text = m[2]
      const name = m[1]
      if (!nameToVoice.has(name)) {
        nameToVoice.set(name, rotation[nameToVoice.size % rotation.length])
      }
      voice = nameToVoice.get(name)!
    } else {
      voice = rotation[ri % rotation.length]
      ri++
    }
    segs.push({ kind: 'speech', voice: voice as SpeakerId, text })
  }
  return segs
}

/** The full, exam-style play script for a part. */
export function buildPlayScript(part: ListeningPart): PlaySegment[] {
  const n = part.number
  const intro = part.context ? ` ${part.context}` : ''
  const segs: PlaySegment[] = [
    { kind: 'speech', voice: 'narrator', text: `Section ${n}.${intro}` },
    { kind: 'speech', voice: 'narrator', text: 'First, you have some time to look at the questions.' },
    { kind: 'pause', seconds: READING_PAUSE_SEC },
    { kind: 'speech', voice: 'narrator', text: 'Now listen carefully and answer the questions.' },
    ...contentSegments(part),
    { kind: 'speech', voice: 'narrator', text: `That is the end of Section ${n}.` },
    { kind: 'pause', seconds: END_PAUSE_SEC },
  ]
  return segs
}
