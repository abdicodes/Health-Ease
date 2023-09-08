import LoginForm from './LoginForm'
import { useAuth } from '../../../context/AuthContext'
import heart from '/heart.png'
import { useNavigate } from 'react-router-dom'

const LoginPage = () => {
  const navigate = useNavigate()
  const { staffLogin } = useAuth()
  interface FormValues {
    username: string
    password: string
  }

  const handleLogin = async (values: FormValues) => {
    try {
      await staffLogin({ ...values })
      navigate('/staff-portal')
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <div className=" flex flex-col mt-10 mb-6">
      <div className=" flex items-center flex-col  justify-center text-3xl text-blue-800">
        <img src={heart} className="h-20 mb-6" alt="healthEase Logo" />
        Staff Login
      </div>
      <div>
        <LoginForm onSubmit={handleLogin} />
      </div>
    </div>
  )
}

export default LoginPage
