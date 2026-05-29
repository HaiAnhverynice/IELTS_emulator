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

// Pre-generated narration lives in public/audio as `<id>-part<n>.mp3`. Point
// each Listening part at its file so every browser plays real audio (browser
// TTS is only a fallback and is unavailable in e.g. Firefox without a system
// speech engine). If a file is missing, AudioPlayer falls back to TTS.
for (const test of builtInTests) {
  for (const part of test.listening?.parts ?? []) {
    if (!part.audio) part.audio = `audio/${test.id}-part${part.number}.mp3`
  }
}
