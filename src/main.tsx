import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { applySettings, useStore } from './store.ts'

// Apply persisted colour theme / font size before first paint.
applySettings(useStore.getState().settings)

// Validate bundled tests during development so authoring mistakes surface.
if (import.meta.env.DEV) {
  void Promise.all([import('./data'), import('./lib/validateTest')]).then(([{ builtInTests }, { validateAll }]) => {
    const problems = validateAll(builtInTests)
    if (problems.length) console.error('TEST_VALIDATION', JSON.stringify(problems))
    else console.log('TEST_VALIDATION ok', builtInTests.length, 'tests')
  })
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
