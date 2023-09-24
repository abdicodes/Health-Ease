/* logic that dynamically adds or removes tests was borrowed and worked upon from following website
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

import { labSchema } from './entryFormSchema'
import { Lab, UpdateLabFormvalues } from '../../../types'

interface LabFormProps {
  onSubmit: (values: UpdateLabFormvalues) => void

  event: Lab
}

const LabFormFields: React.FC<LabFormProps> = () => {
  const formik = useFormikContext<UpdateLabFormvalues>()

  const isDisabledButton: string =
    !formik.isValid || !formik.dirty
      ? ' bg-gray-400'
      : ' bg-blue-500 hover:bg-blue-600'

  return (
    <div className="flex justify-center mt-10">
      <Form>
        <FieldArray name="tests">
          {() => (
            <div>
              {formik.values.tests.map((_test, index) => (
                <div key={index} className="flex items-center">
                  <div className="my-4 mr-2">
                    <label
                      className="block text-neutral-800 text-opacity-60 text-md font-medium pt-2 pb-1 max-w-xl"
                      htmlFor={`tests.${index}.name`}
                    >
                      Test Name
                    </label>
                    <Field
                      className="text-gray-700 focus:outline-none focus:shadow-outline border-2 border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none"
                      id={`tests.${index}.name`}
                      name={`tests.${index}.name`}
                      value={formik.values.tests[index].name}
                      disabled={true}
                    />
                    <ErrorMessage
                      component="a"
                      className="text-red-500 text-sm"
                      name={`tests.${index}.name`}
                    />

                    <label
                      className="block text-neutral-800 text-opacity-60 text-md font-medium pt-2 pb-1 max-w-xl"
                      htmlFor={`tests.${index}.result`}
                    >
                      Result
                    </label>
                    <Field
                      className="text-gray-700 focus:outline-none focus:shadow-outline border-2 border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none"
                      id={`tests.${index}.result`}
                      name={`tests.${index}.result`}
                      placeholder=".... Add result "
                      value={formik.values.tests[index].result || ''}
                    />
                    <ErrorMessage
                      component="a"
                      className="text-red-500 text-sm"
                      name={`tests.${index}.result`}
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
            placeholder="  comments (optional)"
            value={formik.values.comments || ''}
            component="textarea"
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

const LabForm: React.FC<LabFormProps> = ({ onSubmit, event }) => {
  const handleSubmit = (values: UpdateLabFormvalues) => {
    // Handle form submission here
    onSubmit(values)
  }

  return (
    <Formik
      initialValues={{
        tests: event.tests,
        id: event.id,
        comments: event?.comments,
      }}
      validationSchema={labSchema}
      onSubmit={handleSubmit}
    >
      <LabFormFields onSubmit={handleSubmit} event={event} />
    </Formik>
  )
}

export default LabForm
