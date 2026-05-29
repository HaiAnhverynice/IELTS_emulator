# IELTS on Computer — Practice Simulator

A faithful re-creation of the **computer-delivered IELTS** test environment, built with
React + TypeScript + Vite. It reproduces the look and behaviour of the real exam UI for the
**Listening**, **Reading** and **Writing** modules.

**Live demo:** https://haianhverynice.github.io/IELTS_emulator/ (deployed automatically from `main`).

> Speaking is a face-to-face / video interview in the real exam and is **not** part of the
> computer-delivered session, so it is not simulated here.

## Features

- **Exam-accurate chrome** — top bar with candidate info, a live countdown that turns red in the
  last 5 minutes and pops 10/5/1-minute warnings, a hide-timer toggle, and a settings menu with the
  three official **colour themes** (black-on-white, white-on-black, yellow-on-black) and three
  **text sizes**.
- **Bottom navigation palette** — part/passage/task tabs and numbered question buttons that show
  *answered*, *current* and *flagged-for-review* states. Left-click navigates; **right-click flags**
  a question for review.
- **Reading** — resizable split screen (passage left, questions right) and a **text highlighter**:
  select text to highlight, with an option to attach a note (click a highlight to clear it).
- **Listening** — audio that **plays once and cannot be paused or rewound**, with auto-advance
  through the four parts and a header volume control. Audio is either a supplied URL or, by default,
  **spoken by your browser from a transcript** (Web Speech API) so the sim works with no audio files.
- **Writing** — prompt (with image/table support) beside a distraction-free editor with
  **Cut/Copy/Paste** buttons, no spell-check (like the exam), and a live **word count**.
- **All IELTS question types** — multiple choice (single & *choose TWO/THREE* with partial credit),
  True/False/Not Given, Yes/No/Not Given, matching, matching headings, map/plan labelling,
  note/form/table/summary completion (inline gaps), sentence completion and short answer.
- **Auto-marking & band estimate** — Listening and Reading are marked against an answer key and
  converted to an indicative band; a per-question review shows your answer vs. the correct one.
- **Resume after reload** — answers, flags and highlights are saved automatically; if you reload
  mid-test the home screen offers to resume (the countdown keeps running, as in the real exam).
  Colour/size settings persist across sessions.
- **Two full original practice tests** (Academic) included, plus the importer for your own.

## Quick start

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # type-check + production build to dist/
npm run preview    # preview the production build
```

Requires Node 18+ (developed on Node 26).

## Content & copyright — please read

**Cambridge IELTS books (Cambridge IELTS 1–19) are copyrighted** and are **not** included, and this
project does not scrape or redistribute them. The bundled *Practice Test 1* is original material
written for this app and released CC0; it is **not affiliated with or endorsed by Cambridge or IELTS**.

To add more tests:

- **Officially free** practice material you can legally use:
  - `ielts.org` (free sample test questions for each module)
  - British Council — `takeielts.britishcouncil.org` (free practice tests)
  - IDP IELTS — `ielts.com.au` / `ielidp` free preparation materials
- Any test content **you legally own** (e.g. your own authored material, or a book you have the
  right to digitise for personal use).

Use **+ Import a test (JSON)** on the home screen to load content, or **Download JSON template** to
get a starting file. Imported tests are stored in your browser's `localStorage`.

## Authoring a test (JSON format)

A test is a single JSON object. Minimal shape:

```jsonc
{
  "id": "unique-id",
  "title": "My Test",
  "category": "academic",            // or "general"
  "listening": { "durationSec": 1920, "answerKey": { "1": "..." }, "parts": [ ... ] },
  "reading":   { "durationSec": 3600, "answerKey": { "1": "..." }, "passages": [ ... ] },
  "writing":   { "durationSec": 3600, "tasks": [ ... ] }
}
```

Key ideas (see `src/types.ts` for the full model and
`src/data/tests/practiceAcademic1.ts` for a complete worked example):

- Questions are grouped into **`groups`**, each with a `type` (`mcq-single`, `mcq-multi`, `tfng`,
  `ynng`, `matching`, `matching-headings`, `map-labeling`, `inline-gap`, `gap-fill`, `short-answer`),
  `instructions`, an optional `wordLimit`, and a list of `questions` with global `number`s 1–40.
- **Inline completion** (notes/forms/tables/summaries): put HTML in `bodyHtml` and mark each blank
  with `{{n}}` — it becomes the input box for question *n*. Arbitrary HTML/tables are supported.
- **Matching / labelling**: provide a shared `options` bank; `map-labeling` also takes an `imageUrl`
  (PNG/SVG placed in `public/`).
- **answerKey** maps each question number to its accepted answer. Use an **array** for multiple
  accepted variants (e.g. `["color", "colour"]`). Marking is case-insensitive, trims spaces and
  ignores a leading article. For *choose TWO/THREE*, give each slot's letter; scoring awards one
  mark per correct letter.
- **Listening audio**: give a part an `audio` URL, **or** a `transcript` string to be read aloud by
  the browser.

To bundle a test instead of importing it, add a file under `src/data/tests/` and register it in
`src/data/index.ts`.

### Adding real Listening audio

Each Listening part supports a real audio file via its `audio` field, with the `transcript`
text-to-speech as a fallback if the file is missing or fails to load:

```jsonc
{ "number": 1, "heading": "Questions 1–10",
  "audio": "audio/my-test/part1.mp3",   // file placed in public/audio/my-test/
  "transcript": "..." }                  // used only if the audio can't play
```

Drop your `.mp3`/`.m4a`/`.ogg` files under `public/audio/...` and point `audio` at the path
(no leading slash — it is resolved against the app's base URL). Only use recordings you have the
right to use. The bundled tests ship with transcripts only, so they work out of the box via TTS.

## Notes & limitations

- The **band score is an approximation** — the official raw-to-band conversion is set per test
  version and is not public.
- **Writing is not auto-scored** (it is examiner-marked in reality); the results screen shows your
  responses and word counts for self-review.
- Text-to-speech voice/quality depends on your browser and OS. For the most realistic Listening,
  supply real `audio` files you have the right to use.
- Reading **highlights are not persisted** across a page reload.

## Project structure

```
src/
  types.ts                     # test data model
  store.ts                     # Zustand runtime state (answers, flags, timer, settings, nav)
  lib/
    scoring.ts                 # raw->band conversion + answer marking
    sections.ts                # nav sections from a module
    hooks.ts                   # countdown + scroll-to-question
    htmlToReact.tsx            # parse inline-gap HTML into React (with {{n}} inputs)
    importTest.ts              # JSON import/export + template
  components/
    shell/                     # TopBar, BottomNav, SettingsMenu
    questions/                 # QuestionGroupView + input primitives (all question types)
    reading/                   # SplitPane, Highlighter
    modules/                   # ListeningTest, ReadingTest, WritingTest, AudioPlayer
  pages/                       # Home, TestRunner, Results
  data/tests/                  # bundled tests (CC0 sample)
public/sample/                 # sample assets (the map SVG)
```
