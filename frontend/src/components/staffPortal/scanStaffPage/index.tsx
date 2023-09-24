import { useAuth } from '../../../context/AuthContext'
import NavBar from '../NavBar'
import LoginPage from '../loginPage'
import ScanDashboard from './ScanDashboard'

const ScanStaffPage = () => {
  const { staffResponse } = useAuth()

  if (!(staffResponse?.user && staffResponse.loginMode === 'staff')) {
    return <LoginPage />
  } else {
    return (
      <main>
        <NavBar />
        <ScanDashboard />
      </main>
    )
  }
}

export default ScanStaffPage
