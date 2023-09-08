import * as Yup from 'yup'
export const loginSchema = Yup.object().shape({
  username: Yup.string().required('username field is required'),
  password: Yup.string()
    .required('Password field is required')
    .min(8, 'Password is too Short!')
    .matches(/[a-z]/, 'Password requires a lowercase letter')

    .matches(/[A-Z]/, 'Password requires an uppercase letter')
    .matches(/[0-9]/, 'Password requires a number'),
})
