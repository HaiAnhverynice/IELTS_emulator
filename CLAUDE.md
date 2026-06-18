# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # dev server at http://localhost:5173
npm run build      # tsc -b + vite build → dist/
npm run typecheck  # type-check only, no emit
npm run preview    # serve the production build
```

No test framework is configured. Type-check with `npm run typecheck` to validate changes.

## Architecture

Single-page React 19 + Zustand app. No router — view is a string field (`'home' | 'running' | 'results'`) in the store, rendered by `App.tsx`.

### State (`src/store.ts`)

One Zustand store (`useStore`) holds all runtime state: the active test, module, answers, flags, writing text, highlights, countdown `endsAt`, and display settings. The store auto-persists the in-progress session to `localStorage` via a subscriber so reloads can offer a resume. Settings (theme, font, timer visibility) persist separately under `ielts-sim-settings`.

### Data model (`src/types.ts`)

An `IeltsTest` contains optional `listening`, `reading`, and `writing` modules. Questions are collected into `QuestionGroup[]` under parts/passages/tasks. Each group has a `type` (10 question types — see `QuestionType`), shared `options` for matching/map-labeling, and either a `questions[]` list or inline `bodyHtml` with `{{n}}` placeholders for gap-fill rendering.

Global question numbers (1–40) are flat across the module; navigation sections map to parts/passages/tasks.

### Pages

- `Home.tsx` — test selector, JSON import/export, resume banner
- `TestRunner.tsx` — shell (TopBar + BottomNav) wrapping the active module component
- `Results.tsx` — band score display and per-question review; can jump back into the test in read-only `reviewMode`

### Module components (`src/components/modules/`)

- `ListeningTest.tsx` + `AudioPlayer.tsx` — plays audio once (no pause/rewind); falls back to Web Speech API TTS via `buildPlayScript()` in `src/lib/listeningScript.ts`, which sequences narrator intros, reading pauses, and per-speaker turns
- `ReadingTest.tsx` — split-pane (resizable) with `Highlighter.tsx`; highlights are character-offset-based so they survive re-renders; overlapping highlights merge in the store
- `WritingTest.tsx` — distraction-free editor with Cut/Copy/Paste buttons, word count via `scoring.countWords()`

### Question rendering (`src/components/questions/`)

- `QuestionGroupView.tsx` dispatches on group type to the right input component
- `inputs.tsx` has all input primitives (radio, checkbox, dropdown, text)
- `htmlToReact.tsx` parses `bodyHtml` into React, replacing `{{n}}` with the appropriate input node — must run inside `useMemo` for key stability

### Scoring (`src/lib/scoring.ts`)

`markTest()` is group-aware: `mcq-multi` uses partial credit (1 mark per correctly chosen letter, capped to group size). All other types use `isCorrect()` which normalizes case, whitespace, and leading articles. Band tables are approximate published conversions.

### Audio generation

Bundled tests auto-get audio paths `audio/<id>-part<n>.mp3` (set in `src/data/index.ts`). `listeningScript.ts` is shared between the in-app TTS fallback and offline audio generation scripts. `VOICE_MAP` maps speaker IDs to Piper model names + browser TTS pitch multipliers.

## Adding a test

1. Create `src/data/tests/myTest.ts` exporting an `IeltsTest` object
2. Register it in `src/data/index.ts` `builtInTests` array
3. See `practiceAcademic1.ts` for a complete example; `src/types.ts` for the full schema

## Theming

Color themes and font sizes are CSS custom properties keyed off `data-theme` and `data-font` attributes on `<html>` (set by `applySettings()` in the store). Tailwind v4 is configured via the Vite plugin.
