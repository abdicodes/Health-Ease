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

import { prescriptionSchema } from './entryFormSchema'
import { PrescriptionFormValues, EventTypes, Drug } from '../../../../types'

interface PrescriptionFormProps {
  onSubmit: (values: PrescriptionFormValues) => void
  patientId: string
}

const PrescriptionFormFields: React.FC<PrescriptionFormProps> = () => {
  const formik = useFormikContext<PrescriptionFormValues>()

  const isDisabledButton: string =
    !formik.isValid || !formik.dirty
      ? ' bg-gray-400'
      : ' bg-blue-500 hover:bg-blue-600'

  return (
    <div className="flex justify-center mt-10">
      <Form>
        <FieldArray name="drugs">
          {({
            push,
            remove,
          }: {
            push: (obj: Drug) => void
            remove: (index: number) => void
          }) => (
            <div>
              {formik.values.drugs.map((_drug, index) => (
                <div
                  key={index}
                  className="flex items-center flex-col border px-10 py-4 shadow-lg my-4"
                >
                  <div className=" mr-2  ">
                    <label
                      className="block text-neutral-800 text-opacity-60 text-md font-medium pt-2 pb-1 max-w-xl"
                      htmlFor={`drugs.${index}.name`}
                    >
                      Drug Name
                    </label>
                    <Field
                      className="text-gray-700 focus:outline-none focus:shadow-outline border-2 border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none"
                      id={`drugs.${index}.name`}
                      name={`drugs.${index}.name`}
                      placeholder=".... Drug name "
                    />
                    <ErrorMessage
                      component="a"
                      className="text-red-500 text-sm"
                      name={`drugs.${index}.name`}
                    />
                  </div>

                  <div className=" mr-2">
                    <label
                      className="block text-neutral-800 text-opacity-60 text-md font-medium pt-2 pb-1 max-w-xl"
                      htmlFor={`drugs.${index}.quantity`}
                    >
                      Quantity
                    </label>
                    <Field
                      className="text-gray-700 focus:outline-none focus:shadow-outline border-2 border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none"
                      id={`drugs.${index}.quantity`}
                      name={`drugs.${index}.quantity`}
                      placeholder=".... Quantity "
                    />
                    <ErrorMessage
                      component="a"
                      className="text-red-500 text-sm"
                      name={`drugs.${index}.quantity`}
                    />
                  </div>

                  <div className="mr-2">
                    <label
                      className="block text-neutral-800 text-opacity-60 text-md font-medium pt-2 pb-1 max-w-xl"
                      htmlFor={`drugs.${index}.dose`}
                    >
                      Dose
                    </label>
                    <Field
                      className="text-gray-700 focus:outline-none focus:shadow-outline border-2 border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none"
                      id={`drugs.${index}.dose`}
                      name={`drugs.${index}.dose`}
                      placeholder=".... Dose "
                    />
                    <ErrorMessage
                      component="a"
                      className="text-red-500 text-sm"
                      name={`drugs.${index}.dose`}
                    />
                  </div>

                  <div className="mr-2">
                    <label
                      className="block text-neutral-800 text-opacity-60 text-md font-medium pt-2 pb-1 max-w-xl"
                      htmlFor={`drugs.${index}.instruction`}
                    >
                      Instruction
                    </label>
                    <Field
                      className="text-gray-700 focus:outline-none focus:shadow-outline border-2 border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none"
                      id={`drugs.${index}.instruction`}
                      name={`drugs.${index}.instruction`}
                      placeholder=".... instruction "
                    />
                    <ErrorMessage
                      component="a"
                      className="text-red-500 text-sm"
                      name={`drugs.${index}.instruction`}
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
                onClick={() =>
                  push({ name: '', instruction: '', dose: '', quantity: 0 })
                } // Push a new test with an empty name
              >
                <MdPostAdd className="text-3xl mr-2" /> Add Prescription
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

const PrescriptionForm: React.FC<PrescriptionFormProps> = ({
  onSubmit,
  patientId,
}) => {
  const handleSubmit = (values: PrescriptionFormValues) => {
    // Handle form submission here
    onSubmit(values)
  }

  return (
    <Formik
      initialValues={{
        drugs: [{ name: '', instruction: '', dose: '', quantity: 0 }],
        comments: '',
        patientId: patientId,
        type: EventTypes.Prescription,
      }}
      validationSchema={prescriptionSchema}
      onSubmit={handleSubmit}
    >
      <PrescriptionFormFields onSubmit={handleSubmit} patientId={patientId} />
    </Formik>
  )
}

export default PrescriptionForm
