import { useAuth } from '../../context/AuthContext'
import LoginPage from './loginPage'
import StaffLanding from './StaffLanding'

const StaffPortal = () => {
  const { staffResponse } = useAuth()

  if (!(staffResponse?.user && staffResponse.loginMode === 'staff')) {
    return <LoginPage />
  } else {
    return (
      <StaffLanding
        roles={[0, 1, 2, 3, 4, 5, 6]}
        name={staffResponse.user.name}
      />
    )
  }
}

export default StaffPortal
