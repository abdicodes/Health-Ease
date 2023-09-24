import LoginForm from './LoginForm'
import { useAuth } from '../../../context/AuthContext'
import heart from '/heart.png'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

const LoginPage = () => {
  const navigate = useNavigate()
  const { patientLogin } = useAuth()
  const [successMessage, setSuccessMessage] = useState<boolean>(false)
  const [errorMessage, setErrorMessage] = useState<boolean>(false)

  interface FormValues {
    username: string
    password: string
  }

  const handleLogin = async (values: FormValues) => {
    try {
      await patientLogin({ ...values })

      setSuccessMessage(true)
      setTimeout(() => {
        setSuccessMessage(false)
        navigate('/patient-portal')
      }, 3000)
    } catch (e) {
      setErrorMessage(true)
      setTimeout(() => {
        setErrorMessage(false)
      }, 7000)
      console.error(e)
    }
  }

  return (
    <div className=" flex flex-col mt-10">
      <div className=" flex items-center flex-col  justify-center  text-blue-800">
        <img src={heart} className="h-20 mb-6" alt="healthEase Logo" />
        Login
        {!successMessage && !errorMessage && (
          <div>
            <div>
              <LoginForm onSubmit={handleLogin} />
            </div>
            <div className="mx-auto mt-8 mb-4 text-blue-800">
              <h2>Don't have an account yet?</h2>
              <button
                className="underline hover:text-red-800 cursor-pointer"
                onClick={() => navigate('/register')}
              >
                Sign up
              </button>
            </div>
          </div>
        )}
      </div>

      {successMessage && (
        <div className="flex flex-col items-center justify-center">
          <div className="text-emerald-900 text-xl font-medium mt-8">
            Hello! have successfully been logged in!
          </div>
          <div className="text-neutral-600 font-light my-4">
            you will be redirected to your dashboard shortly!
          </div>
        </div>
      )}

      {errorMessage && (
        <div className="flex flex-col items-center justify-center">
          <div className="text-red-800 text-xl font-medium mt-8">
            {' '}
            ERROR!:you haven't been logged in !
          </div>
          <div className="text-neutral-600 font-light my-4">
            {' '}
            Please try again or contact your system administrator
          </div>
        </div>
      )}
    </div>
  )
}

export default LoginPage
