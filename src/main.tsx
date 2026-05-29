import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { applySettings, useStore } from './store.ts'

// Apply persisted colour theme / font size before first paint.
applySettings(useStore.getState().settings)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
