import * as Yup from 'yup'
export const signupSchema = Yup.object().shape({
  username: Yup.string().required('username field is required'),
  password: Yup.string()
    .required('Password field is required')
    .min(8, 'Password is too Short!')
    .matches(/[a-z]/, 'Password requires a lowercase letter')
    .matches(/[A-Z]/, 'Password requires an uppercase letter')
    .matches(/[0-9]/, 'Password requires a number'),
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  passwordConfirm: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords must match')
    .required('Password confirmation is required'),
  phoneNumber: Yup.string(),
  dateOfBirth: Yup.string().required('Date of birth is required'),
  address: Yup.string(),
  gender: Yup.string().required('Gender is required'),
  bloodType: Yup.string().required('Blood type is required'),
})
