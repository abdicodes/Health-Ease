import { Formik, Field, Form, ErrorMessage, useFormikContext } from 'formik'
import { loginSchema } from './loginSchema'

interface LoginFormValues {
  username: string
  password: string
}

interface LoginFormProps {
  onSubmit: (values: LoginFormValues) => void
}

const LoginFormFields: React.FC<LoginFormProps> = () => {
  const formik = useFormikContext<LoginFormValues>()

  const isDisabledButton: string =
    !formik.isValid || !formik.dirty
      ? ' bg-gray-400'
      : ' bg-blue-500 hover:bg-blue-600'

  return (
    <div className="flex justify-center mt-10">
      <Form>
        <div className="my-4">
          <label
            className="block text-neutral-800 text-opacity-60 text-md font-medium pt-2 pb-1 max-w-xl"
            htmlFor="Username"
          >
            Username
          </label>
          <Field
            className="text-gray-700 focus:outline-none focus:shadow-outline border-b-2 border-gray-300 py-2 px-4 block w-full appearance-none"
            id="username"
            name="username"
            placeholder=".... Enter your username"
          />
          <ErrorMessage
            component="a"
            className="text-red-500 text-sm"
            name="username"
          />
        </div>
        <div className="my-4">
          <label
            className="block text-neutral-800 text-opacity-60 text-md font-medium pt-2 pb-1 max-w-xl"
            htmlFor="Password"
          >
            Password
          </label>
          <Field
            className="text-gray-700 focus:outline-none focus:shadow-outline border-b-2 border-gray-300 py-2 px-4 block w-full appearance-none"
            id="password"
            name="password"
            type="password"
            placeholder="... your password"
          />
          <ErrorMessage
            component="a"
            className="text-red-500 text-sm"
            name="password"
          />
        </div>

        <div className="mt-8">
          <button
            id="login"
            type="submit"
            className={` text-white font-bold py-2 px-4 w-full rounded-xl shadow-lg  ${isDisabledButton}`}
            disabled={!formik.isValid || !formik.dirty} // Disable if not valid or not dirty
          >
            Login
          </button>
        </div>
      </Form>
    </div>
  )
}

const LoginForm: React.FC<LoginFormProps> = ({ onSubmit }) => {
  const handleSubmit = (values: LoginFormValues) => {
    // Handle form submission here
    onSubmit(values)
  }

  return (
    <Formik
      initialValues={{
        username: '',
        password: '',
      }}
      validationSchema={loginSchema}
      onSubmit={handleSubmit}
    >
      <LoginFormFields onSubmit={handleSubmit} />
    </Formik>
  )
}

export default LoginForm
