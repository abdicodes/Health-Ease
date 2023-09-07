import { useAuth } from '../../context/AuthContext'
import Events from './eventsPage/Events'
import LoginPage from './loginPage'
// import data from '../../data'

const PatientPortal = () => {
  const { response } = useAuth()

  if (!(response?.user && response.loginMode === 'patient')) {
    console.log(response)
    return <LoginPage />
  } else return <Events events={response.events} />
}

export default PatientPortal
