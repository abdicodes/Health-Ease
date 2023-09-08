import { useAuth } from '../../context/AuthContext'

import LoginPage from './loginPage'
// import data from '../../data'

const StaffPortal = () => {
  const { staffResponse } = useAuth()

  if (!(staffResponse?.user && staffResponse.loginMode === 'staff')) {
    console.log(staffResponse)
    return <LoginPage />
  } else return <div>Staff dashboard - welcome {staffResponse.user.name}</div>
}

export default StaffPortal
