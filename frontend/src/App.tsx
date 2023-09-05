// import Events from './components/patientPortal/eventsPage/Events'
import DetailedEvent from './components/patientPortal/detailedEventPage/DetailedEvent'
import { Routes, Route } from 'react-router-dom'
// import data from './data'
import LandingPage from './components/LandingPage'
import LoginPage from './components/patientPortal/loginPage'
import PatientPortal from './components/patientPortal'

function App() {
  return (
    <>
      <Routes>
        {/* <Route path="*" element={<Events events={data} />} /> */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/patient-portal" element={<PatientPortal />} />
        <Route path="/:id" element={<DetailedEvent />} />
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </>
  )
}

export default App
