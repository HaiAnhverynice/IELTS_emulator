import type { Answers, Flags, Highlight, ModuleType } from '../types'

// In-progress session, persisted so an accidental reload doesn't lose work.
const KEY = 'ielts-session'

export interface SavedSession {
  testId: string
  module: ModuleType
  answers: Answers
  flags: Flags
  writing: Record<number, string>
  highlights: Highlight[]
  currentQuestion: number
  activeSection: number
  endsAt: number | null
}

export function saveSession(s: SavedSession) {
  try {
    localStorage.setItem(KEY, JSON.stringify(s))
  } catch {
    /* ignore quota / private mode */
  }
}

export function loadSession(): SavedSession | null {
  try {
    const raw = localStorage.getItem(KEY)
    if (raw) return JSON.parse(raw) as SavedSession
  } catch {
    /* ignore */
  }
  return null
}

export function clearSession() {
  try {
    localStorage.removeItem(KEY)
  } catch {
    /* ignore */
  }
}
