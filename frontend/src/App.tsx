import Events from './components/Events'
import DetailedEvent from './components/DetailedEvent'
import { Routes, Route } from 'react-router-dom'
import data from './data'
import LandingPage from './components/LandingPage'

function App() {
  return (
    <>
      <Routes>
        <Route path="*" element={<Events events={data} />} />
        <Route path="/patient-portal" element={<Events events={data} />} />
        <Route path="/:id" element={<DetailedEvent />} />
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </>
  )
}

export default App
