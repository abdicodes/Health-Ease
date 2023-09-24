import React from 'react'
import { Formik, Field, Form, ErrorMessage, useFormikContext } from 'formik'

import { signupSchema } from './signupSchema'

// Define the enum types
enum Gender {
  Female = 'female',
  Male = 'male',
}

enum BloodType {
  APositive = 'A+',
  ANegative = 'A-',
  BPositive = 'B+',
  BNegative = 'B-',
  ABPositive = 'AB+',
  ABNegative = 'AB-',
  OPositive = 'O+',
  ONegative = 'O-',
}

interface SignupFormValues {
  name: string
  username: string
  email: string
  password: string
  passwordConfirm: string
  phoneNumber?: string
  dateOfBirth: string
  address?: string
  gender: Gender
  bloodType: BloodType
}

const genders = Object.values(Gender)
const bloodTypes = Object.values(BloodType)

const SignupFormFields = () => {
  const formik = useFormikContext<SignupFormValues>()

  const isDisabledButton: string =
    !formik.isValid || !formik.dirty
      ? 'bg-gray-400'
      : 'bg-blue-500 hover:bg-blue-600'

  return (
    <div className="">
      <Form>
        <div className="my-2 mx-10 md:mx-40 lg:mx-80 xl: 160">
          <label
            className="block text-neutral-800 text-opacity-60 text-md font-medium pt-2 pb-1 max-w-xl"
            htmlFor="Name"
          >
            Name
          </label>
          <Field
            className="text-gray-700 focus:outline-none focus:shadow-outline border-b-2 border-gray-300 py-2 px-4 block w-full appearance-none"
            id="name"
            name="name"
            placeholder=".... Enter your Name"
          />
          <ErrorMessage
            component="div"
            className="text-red-500 text-sm"
            name="name"
          />
        </div>

        <div className="my-2 mx-10 md:mx-40 lg:mx-80 xl: 160">
          <label
            className="block text-neutral-800 text-opacity-60 text-md font-medium pt-2 pb-1 max-w-xl"
            htmlFor="username"
          >
            Username
          </label>
          <Field
            className="text-gray-700 focus:outline-none focus:shadow-outline border-b-2 border-gray-300 py-2 px-4 block w-full appearance-none"
            id="username"
            name="username"
            placeholder=".... Enter your Username"
          />
          <ErrorMessage
            component="div"
            className="text-red-500 text-sm"
            name="username"
          />
        </div>
        <div className="my-2 mx-10 md:mx-40 lg:mx-80 xl: 160">
          <label
            className="block text-neutral-800 text-opacity-60 text-md font-medium pt-2 pb-1 max-w-xl"
            htmlFor="address"
          >
            Address
          </label>
          <Field
            className="text-gray-700 focus:outline-none focus:shadow-outline border-b-2 border-gray-300 py-2 px-4 block w-full appearance-none"
            id="address"
            name="address"
            placeholder=".... Enter your Address"
          />
          <ErrorMessage
            component="div"
            className="text-red-500 text-sm"
            name="address"
          />
        </div>
        <div className="my-2 mx-10 md:mx-40 lg:mx-80 xl: 160">
          <label
            className="block text-neutral-800 text-opacity-60 text-md font-medium pt-2 pb-1 max-w-xl"
            htmlFor="phone"
          >
            Phone number
          </label>
          <Field
            className="text-gray-700 focus:outline-none focus:shadow-outline border-b-2 border-gray-300 py-2 px-4 block w-full appearance-none"
            id="phoneNumber"
            name="phoneNumber"
            placeholder=".... Enter your Phone number"
          />
          <ErrorMessage
            component="div"
            className="text-red-500 text-sm"
            name="phoneNumber"
          />
        </div>
        <div className="my-2 mx-10 md:mx-40 lg:mx-80 xl: 160">
          <label
            className="block text-neutral-800 text-opacity-60 text-md font-medium pt-2 pb-1 max-w-xl"
            htmlFor="Email"
          >
            Email
          </label>
          <Field
            className="text-gray-700 focus:outline-none focus:shadow-outline border-b-2 border-gray-300 py-2 px-4 block w-full appearance-none"
            id="email"
            name="email"
            placeholder=".... Enter your Email address"
          />
          <ErrorMessage
            component="div"
            className="text-red-500 text-sm"
            name="email"
          />
        </div>
        <div className="my-2 mx-10 md:mx-40 lg:mx-80 xl: 160">
          <label
            className="block text-neutral-800 text-opacity-60 text-md font-medium pt-2 pb-1 max-w-xl"
            htmlFor="dateOfBirth"
          >
            Date of birth
          </label>
          <Field
            className="text-gray-700 focus:outline-none focus:shadow-outline border-b-2 border-gray-300 py-2 px-4 block w-full appearance-none"
            id="dateOfBirth"
            name="dateOfBirth"
            placeholder=".... YYYY-MM-DD"
          />
          <ErrorMessage
            component="div"
            className="text-red-500 text-sm"
            name="dateOfBirth"
          />
        </div>
        <div className="my-2 mx-10 md:mx-40 lg:mx-80 xl: 160">
          <label
            className="block text-neutral-800 text-opacity-60 text-md font-medium pt-2 pb-1 max-w-xl"
            htmlFor="dateOfBirth"
          >
            Password
          </label>
          <Field
            className="text-gray-700 focus:outline-none focus:shadow-outline border-b-2 border-gray-300 py-2 px-4 block w-full appearance-none"
            id="password"
            name="password"
            placeholder="....Enter your password"
            type="password"
          />
          <ErrorMessage
            component="div"
            className="text-red-500 text-sm"
            name="password"
          />
        </div>
        <div className="my-2 mx-10 md:mx-40 lg:mx-80 xl: 160">
          <label
            className="block text-neutral-800 text-opacity-60 text-md font-medium pt-2 pb-1 max-w-xl"
            htmlFor="dateOfBirth"
          >
            Confirm Password
          </label>
          <Field
            className="text-gray-700 focus:outline-none focus:shadow-outline border-b-2 border-gray-300 py-2 px-4 block w-full appearance-none"
            id="passwordConfirm"
            name="passwordConfirm"
            placeholder="....Confirm your password"
            type="password"
          />
          <ErrorMessage
            component="div"
            className="text-red-500 text-sm"
            name="passwordConfirm"
          />
        </div>
        <div className="my-2 mx-10 md:mx-40 lg:mx-80 xl: 160">
          <label
            className="block text-neutral-800 text-opacity-60 text-md font-medium pt-2 pb-1 max-w-xl"
            htmlFor="Gender"
          >
            Gender
          </label>
          <Field
            className="text-gray-700 focus:outline-none focus:shadow-outline border-b-2 border-gray-300 py-2 px-4 block w-full appearance-none"
            as="select"
            id="gender"
            name="gender"
          >
            {genders.map((gender) => (
              <option key={gender} value={gender}>
                {gender}
              </option>
            ))}
          </Field>
          <ErrorMessage
            component="div"
            className="text-red-500 text-sm"
            name="gender"
          />
        </div>
        <div className="my-2 mx-10 md:mx-40 lg:mx-80 xl: 160">
          <label
            className="block text-neutral-800 text-opacity-60 text-md font-medium pt-2 pb-1 max-w-xl"
            htmlFor="BloodType"
          >
            Blood Type
          </label>
          <Field
            className="text-gray-700 focus:outline-none focus:shadow-outline border-b-2 border-gray-300 py-2 px-4 block w-full appearance-none"
            as="select"
            id="bloodType"
            name="bloodType"
          >
            {bloodTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </Field>
          <ErrorMessage
            component="div"
            className="text-red-500 text-sm"
            name="bloodType"
          />
        </div>

        <div className="my-2 mx-10 md:mx-40 lg:mx-80 xl: 160">
          <button
            id="submit"
            type="submit"
            className={`text-white font-bold py-2 px-4 w-full rounded-xl shadow-lg ${isDisabledButton}`}
            disabled={!formik.isValid || !formik.dirty}
          >
            Sign up
          </button>
        </div>
      </Form>
    </div>
  )
}

interface SignupFormProps {
  onSubmit: (values: SignupFormValues) => void
}

const SignupForm: React.FC<SignupFormProps> = ({ onSubmit }) => {
  const handleSubmit = (values: SignupFormValues) => {
    // Handle form submission here
    onSubmit(values)
  }

  return (
    <Formik
      initialValues={{
        name: '',
        username: '',
        email: '',
        password: '',
        passwordConfirm: '',
        phoneNumber: '',
        dateOfBirth: '',
        address: '',
        gender: Gender.Female, // Default gender
        bloodType: BloodType.ONegative, // Default blood type
      }}
      validationSchema={signupSchema}
      onSubmit={handleSubmit}
    >
      <SignupFormFields />
    </Formik>
  )
}

export default SignupForm
