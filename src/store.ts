import { create } from 'zustand'
import type {
  Answers,
  AnswerValue,
  Flags,
  Highlight,
  HighlightColor,
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
  /** After submitting, re-enter the test read-only to review correct answers. */
  reviewMode: boolean
  /** Review only: the passage sentence to flash-highlight when a question's
   *  "In passage" affordance is clicked. Cleared on navigation away. */
  evidence: { passage: number; text: string } | null
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
  setHighlightColor: (id: string, color: HighlightColor) => void
  submit: () => void
  /** Review only: scroll to and highlight the passage text that justifies a
   *  question's answer. No-op if the question has no `evidence`. */
  revealEvidenceFor: (n: number) => void
  clearEvidence: () => void
  /** Switch from the results scoreboard into on-test answer review. */
  reviewOnTest: () => void
  /** Leave on-test review and return to the scoreboard. */
  backToResults: () => void
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
  reviewMode: false,
  evidence: null,
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
      reviewMode: false,
      evidence: null,
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
      reviewMode: false,
      evidence: null,
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
      evidence: null,
    })
  },

  consumeScroll: () => set({ pendingScroll: null }),

  revealEvidenceFor: (n) => {
    const { test, module } = get()
    if (!test || module !== 'reading' || !test.reading) return
    const passages = test.reading.passages
    for (let idx = 0; idx < passages.length; idx++) {
      for (const g of passages[idx].groups) {
        const q = g.questions.find((qq) => qq.number === n)
        if (!q) continue
        if (!q.evidence) return
        set({
          activeSection: idx,
          currentQuestion: n,
          evidence: { passage: passages[idx].number, text: q.evidence },
        })
        return
      }
    }
  },

  clearEvidence: () => set({ evidence: null }),

  setActiveSection: (i) => set({ activeSection: i }),

  setWriting: (task, text) =>
    set((s) => ({ writing: { ...s.writing, [task]: text } })),

  // Adding a highlight that overlaps existing ones in the same passage merges
  // them into a single highlight (union range, new colour) instead of stacking
  // overlapping spans — stacked spans break the DOM re-wrap and let you pile
  // the same colour on itself. Re-selecting an existing highlight and picking a
  // colour therefore just recolours it.
  addHighlight: (h) =>
    set((s) => {
      const overlaps = (a: Highlight) =>
        a.passage === h.passage && a.start < h.end && h.start < a.end
      const hit = s.highlights.filter(overlaps)
      if (hit.length === 0) return { highlights: [...s.highlights, h] }
      const start = Math.min(h.start, ...hit.map((x) => x.start))
      const end = Math.max(h.end, ...hit.map((x) => x.end))
      const note = h.note ?? hit.find((x) => x.note)?.note
      const merged: Highlight = { ...h, start, end, note }
      return { highlights: [...s.highlights.filter((x) => !overlaps(x)), merged] }
    }),

  removeHighlight: (id) =>
    set((s) => ({ highlights: s.highlights.filter((h) => h.id !== id) })),

  setHighlightNote: (id, note) =>
    set((s) => ({
      highlights: s.highlights.map((h) => (h.id === id ? { ...h, note } : h)),
    })),

  setHighlightColor: (id, color) =>
    set((s) => ({
      highlights: s.highlights.map((h) => (h.id === id ? { ...h, color } : h)),
    })),

  submit: () => {
    clearSession()
    set({ submitted: true, view: 'results', reviewMode: false, evidence: null })
  },

  reviewOnTest: () => set({ view: 'running', reviewMode: true, evidence: null }),

  backToResults: () => set({ view: 'results', reviewMode: false, evidence: null }),

  exitToHome: () => {
    clearSession()
    set({
      view: 'home',
      test: null,
      module: null,
      submitted: false,
      reviewMode: false,
      evidence: null,
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
