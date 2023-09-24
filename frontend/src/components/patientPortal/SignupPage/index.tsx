import SignupForm from './SignupForm'
import { useAuth } from '../../../context/AuthContext'
import heart from '/heart.png'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
const SignUpPage = () => {
  const navigate = useNavigate()
  const { signUp } = useAuth()
  const [successMessage, setSuccessMessage] = useState<string | null>(null)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

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

  const handleSignup = async (values: FormValues) => {
    try {
      await signUp({ ...values })
      setSuccessMessage(values.name)
      setTimeout(() => {
        setSuccessMessage(null)
        navigate('/login')
      }, 7000)
    } catch (e) {
      setErrorMessage(values.name)
      setTimeout(() => {
        setErrorMessage(null)
      }, 7000)
      console.error(e)
    }
  }
  return (
    <div className=" flex flex-col mt-6">
      <div className=" flex items-center flex-col  justify-center text-2xl text-blue-800">
        <img src={heart} className="h-12 mb-2" alt="healthEase Logo" />
        Registration
      </div>
      {!successMessage && !errorMessage && (
        <div>
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
          </div>{' '}
        </div>
      )}
      {successMessage && (
        <div className="flex flex-col items-center justify-center">
          <div className="text-emerald-900 text-xl font-medium mt-8">
            {successMessage} have successfully been registered!
          </div>
          <div className="text-neutral-600 font-light my-4">
            you will be redirected to login page shortly
          </div>
        </div>
      )}

      {errorMessage && (
        <div className="flex flex-col items-center justify-center">
          <div className="text-red-800 text-xl font-medium mt-8">
            {' '}
            ERROR!: {successMessage} you haven't been registered!
          </div>
          <div className="text-neutral-600 font-light my-4">
            {' '}
            Please contact your system administrator
          </div>
        </div>
      )}
    </div>
  )
}

export default SignUpPage
