import * as yup from 'yup'

export const scanSchema = yup.object().shape({
  images: yup.array().of(
    yup.object().shape({
      name: yup.string().required('Scan name is required'),
      result: yup.string().required('Result  is required'),
    })
  ),
})
