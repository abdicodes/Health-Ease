/* logic that dynamically adds or removes scan images was borrowed and worked upon from following website
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
import { ScanFormValues, EventTypes, Image } from '../../../../types'

interface ScanFormProps {
  onSubmit: (values: ScanFormValues) => void
  patientId: number
}

const ScanFormFields: React.FC<ScanFormProps> = () => {
  const formik = useFormikContext<ScanFormValues>()

  const isDisabledButton: string =
    !formik.isValid || !formik.dirty
      ? ' bg-gray-400'
      : ' bg-blue-500 hover:bg-blue-600'

  return (
    <div className="flex justify-center mt-10">
      <Form>
        <FieldArray name="images">
          {({
            push,
            remove,
          }: {
            push: (obj: Image) => void
            remove: (index: number) => void
          }) => (
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
                      placeholder=".... Scan name "
                    />
                    <ErrorMessage
                      component="a"
                      className="text-red-500 text-sm"
                      name={`images.${index}.name`}
                    />
                  </div>

                  <button
                    type="button"
                    onClick={() => remove(index)}
                    className="flex items-center mt-7 mr-1 text-rose-800"
                  >
                    <RiDeleteBin5Line className="text-3xl" />
                    delete
                  </button>
                </div>
              ))}

              <button
                className="flex items-center justify-center mt-4 mr-1 text-blue-800 text-lg"
                type="button"
                onClick={() => push({ name: '' })} // Push a new scan with an empty name
              >
                <MdPostAdd className="text-3xl mr-2" /> Add Scan
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

const ScanForm: React.FC<ScanFormProps> = ({ onSubmit, patientId }) => {
  const handleSubmit = (values: ScanFormValues) => {
    // Handle form submission here
    onSubmit(values)
  }

  return (
    <Formik
      initialValues={{
        images: [{ name: '' }],
        comments: '',
        patientId: patientId,
        type: EventTypes.Scan,
      }}
      validationSchema={labSchema}
      onSubmit={handleSubmit}
    >
      <ScanFormFields onSubmit={handleSubmit} patientId={patientId} />
    </Formik>
  )
}

export default ScanForm
