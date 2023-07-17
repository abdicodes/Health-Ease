import Events from './components/Events'
import DetailedEvent from './components/DetailedEvent'
import { Routes, Route } from 'react-router-dom'
import data from './data'

function App() {
  return (
    <>
      <Routes>
        <Route path="*" element={<Events events={data} />} />
        <Route path="/" element={<Events events={data} />} />
        <Route path="/:id" element={<DetailedEvent />} />
      </Routes>

      {/* <PastEvents events={events} /> */}
    </>
  )
}

export default App
