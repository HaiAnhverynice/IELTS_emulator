// ---------------------------------------------------------------------------
// Data model for an IELTS test. A single JSON-serialisable `IeltsTest` carries
// every module (Listening / Reading / Writing). Speaking is a face-to-face /
// video interview in the real exam and is not part of the computer-delivered
// session, so it is intentionally omitted.
// ---------------------------------------------------------------------------

export type ModuleType = 'listening' | 'reading' | 'writing'
export type TestCategory = 'academic' | 'general'

export type ColorTheme = 'default' | 'white-on-black' | 'yellow-on-black'
export type FontSize = 'standard' | 'large' | 'xlarge'

export interface IeltsTest {
  id: string
  title: string
  category: TestCategory
  /** Optional source/attribution note shown on the home screen. */
  source?: string
  listening?: ListeningModule
  reading?: ReadingModule
  writing?: WritingModule
}

// --- Listening -------------------------------------------------------------

export interface ListeningModule {
  /** Seconds. Real CBT ≈ 30 min audio + 2 min check. */
  durationSec: number
  parts: ListeningPart[]
  /** qNumber -> accepted answer(s). Used for auto-marking. */
  answerKey: AnswerKey
}

export interface ListeningPart {
  number: 1 | 2 | 3 | 4
  /** Audio clip URL for this part (plays once, cannot be paused — like the
   *  exam). Optional: if absent, `transcript` is read aloud via the browser's
   *  speech synthesis so the sim works without copyrighted audio files. */
  audio?: string
  /** Spoken script, used for text-to-speech playback when `audio` is absent. */
  transcript?: string
  /** e.g. "Questions 1–10". */
  heading: string
  /** Short scenario blurb shown above the questions. */
  context?: string
  groups: QuestionGroup[]
}

// --- Reading ---------------------------------------------------------------

export interface ReadingModule {
  durationSec: number // 3600
  passages: ReadingPassage[]
  answerKey: AnswerKey
}

export interface ReadingPassage {
  number: 1 | 2 | 3
  heading: string // "Reading Passage 1"
  title: string
  /** Passage body as HTML. Paragraphs may be wrapped to show A, B, C labels. */
  html: string
  groups: QuestionGroup[]
}

// --- Writing ---------------------------------------------------------------

export interface WritingModule {
  durationSec: number // 3600
  tasks: WritingTask[]
}

export interface WritingTask {
  number: 1 | 2
  minWords: number
  promptHtml: string
  /** Task 1 Academic chart/diagram image. */
  imageUrl?: string
}

// --- Questions -------------------------------------------------------------

export type QuestionType =
  | 'mcq-single' // radio, one answer
  | 'mcq-multi' // checkboxes, choose N
  | 'gap-fill' // standalone short-answer completion lines
  | 'inline-gap' // gaps embedded in bodyHtml (notes / summary / form / table / flow-chart)
  | 'tfng' // True / False / Not Given
  | 'ynng' // Yes / No / Not Given
  | 'matching' // match prompts to a shared bank (features, endings, paragraphs)
  | 'matching-headings' // match headings to paragraphs
  | 'map-labeling' // label a map / plan / diagram from a bank
  | 'short-answer' // answer a question in N words

export interface Option {
  value: string // 'A', 'TRUE', etc.
  label: string
}

export interface QuestionGroup {
  id: string
  type: QuestionType
  /** Instruction line(s), e.g. "Choose TWO letters, A–E." */
  instructions: string
  /** Word/number limit note, e.g. "NO MORE THAN TWO WORDS AND/OR A NUMBER". */
  wordLimit?: string
  /** Shared option bank (matching / map-labeling / matching-headings). */
  options?: Option[]
  /** Map / plan / diagram image for map-labeling. */
  imageUrl?: string
  /**
   * For inline-gap groups: body HTML containing {{n}} placeholders that are
   * replaced with input boxes for question number n.
   */
  bodyHtml?: string
  questions: Question[]
}

export interface Question {
  number: number // global 1..40
  /** Stem text. Omitted for inline-gap (the gap sits in bodyHtml). */
  text?: string
  /** Per-question options (mcq). */
  options?: Option[]
  /** For mcq-multi: how many to choose. */
  maxSelect?: number
}

/** Accepted answer(s) per question number. Marking is case-insensitive and
 *  trims whitespace; an array means any listed variant is accepted. */
export type AnswerKey = Record<number, string | string[]>

// --- Runtime state ---------------------------------------------------------

export type AnswerValue = string | string[]
export type Answers = Record<number, AnswerValue>
export type Flags = Record<number, boolean>

export interface Highlight {
  id: string
  passage: number
  /** Character offsets within the passage's text content, so the highlight can
   *  be re-applied after a reload. */
  start: number
  end: number
  note?: string
}

export interface Settings {
  colorTheme: ColorTheme
  fontSize: FontSize
  showTimer: boolean
}
