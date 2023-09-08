import LoginForm from './LoginForm'
import { useAuth } from '../../../context/AuthContext'
import heart from '/heart.png'
import { useNavigate } from 'react-router-dom'

const LoginPage = () => {
  const navigate = useNavigate()
  const { patientLogin } = useAuth()
  interface FormValues {
    username: string
    password: string
  }

  const handleLogin = async (values: FormValues) => {
    try {
      await patientLogin({ ...values })
      navigate('/patient-portal')
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <div className=" flex flex-col mt-10">
      <div className=" flex items-center flex-col  justify-center text-3xl text-blue-800">
        <img src={heart} className="h-20 mb-6" alt="healthEase Logo" />
        Login
      </div>
      <div>
        <LoginForm onSubmit={handleLogin} />
      </div>
      <div className="mx-auto mt-8 text-blue-800">
        <h2>Don't have an account yet?</h2>
        <button
          className="underline hover:text-red-800 cursor-pointer"
          onClick={() => navigate('/register')}
        >
          Sign up
        </button>
      </div>
    </div>
  )
}

export default LoginPage
