import { Formik, Field, Form, ErrorMessage, useFormikContext } from 'formik'
import { basicSchema } from './entryFormSchema'
import { EmergencyFormValues, EventTypes } from '../../../../types'

interface EmergencyFormProps {
  onSubmit: (values: EmergencyFormValues) => void
  patientId: number
}

const EmergencyFormFields: React.FC<EmergencyFormProps> = () => {
  const formik = useFormikContext<EmergencyFormValues>()

  const isDisabledButton: string =
    !formik.isValid || !formik.dirty
      ? ' bg-gray-400'
      : ' bg-blue-500 hover:bg-blue-600'

  return (
    <div className="flex justify-center mt-10">
      <Form>
        <div className="my-4">
          <label
            className="block text-neutral-800 text-opacity-60 text-md font-medium pt-2 pb-1 max-w-xl"
            htmlFor="diagnosis"
          >
            Diagnosis
          </label>
          <Field
            className="text-gray-700 focus:outline-none focus:shadow-outline border-b-2 border-gray-300 py-2 px-4 block w-full appearance-none"
            id="diagnosis"
            name="diagnosis"
            placeholder=".... Enter diagnosis here"
          />
          <ErrorMessage
            component="a"
            className="text-red-500 text-sm"
            name="diagnosis"
          />
        </div>
        <div className="my-4">
          <label
            className="block text-neutral-800 text-opacity-60 text-md font-medium pt-2 pb-1 max-w-xl"
            htmlFor="details"
          >
            Summary
          </label>
          <Field
            className="text-gray-700 focus:outline-none focus:shadow-outline border-b-2 border-gray-300 py-2 px-4 block w-full appearance-none"
            id="details"
            name="details"
            placeholder="... Visit summary"
          />
          <ErrorMessage
            component="a"
            className="text-red-500 text-sm"
            name="details"
          />
        </div>

        <div className="my-4">
          <label
            className="block text-neutral-800 text-opacity-60 text-md font-medium pt-2 pb-1 max-w-xl"
            htmlFor="comments"
          >
            Comments
          </label>
          <Field
            className="text-gray-700 focus:outline-none focus:shadow-outline border-b-2 border-gray-300 py-2 px-4 block w-full appearance-none"
            id="comments"
            name="comments"
            placeholder="  comments (optional)"
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
            disabled={!formik.isValid || !formik.dirty} // Disable if not valid or not dirty
          >
            Submit
          </button>
        </div>
      </Form>
    </div>
  )
}

const EmergencyForm: React.FC<EmergencyFormProps> = ({
  onSubmit,
  patientId,
}) => {
  const handleSubmit = (values: EmergencyFormValues) => {
    // Handle form submission here
    onSubmit(values)
  }

  return (
    <Formik
      initialValues={{
        diagnosis: '',
        details: '',
        comments: '',
        patientId: patientId,
        type: EventTypes.EmergencyVisit,
      }}
      validationSchema={basicSchema}
      onSubmit={handleSubmit}
    >
      <EmergencyFormFields onSubmit={handleSubmit} patientId={patientId} />
    </Formik>
  )
}

export default EmergencyForm
