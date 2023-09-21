import * as yup from 'yup'
export const basicSchema = yup.object().shape({
  diagnosis: yup.string().required('Diagnosis field is required'),
  details: yup.string().required('Summary field is required'),
  comments: yup.string(),
})

export const labSchema = yup.object().shape({
  tests: yup
    .array()
    .of(
      yup
        .object()
        .shape({ name: yup.string().required('Test name is required') })
    ),
})

export const scanSchema = yup.object().shape({
  images: yup
    .array()
    .of(
      yup
        .object()
        .shape({ name: yup.string().required('Scan name is required') })
    ),
})
