import { useAuth } from '../../context/AuthContext'
import Events from './eventsPage/Events'
import LoginPage from './loginPage'
// import data from '../../data'

const PatientPortal = () => {
  const { patientResponse } = useAuth()

  if (!(patientResponse?.user && patientResponse.loginMode === 'patient')) {
    console.log(patientResponse)
    return <LoginPage />
  } else return <Events events={patientResponse.events} />
}

export default PatientPortal
