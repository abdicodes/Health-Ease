import { useAuth } from '../../../context/AuthContext'
import NavBar from '../NavBar'
import LoginPage from '../loginPage'
import LabDashboard from './LabDashboard'

const LabStaffPage = () => {
  const { staffResponse } = useAuth()

  if (!(staffResponse?.user && staffResponse.loginMode === 'staff')) {
    return <LoginPage />
  } else {
    return (
      <main>
        <NavBar />
        <LabDashboard />
      </main>
    )
  }
}

export default LabStaffPage
