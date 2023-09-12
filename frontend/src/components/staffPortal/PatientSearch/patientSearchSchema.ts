import * as Yup from 'yup'
export const searchSchema = Yup.object().shape({
  id: Yup.string().required('ID field is required'),
})
