import { useAuth } from '../../context/AuthContext'
import Events from '../eventsPage/Events'
import NavBar from './NavBar'
import LoginPage from './loginPage'
// import data from '../../data'

const PatientPortal = () => {
  const { patientResponse } = useAuth()

  if (!(patientResponse?.user && patientResponse.loginMode === 'patient')) {
    console.log(patientResponse)
    return <LoginPage />
  } else
    return (
      <div>
        <NavBar />
        <Events events={patientResponse.events} />
      </div>
    )
}

export default PatientPortal
