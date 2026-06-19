import type { IeltsTest } from '../types'
import { practiceAcademic1 } from './tests/practiceAcademic1'
import { practiceAcademic2 } from './tests/practiceAcademic2'
import { practiceAcademic3 } from './tests/practiceAcademic3'
import { practiceAcademic4 } from './tests/practiceAcademic4'
import { practiceAcademic5 } from './tests/practiceAcademic5'
import { practiceReading6 } from './tests/practiceReading6'
import { practiceReading7 } from './tests/practiceReading7'
import { practiceReading8 } from './tests/practiceReading8'
import { practiceReading9 } from './tests/practiceReading9'
import { practiceReading10 } from './tests/practiceReading10'
import { practiceReading11 } from './tests/practiceReading11'
import { practiceReading12 } from './tests/practiceReading12'
import { practiceReading13 } from './tests/practiceReading13'
import { practiceReading14 } from './tests/practiceReading14'
import { practiceReading15 } from './tests/practiceReading15'

/** Tests bundled with the app. Add more files here as you author them. */
export const builtInTests: IeltsTest[] = [
  practiceAcademic1,
  practiceAcademic2,
  practiceAcademic3,
  practiceAcademic4,
  practiceAcademic5,
  practiceReading6,
  practiceReading7,
  practiceReading8,
  practiceReading9,
  practiceReading10,
  practiceReading11,
  practiceReading12,
  practiceReading13,
  practiceReading14,
  practiceReading15,
]

// The first 10 bundled tests use short, condensed passages. Newer tests
// (11+) use full ~700-word passages. Flag the older ones so the UI can label
// them, without touching each individual data file.
const SIMPLIFIED_IDS = new Set([
  practiceAcademic1, practiceAcademic2, practiceAcademic3, practiceAcademic4, practiceAcademic5,
  practiceReading6, practiceReading7, practiceReading8, practiceReading9, practiceReading10,
].map((t) => t.id))
for (const test of builtInTests) {
  if (SIMPLIFIED_IDS.has(test.id)) test.simplified = true
}

// Pre-generated narration lives in public/audio as `<id>-part<n>.mp3`. Point
// each Listening part at its file so every browser plays real audio (browser
// TTS is only a fallback and is unavailable in e.g. Firefox without a system
// speech engine). If a file is missing, AudioPlayer falls back to TTS.
for (const test of builtInTests) {
  for (const part of test.listening?.parts ?? []) {
    if (!part.audio) part.audio = `audio/${test.id}-part${part.number}.mp3`
  }
}
