import { useAuth } from '../../context/AuthContext'
import Events from './eventsPage/Events'
import LoginPage from './loginPage'
import data from '../../data'

const PatientPortal = () => {
  const { response } = useAuth()

  if (!response?.user) {
    return <LoginPage />
  } else return <Events events={data} />
}

export default PatientPortal
