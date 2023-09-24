import { useAuth } from '../../../context/AuthContext'
import NavBar from '../NavBar'
import LoginPage from '../loginPage'
import PharmacyDashboard from './PharmacyDashboard'

const PharmacistPage = () => {
  const { staffResponse } = useAuth()

  if (!(staffResponse?.user && staffResponse.loginMode === 'staff')) {
    return <LoginPage />
  } else {
    return (
      <main>
        <NavBar />
        <PharmacyDashboard />
      </main>
    )
  }
}

export default PharmacistPage
