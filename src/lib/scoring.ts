import type {
  AnswerKey,
  AnswerValue,
  Answers,
  IeltsTest,
  ModuleType,
  QuestionGroup,
  TestCategory,
} from '../types'

// ---------------------------------------------------------------------------
// Raw-score (out of 40) -> IELTS band conversion.
//
// These are widely published *approximations*. The official conversion is set
// per test version and is not public, so treat the band as indicative only.
// ---------------------------------------------------------------------------

type BandRow = { min: number; band: number }

// Listening (same table used by Academic and General Training)
const LISTENING: BandRow[] = [
  { min: 39, band: 9.0 },
  { min: 37, band: 8.5 },
  { min: 35, band: 8.0 },
  { min: 32, band: 7.5 },
  { min: 30, band: 7.0 },
  { min: 26, band: 6.5 },
  { min: 23, band: 6.0 },
  { min: 18, band: 5.5 },
  { min: 16, band: 5.0 },
  { min: 13, band: 4.5 },
  { min: 10, band: 4.0 },
  { min: 8, band: 3.5 },
  { min: 6, band: 3.0 },
  { min: 4, band: 2.5 },
  { min: 0, band: 0 },
]

const READING_ACADEMIC: BandRow[] = [
  { min: 39, band: 9.0 },
  { min: 37, band: 8.5 },
  { min: 35, band: 8.0 },
  { min: 33, band: 7.5 },
  { min: 30, band: 7.0 },
  { min: 27, band: 6.5 },
  { min: 23, band: 6.0 },
  { min: 19, band: 5.5 },
  { min: 15, band: 5.0 },
  { min: 13, band: 4.5 },
  { min: 10, band: 4.0 },
  { min: 8, band: 3.5 },
  { min: 6, band: 3.0 },
  { min: 0, band: 0 },
]

const READING_GENERAL: BandRow[] = [
  { min: 40, band: 9.0 },
  { min: 39, band: 8.5 },
  { min: 37, band: 8.0 },
  { min: 36, band: 7.5 },
  { min: 34, band: 7.0 },
  { min: 32, band: 6.5 },
  { min: 30, band: 6.0 },
  { min: 27, band: 5.5 },
  { min: 23, band: 5.0 },
  { min: 19, band: 4.5 },
  { min: 15, band: 4.0 },
  { min: 12, band: 3.5 },
  { min: 9, band: 3.0 },
  { min: 0, band: 0 },
]

function lookup(table: BandRow[], raw: number): number {
  for (const row of table) if (raw >= row.min) return row.band
  return 0
}

export function listeningBand(raw: number): number {
  return lookup(LISTENING, raw)
}

export function readingBand(raw: number, category: TestCategory): number {
  return lookup(category === 'general' ? READING_GENERAL : READING_ACADEMIC, raw)
}

/** Average of section bands, rounded to the nearest half-band (IELTS rule). */
export function overallBand(bands: number[]): number {
  if (bands.length === 0) return 0
  const avg = bands.reduce((a, b) => a + b, 0) / bands.length
  return Math.round(avg * 2) / 2
}

// ---------------------------------------------------------------------------
// Answer marking
// ---------------------------------------------------------------------------

function normalize(s: string): string {
  return s
    .trim()
    .toLowerCase()
    .replace(/\s+/g, ' ')
    // ignore a leading article — examiners usually accept "the X" / "a X"
    .replace(/^(a|an|the)\s+/, '')
    .replace(/[.,;:!?'"]/g, '')
}

/** True if a single given answer matches any accepted variant. */
function matchesOne(given: string, accepted: string | string[]): boolean {
  const variants = Array.isArray(accepted) ? accepted : [accepted]
  const g = normalize(given)
  return variants.some((v) => normalize(v) === g)
}

export function isCorrect(given: AnswerValue | undefined, accepted: string | string[] | undefined): boolean {
  if (given == null || accepted == null) return false

  // Multi-select answers (mcq-multi): order-independent set match.
  if (Array.isArray(given)) {
    const acc = Array.isArray(accepted) ? accepted : [accepted]
    if (given.length !== acc.length) return false
    const gNorm = given.map(normalize).sort()
    const aNorm = acc.map(normalize).sort()
    return gNorm.every((v, i) => v === aNorm[i])
  }

  return matchesOne(given, accepted)
}

export interface MarkResult {
  total: number
  correct: number
  perQuestion: Record<number, boolean>
}

/** All question groups in a module, in order. */
export function collectGroups(test: IeltsTest, module: ModuleType): QuestionGroup[] {
  if (module === 'listening') return test.listening?.parts.flatMap((p) => p.groups) ?? []
  if (module === 'reading') return test.reading?.passages.flatMap((p) => p.groups) ?? []
  return []
}

function moduleAnswerKey(test: IeltsTest, module: ModuleType): AnswerKey {
  if (module === 'listening') return test.listening?.answerKey ?? {}
  if (module === 'reading') return test.reading?.answerKey ?? {}
  return {}
}

/**
 * Group-aware marking. Most types mark each question number independently
 * against the key. `mcq-multi` ("Choose TWO/THREE letters") is marked with
 * partial credit: 1 mark per correctly chosen letter, capped at the group
 * size — exactly how IELTS scores it.
 */
export function markTest(test: IeltsTest, module: ModuleType, answers: Answers): MarkResult {
  const key = moduleAnswerKey(test, module)
  const groups = collectGroups(test, module)
  const perQuestion: Record<number, boolean> = {}
  let correct = 0
  let total = 0

  for (const g of groups) {
    total += g.questions.length

    if (g.type === 'mcq-multi') {
      const nums = g.questions.map((q) => q.number)
      const correctSet = new Set(
        nums.flatMap((n) => {
          const a = key[n]
          return (Array.isArray(a) ? a : [a]).filter(Boolean).map((x) => normalize(String(x)))
        }),
      )
      const chosen = (answers[nums[0]] as string[] | undefined) ?? []
      const uniqueChosen = Array.from(new Set(chosen.map(normalize)))
      let hits = uniqueChosen.filter((c) => correctSet.has(c)).length
      hits = Math.min(hits, nums.length)
      nums.forEach((n, i) => {
        const ok = i < hits
        perQuestion[n] = ok
        if (ok) correct++
      })
      continue
    }

    for (const q of g.questions) {
      const ok = isCorrect(answers[q.number], key[q.number])
      perQuestion[q.number] = ok
      if (ok) correct++
    }
  }

  return { total, correct, perQuestion }
}

/** Simple per-number marking (kept for direct key checks / tests). */
export function markModule(answers: Answers, key: AnswerKey): MarkResult {
  const perQuestion: Record<number, boolean> = {}
  let correct = 0
  const nums = Object.keys(key).map(Number)
  for (const n of nums) {
    const ok = isCorrect(answers[n], key[n])
    perQuestion[n] = ok
    if (ok) correct++
  }
  return { total: nums.length, correct, perQuestion }
}

/** Naive word counter for the Writing module word-count display. */
export function countWords(text: string): number {
  const t = text.trim()
  if (!t) return 0
  return t.split(/\s+/).length
}
