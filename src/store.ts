import { create } from 'zustand'
import type {
  Answers,
  AnswerValue,
  Flags,
  Highlight,
  IeltsTest,
  ModuleType,
  Settings,
} from './types'
import { clearSession, saveSession, type SavedSession } from './lib/session'

export type View = 'home' | 'running' | 'results'

const SETTINGS_KEY = 'ielts-sim-settings'

const defaultSettings: Settings = {
  colorTheme: 'default',
  fontSize: 'standard',
  showTimer: true,
}

function loadSettings(): Settings {
  try {
    const raw = localStorage.getItem(SETTINGS_KEY)
    if (raw) return { ...defaultSettings, ...JSON.parse(raw) }
  } catch {
    /* ignore */
  }
  return defaultSettings
}

/** Push the current colour theme + font size onto <html> as data attributes,
 *  which the CSS variables in index.css key off. */
export function applySettings(s: Settings) {
  const el = document.documentElement
  el.dataset.theme = s.colorTheme
  el.dataset.font = s.fontSize
}

interface RunState {
  view: View
  test: IeltsTest | null
  module: ModuleType | null
  /** Index into the active module's parts/passages/tasks. */
  activeSection: number
  currentQuestion: number
  /** Set when the user clicks a nav button; the module view scrolls to it then
   *  clears it. Distinct from currentQuestion (which also tracks input focus,
   *  where we must NOT force-scroll). */
  pendingScroll: number | null
  answers: Answers
  flags: Flags
  writing: Record<number, string>
  highlights: Highlight[]
  endsAt: number | null
  submitted: boolean
  settings: Settings
  /** Listening audio volume, 0..1. */
  volume: number

  loadAndStart: (test: IeltsTest, module: ModuleType) => void
  /** Restore a previously saved in-progress session. */
  resumeSession: (test: IeltsTest, saved: SavedSession) => void
  setAnswer: (n: number, value: AnswerValue) => void
  /** Write the same value to several question numbers (mcq-multi groups). */
  setAnswerMany: (ns: number[], value: AnswerValue) => void
  toggleFlag: (n: number) => void
  goToQuestion: (n: number) => void
  /** Like goToQuestion but also requests a scroll (used by nav clicks). */
  navigateTo: (n: number) => void
  consumeScroll: () => void
  setActiveSection: (i: number) => void
  setWriting: (task: number, text: string) => void
  addHighlight: (h: Highlight) => void
  removeHighlight: (id: string) => void
  setHighlightNote: (id: string, note: string) => void
  submit: () => void
  exitToHome: () => void
  updateSettings: (partial: Partial<Settings>) => void
  setVolume: (v: number) => void
}

/** Maps the active module to a list of "sections" (parts/passages/tasks) and
 *  returns, for a given global question number, which section index holds it. */
function sectionForQuestion(test: IeltsTest, module: ModuleType, q: number): number {
  if (module === 'listening' && test.listening) {
    return Math.max(
      0,
      test.listening.parts.findIndex((p) =>
        p.groups.some((g) => g.questions.some((qq) => qq.number === q)),
      ),
    )
  }
  if (module === 'reading' && test.reading) {
    return Math.max(
      0,
      test.reading.passages.findIndex((p) =>
        p.groups.some((g) => g.questions.some((qq) => qq.number === q)),
      ),
    )
  }
  return 0
}

function moduleDuration(test: IeltsTest, module: ModuleType): number {
  if (module === 'listening') return test.listening?.durationSec ?? 0
  if (module === 'reading') return test.reading?.durationSec ?? 0
  return test.writing?.durationSec ?? 0
}

export const useStore = create<RunState>((set, get) => ({
  view: 'home',
  test: null,
  module: null,
  activeSection: 0,
  currentQuestion: 1,
  pendingScroll: null,
  answers: {},
  flags: {},
  writing: {},
  highlights: [],
  endsAt: null,
  submitted: false,
  settings: loadSettings(),
  volume: 1,

  loadAndStart: (test, module) => {
    const dur = moduleDuration(test, module)
    // First answerable question number, for nav highlight.
    let first = 1
    if (module === 'listening' && test.listening) {
      first = test.listening.parts[0]?.groups[0]?.questions[0]?.number ?? 1
    } else if (module === 'reading' && test.reading) {
      first = test.reading.passages[0]?.groups[0]?.questions[0]?.number ?? 1
    }
    set({
      view: 'running',
      test,
      module,
      activeSection: 0,
      currentQuestion: first,
      answers: {},
      flags: {},
      writing: {},
      highlights: [],
      endsAt: Date.now() + dur * 1000,
      submitted: false,
    })
  },

  resumeSession: (test, saved) => {
    set({
      view: 'running',
      test,
      module: saved.module,
      activeSection: saved.activeSection,
      currentQuestion: saved.currentQuestion,
      pendingScroll: null,
      answers: saved.answers ?? {},
      flags: saved.flags ?? {},
      writing: saved.writing ?? {},
      highlights: saved.highlights ?? [],
      endsAt: saved.endsAt,
      submitted: false,
    })
  },

  setAnswer: (n, value) =>
    set((s) => ({ answers: { ...s.answers, [n]: value } })),

  setAnswerMany: (ns, value) =>
    set((s) => {
      const next = { ...s.answers }
      for (const n of ns) next[n] = value
      return { answers: next }
    }),

  toggleFlag: (n) =>
    set((s) => ({ flags: { ...s.flags, [n]: !s.flags[n] } })),

  goToQuestion: (n) => {
    const { test, module } = get()
    if (!test || !module) return
    set({ currentQuestion: n, activeSection: sectionForQuestion(test, module, n) })
  },

  navigateTo: (n) => {
    const { test, module } = get()
    if (!test || !module) return
    set({
      currentQuestion: n,
      activeSection: sectionForQuestion(test, module, n),
      pendingScroll: n,
    })
  },

  consumeScroll: () => set({ pendingScroll: null }),

  setActiveSection: (i) => set({ activeSection: i }),

  setWriting: (task, text) =>
    set((s) => ({ writing: { ...s.writing, [task]: text } })),

  addHighlight: (h) => set((s) => ({ highlights: [...s.highlights, h] })),

  removeHighlight: (id) =>
    set((s) => ({ highlights: s.highlights.filter((h) => h.id !== id) })),

  setHighlightNote: (id, note) =>
    set((s) => ({
      highlights: s.highlights.map((h) => (h.id === id ? { ...h, note } : h)),
    })),

  submit: () => {
    clearSession()
    set({ submitted: true, view: 'results' })
  },

  exitToHome: () => {
    clearSession()
    set({
      view: 'home',
      test: null,
      module: null,
      submitted: false,
      endsAt: null,
    })
  },

  updateSettings: (partial) =>
    set((s) => {
      const next = { ...s.settings, ...partial }
      try {
        localStorage.setItem(SETTINGS_KEY, JSON.stringify(next))
      } catch {
        /* ignore */
      }
      applySettings(next)
      return { settings: next }
    }),

  setVolume: (v) => set({ volume: Math.min(1, Math.max(0, v)) }),
}))

// Persist the in-progress session on every change while a test is running, so
// an accidental reload can offer to resume it.
useStore.subscribe((state) => {
  if (state.view === 'running' && state.test && state.module && !state.submitted) {
    saveSession({
      testId: state.test.id,
      module: state.module,
      answers: state.answers,
      flags: state.flags,
      writing: state.writing,
      highlights: state.highlights,
      currentQuestion: state.currentQuestion,
      activeSection: state.activeSection,
      endsAt: state.endsAt,
    })
  }
})
