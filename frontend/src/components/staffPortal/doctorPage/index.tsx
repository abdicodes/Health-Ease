import { useAuth } from '../../../context/AuthContext'
import NavBar from '../NavBar'
import LoginPage from '../loginPage'
import DoctorDashboard from './DoctorDashboard'

const DoctorPage = () => {
  const { staffResponse } = useAuth()

  if (!(staffResponse?.user && staffResponse.loginMode === 'staff')) {
    return <LoginPage />
  } else {
    return (
      <main>
        <NavBar />
        <DoctorDashboard />
      </main>
    )
  }
}

export default DoctorPage
