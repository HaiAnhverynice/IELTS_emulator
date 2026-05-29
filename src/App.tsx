import { useStore } from './store'
import Home from './pages/Home'
import TestRunner from './pages/TestRunner'
import Results from './pages/Results'

export default function App() {
  const view = useStore((s) => s.view)

  return (
    <div className="h-full flex flex-col">
      {view === 'home' && <Home />}
      {view === 'running' && <TestRunner />}
      {view === 'results' && <Results />}
    </div>
  )
}
