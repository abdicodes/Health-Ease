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
import { RiDeleteBin5Line } from 'react-icons/ri'
import { MdPostAdd } from 'react-icons/md'

import { labSchema } from './entryFormSchema'
import { LabFormValues, EventTypes, Test } from '../../../../types'

interface LabFormProps {
  onSubmit: (values: LabFormValues) => void
  patientId: number
}

const LabFormFields: React.FC<LabFormProps> = () => {
  const formik = useFormikContext<LabFormValues>()

  const isDisabledButton: string =
    !formik.isValid || !formik.dirty
      ? ' bg-gray-400'
      : ' bg-blue-500 hover:bg-blue-600'

  return (
    <div className="flex justify-center mt-10">
      <Form>
        <FieldArray name="tests">
          {({
            push,
            remove,
          }: {
            push: (obj: Test) => void
            remove: (index: number) => void
          }) => (
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
                      placeholder=".... Test name "
                    />
                    <ErrorMessage
                      component="a"
                      className="text-red-500 text-sm"
                      name={`tests.${index}.name`}
                    />
                  </div>

                  <button
                    type="button"
                    onClick={() => remove(index)}
                    className="flex items-center mt-7 mr-1 text-red-700 hover:text-red-900"
                  >
                    <RiDeleteBin5Line className="text-3xl" />
                    delete
                  </button>
                </div>
              ))}

              <button
                className="flex items-center justify-center mt-4 mr-1 text-blue-600 hover:text-blue-800 text-lg"
                type="button"
                onClick={() => push({ name: '' })} // Push a new test with an empty name
              >
                <MdPostAdd className="text-3xl mr-2" /> Add Test
              </button>
            </div>
          )}
        </FieldArray>
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

const LabForm: React.FC<LabFormProps> = ({ onSubmit, patientId }) => {
  const handleSubmit = (values: LabFormValues) => {
    // Handle form submission here
    onSubmit(values)
  }

  return (
    <Formik
      initialValues={{
        tests: [{ name: '' }],
        comments: '',
        patientId: patientId,
        type: EventTypes.Lab,
      }}
      validationSchema={labSchema}
      onSubmit={handleSubmit}
    >
      <LabFormFields onSubmit={handleSubmit} patientId={patientId} />
    </Formik>
  )
}

export default LabForm
