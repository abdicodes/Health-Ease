// import Events from './components/patientPortal/eventsPage/Events'
import DetailedEvent from './components/detailedEventPage/DetailedEvent'
import { Routes, Route } from 'react-router-dom'
// import data from './data'
import LandingPage from './components/LandingPage'
import LoginPage from './components/patientPortal/loginPage'
import PatientPortal from './components/patientPortal'
import SignUpPage from './components/patientPortal/SignupPage'
import StaffPortal from './components/staffPortal'
import DoctorPage from './components/staffPortal/doctorPage'
import MedicalHistory from './components/staffPortal/medicalHistoryPage'

function App() {
  return (
    <>
      <Routes>
        {/* <Route path="*" element={<Events events={data} />} /> */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<SignUpPage />} />
        <Route path="/patient-portal" element={<PatientPortal />} />
        <Route path="/staff-portal" element={<StaffPortal />} />
        <Route path="/staff-portal/doctor" element={<DoctorPage />} />
        <Route path="/staff-portal/patients/:id" element={<MedicalHistory />} />
        <Route path="/:id" element={<DetailedEvent />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/*" element={<LandingPage />} />
      </Routes>
    </>
  )
}

export default App
