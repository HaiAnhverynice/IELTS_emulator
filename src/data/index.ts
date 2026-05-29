import type { IeltsTest } from '../types'
import { practiceAcademic1 } from './tests/practiceAcademic1'
import { practiceAcademic2 } from './tests/practiceAcademic2'
import { practiceAcademic3 } from './tests/practiceAcademic3'
import { practiceAcademic4 } from './tests/practiceAcademic4'
import { practiceAcademic5 } from './tests/practiceAcademic5'

/** Tests bundled with the app. Add more files here as you author them. */
export const builtInTests: IeltsTest[] = [
  practiceAcademic1,
  practiceAcademic2,
  practiceAcademic3,
  practiceAcademic4,
  practiceAcademic5,
]
