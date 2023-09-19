import * as Yup from 'yup'
export const basicSchema = Yup.object().shape({
  diagnosis: Yup.string().required('Diagnosis field is required'),
  details: Yup.string().required('Summary field is required'),
  comments: Yup.string(),
})
