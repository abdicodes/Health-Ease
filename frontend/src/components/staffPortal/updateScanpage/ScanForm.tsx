/* logic that dynamically adds or removes images was borrowed and worked upon from following website
https://formik.org/docs/examples/field-arrays
*/

import {
  Formik,
  Field,
  Form,
  ErrorMessage,
  useFormikContext,
  FieldArray,
} from 'formik'

import { scanSchema } from './entryFormSchema'
import { Scan, UpdateScanFormValues } from '../../../types'

interface ScanFormProps {
  onSubmit: (values: UpdateScanFormValues) => void

  event: Scan
}

const ScanFormFields: React.FC<ScanFormProps> = () => {
  const formik = useFormikContext<UpdateScanFormValues>()

  const isDisabledButton: string =
    !formik.isValid || !formik.dirty
      ? ' bg-gray-400'
      : ' bg-blue-500 hover:bg-blue-600'

  return (
    <div className="flex justify-center mt-10">
      <Form>
        <FieldArray name="images">
          {() => (
            <div>
              {formik.values.images.map((_image, index) => (
                <div key={index} className="flex items-center">
                  <div className="my-4 mr-2">
                    <label
                      className="block text-neutral-800 text-opacity-60 text-md font-medium pt-2 pb-1 max-w-xl"
                      htmlFor={`images.${index}.name`}
                    >
                      Scan Name
                    </label>
                    <Field
                      className="text-gray-700 focus:outline-none focus:shadow-outline border-2 border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none"
                      id={`images.${index}.name`}
                      name={`images.${index}.name`}
                      value={formik.values.images[index].name}
                      disabled={true}
                    />
                    <ErrorMessage
                      component="a"
                      className="text-red-500 text-sm"
                      name={`images.${index}.name`}
                    />

                    <label
                      className="block text-neutral-800 text-opacity-60 text-md font-medium pt-2 pb-1 max-w-xl"
                      htmlFor={`images.${index}.result`}
                    >
                      Result
                    </label>
                    <Field
                      className="text-gray-700 focus:outline-none focus:shadow-outline border-2 border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none"
                      id={`images.${index}.result`}
                      name={`images.${index}.result`}
                      placeholder=".... Add result "
                      value={formik.values.images[index].result || ''}
                      component="textarea"
                      rows={10}
                    />
                    <ErrorMessage
                      component="a"
                      className="text-red-500 text-sm"
                      name={`images.${index}.result`}
                    />
                  </div>
                </div>
              ))}
            </div>
          )}
        </FieldArray>

        <div className="my-4">
          <label
            className="block text-neutral-800 text-opacity-60 text-md font-medium pt-2 pb-1 max-w-xl"
            htmlFor="comments"
          >
            Comments
          </label>
          <Field
            className="text-gray-700 focus:outline-none focus:shadow-outline border-2 border-gray-300 py-2 px-4 block w-full appearance-none"
            id="comments"
            name="comments"
            component="textarea"
            placeholder="  comments (optional)"
            value={formik.values.comments || ''}
            rows={2}
          />
          <ErrorMessage
            component="a"
            className="text-red-500 text-sm"
            name="comments"
          />
        </div>
        <div className="mt-8">
          <button
            type="submit"
            className={` text-white font-bold py-2 px-4 w-full rounded-xl shadow-lg  ${isDisabledButton}`}
            disabled={!formik.isValid || !formik.dirty}
          >
            Submit
          </button>
        </div>
      </Form>
    </div>
  )
}

const ScanUpdateForm: React.FC<ScanFormProps> = ({ onSubmit, event }) => {
  const handleSubmit = (values: UpdateScanFormValues) => {
    // Handle form submission here
    onSubmit(values)
  }

  return (
    <Formik
      initialValues={{
        images: event.images,
        id: event.id,
        comments: event.comments,
      }}
      validationSchema={scanSchema}
      onSubmit={handleSubmit}
    >
      <ScanFormFields onSubmit={handleSubmit} event={event} />
    </Formik>
  )
}

export default ScanUpdateForm
