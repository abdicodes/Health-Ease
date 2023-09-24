import DetailedEvent from './components/detailedEventPage/DetailedEvent'
import { Routes, Route } from 'react-router-dom'
import LandingPage from './components/LandingPage'
import LoginPage from './components/patientPortal/loginPage'
import PatientPortal from './components/patientPortal'
import SignUpPage from './components/patientPortal/SignupPage'
import StaffPortal from './components/staffPortal'
import DoctorPage from './components/staffPortal/doctorPage'
import LabStaffPage from './components/staffPortal/labStaffPage'
import ScanStaffPage from './components/staffPortal/scanStaffPage'
import PharmacistPage from './components/staffPortal/pharmacistPage'
import MedicalHistory from './components/staffPortal/medicalHistoryPage'
import LabHistory from './components/staffPortal/labStaffPage/LabHistory'
import ScanHistory from './components/staffPortal/scanStaffPage/ScanHistory'
import PrescriptionHistory from './components/staffPortal/pharmacistPage/PrescriptionHistory'
import AddEntry from './components/staffPortal/doctorPage/entryForm'
import UpdateLab from './components/staffPortal/updateLabpage'
import UpdateScan from './components/staffPortal/updateScanpage'
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
        <Route path="/staff-portal/lab" element={<LabStaffPage />} />
        <Route path="/staff-portal/scan" element={<ScanStaffPage />} />
        <Route path="/staff-portal/pharmacy" element={<PharmacistPage />} />

        <Route path="/staff-portal/patients/:id" element={<MedicalHistory />} />
        <Route path="/staff-portal/patients/lab/:id" element={<LabHistory />} />
        <Route
          path="/staff-portal/patients/prescription/:id"
          element={<PrescriptionHistory />}
        />
        <Route
          path="/staff-portal/patients/scan/:id"
          element={<ScanHistory />}
        />
        <Route path="/staff-portal/new-entry/:id" element={<AddEntry />} />
        <Route path="/staff-portal/update-lab/:id" element={<UpdateLab />} />
        <Route path="/staff-portal/update-scan/:id" element={<UpdateScan />} />
        <Route path="/detailed-event/" element={<DetailedEvent />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/*" element={<LandingPage />} />
      </Routes>
    </>
  )
}

export default App
