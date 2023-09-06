import SignupForm from './SignupForm'
import { useAuth } from '../../../context/AuthContext'
import heart from '/heart.png'
import { useNavigate } from 'react-router-dom'
const SignUpPage = () => {
  const navigate = useNavigate()
  const { signUp } = useAuth()
  interface FormValues {
    name: string
    username: string
    password: string
    email: string
    phoneNumber?: string
    dateOfBirth: string
    address?: string
    gender: string
    bloodType?: string
  }

  const handleSignup = (values: FormValues) => {
    signUp({ ...values })
  }

  return (
    <div className=" flex flex-col mt-6">
      <div className=" flex items-center flex-col  justify-center text-2xl text-blue-800">
        <img src={heart} className="h-12 mb-2" alt="healthEase Logo" />
        Registration
      </div>
      <div>
        <SignupForm onSubmit={handleSignup} />
      </div>
      <div className="mx-auto my-8 text-blue-800">
        <h2>Have an account already!</h2>
        <button
          className="underline hover:text-red-800 cursor-pointer"
          onClick={() => navigate('/login')}
        >
          Login
        </button>
      </div>
    </div>
  )
}

export default SignUpPage
