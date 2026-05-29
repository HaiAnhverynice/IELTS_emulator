import type { IeltsTest, ModuleType, QuestionGroup } from '../types'

export interface NavSection {
  label: string
  /** Question numbers in this section (empty for Writing tasks). */
  questions: number[]
}

function groupQuestionNumbers(groups: QuestionGroup[]): number[] {
  return groups.flatMap((g) => g.questions.map((q) => q.number)).sort((a, b) => a - b)
}

/** The list of parts / passages / tasks for the active module, with their
 *  question numbers — drives the bottom navigation palette. */
export function getSections(test: IeltsTest, module: ModuleType): NavSection[] {
  if (module === 'listening' && test.listening) {
    return test.listening.parts.map((p) => ({
      label: `Part ${p.number}`,
      questions: groupQuestionNumbers(p.groups),
    }))
  }
  if (module === 'reading' && test.reading) {
    return test.reading.passages.map((p) => ({
      label: `Passage ${p.number}`,
      questions: groupQuestionNumbers(p.groups),
    }))
  }
  if (module === 'writing' && test.writing) {
    return test.writing.tasks.map((t) => ({ label: `Task ${t.number}`, questions: [] }))
  }
  return []
}

/** Flat, ordered list of every question number in the active module. */
export function allQuestionNumbers(sections: NavSection[]): number[] {
  return sections.flatMap((s) => s.questions)
}
