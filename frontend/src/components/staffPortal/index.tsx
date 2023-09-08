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
        roles={staffResponse.roles}
        name={staffResponse.user.name}
      />
    )
  }
}

export default StaffPortal
