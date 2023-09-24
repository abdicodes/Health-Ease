import * as yup from 'yup'

export const labSchema = yup.object().shape({
  tests: yup.array().of(
    yup.object().shape({
      name: yup.string().required('Test name is required'),
      result: yup.string().required('Result  is required'),
    })
  ),
})
