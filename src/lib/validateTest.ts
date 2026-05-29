import type { IeltsTest, ModuleType, QuestionGroup } from '../types'

// ---------------------------------------------------------------------------
// Structural validation for authored tests. Catches the common authoring
// mistakes — missing/extra answer-key entries, duplicate question numbers,
// inline-gap placeholders that don't match the questions, and mcq/matching
// keys that don't exist in the option bank. (It cannot check that a passage
// actually supports a TRUE/FALSE answer — that is on the author.)
// ---------------------------------------------------------------------------

const TFNG = new Set(['TRUE', 'FALSE', 'NOT GIVEN'])
const YNNG = new Set(['YES', 'NO', 'NOT GIVEN'])

function variants(v: string | string[] | undefined): string[] {
  if (v == null) return []
  return Array.isArray(v) ? v : [v]
}

function groupsOf(test: IeltsTest, module: ModuleType): QuestionGroup[] {
  if (module === 'listening') return test.listening?.parts.flatMap((p) => p.groups) ?? []
  if (module === 'reading') return test.reading?.passages.flatMap((p) => p.groups) ?? []
  return []
}

function validateObjModule(test: IeltsTest, module: ModuleType, problems: string[]) {
  const mod = module === 'listening' ? test.listening : test.reading
  if (!mod) return
  const key = mod.answerKey
  const groups = groupsOf(test, module)
  const seen = new Set<number>()
  const tag = `[${test.id}/${module}]`

  for (const g of groups) {
    const nums = g.questions.map((q) => q.number)
    for (const n of nums) {
      if (seen.has(n)) problems.push(`${tag} duplicate question number ${n}`)
      seen.add(n)
      if (g.type !== 'mcq-multi' && !(n in key)) problems.push(`${tag} no answerKey for Q${n}`)
    }

    switch (g.type) {
      case 'inline-gap': {
        const placeholders = new Set([...(g.bodyHtml ?? '').matchAll(/\{\{(\d+)\}\}/g)].map((m) => Number(m[1])))
        for (const n of nums) if (!placeholders.has(n)) problems.push(`${tag} Q${n} has no {{${n}}} in bodyHtml (${g.id})`)
        for (const p of placeholders) if (!nums.includes(p)) problems.push(`${tag} {{${p}}} in ${g.id} has no question`)
        break
      }
      case 'mcq-single':
        for (const q of g.questions) {
          const opts = new Set((q.options ?? []).map((o) => o.value.toUpperCase()))
          if (opts.size === 0) problems.push(`${tag} Q${q.number} has no options`)
          for (const v of variants(key[q.number])) if (!opts.has(v.toUpperCase())) problems.push(`${tag} Q${q.number} key "${v}" not in options`)
        }
        break
      case 'mcq-multi': {
        const opts = new Set((g.options ?? []).map((o) => o.value.toUpperCase()))
        if (opts.size === 0) problems.push(`${tag} ${g.id} has no options`)
        for (const n of nums) {
          if (!(n in key)) problems.push(`${tag} no answerKey for Q${n}`)
          for (const v of variants(key[n])) if (!opts.has(v.toUpperCase())) problems.push(`${tag} Q${n} key "${v}" not in options`)
        }
        break
      }
      case 'tfng':
      case 'ynng': {
        const allowed = g.type === 'tfng' ? TFNG : YNNG
        for (const q of g.questions) for (const v of variants(key[q.number])) if (!allowed.has(v.toUpperCase())) problems.push(`${tag} Q${q.number} key "${v}" not valid ${g.type}`)
        break
      }
      case 'matching':
      case 'matching-headings':
      case 'map-labeling': {
        const opts = new Set((g.options ?? []).map((o) => o.value.toUpperCase()))
        if (opts.size === 0) problems.push(`${tag} ${g.id} has no options`)
        for (const q of g.questions) for (const v of variants(key[q.number])) if (!opts.has(v.toUpperCase())) problems.push(`${tag} Q${q.number} key "${v}" not in options`)
        break
      }
      case 'gap-fill':
      case 'short-answer':
        for (const q of g.questions) if (variants(key[q.number]).length === 0) problems.push(`${tag} Q${q.number} has empty key`)
        break
    }
  }

  // Every answerKey entry should map to a real question.
  for (const k of Object.keys(key).map(Number)) if (!seen.has(k)) problems.push(`${tag} answerKey has Q${k} but no such question`)
}

export function validateTest(test: IeltsTest): string[] {
  const problems: string[] = []
  if (!test.id) problems.push('test has no id')
  if (test.listening) validateObjModule(test, 'listening', problems)
  if (test.reading) validateObjModule(test, 'reading', problems)
  if (test.writing) {
    for (const t of test.writing.tasks) {
      if (!t.promptHtml) problems.push(`[${test.id}/writing] Task ${t.number} has no prompt`)
      if (!t.minWords) problems.push(`[${test.id}/writing] Task ${t.number} has no minWords`)
    }
  }
  return problems
}

export function validateAll(tests: IeltsTest[]): string[] {
  return tests.flatMap(validateTest)
}
