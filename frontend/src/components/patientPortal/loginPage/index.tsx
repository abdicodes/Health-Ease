import LoginForm from './LoginForm'
import { useAuth } from '../../../context/AuthContext'

const LoginPage = () => {
  const { login } = useAuth()
  interface FormValues {
    username: string
    password: string
  }

  const handleLogin = (values: FormValues) => {
    login(values.username, values.password)
  }

  return <LoginForm onSubmit={handleLogin} />
}

export default LoginPage
