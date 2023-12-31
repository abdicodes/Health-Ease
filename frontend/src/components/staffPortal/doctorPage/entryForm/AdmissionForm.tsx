import { Formik, Field, Form, ErrorMessage, useFormikContext } from 'formik'
import { basicSchema } from './entryFormSchema'
import { AdmissionValues, EventTypes } from '../../../../types'

interface AdmissionFormProps {
  onSubmit: (values: AdmissionValues) => void
  patientId: string
}

const AdmissionFormFields: React.FC<AdmissionFormProps> = () => {
  const formik = useFormikContext<AdmissionValues>()

  const isDisabledButton: string =
    !formik.isValid || !formik.dirty
      ? ' bg-gray-400'
      : ' bg-blue-500 hover:bg-blue-600'

  return (
    <div className="flex justify-center mt-10 ">
      <Form className="w-2/3">
        <div className="my-4">
          <label
            className="block text-neutral-800 text-opacity-60 text-md font-medium pt-2 pb-1 max-w-xl"
            htmlFor="diagnosis"
          >
            Diagnosis
          </label>
          <Field
            className="text-gray-700 focus:outline-none focus:shadow-outline border-2 border-gray-300 py-2 px-4 block w-full appearance-none"
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
            Admission Summary
          </label>
          <Field
            className="text-gray-700 focus:outline-none focus:shadow-outline border-2 border-gray-300 py-2 px-4 block w-full appearance-none"
            id="details"
            name="details"
            placeholder="... Admission summary"
            rows={5}
            component="textarea"
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
            className="text-gray-700 focus:outline-none focus:shadow-outline border-2 border-gray-300 py-2 px-4 block w-full appearance-none"
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

        <div className="mt-8 flex justify-center ">
          <button
            type="submit"
            className={` text-white font-bold py-2 px-4 rounded-xl shadow-lg w-3/5 md:w-2/5 lg:w-1/4  ${isDisabledButton}`}
            disabled={!formik.isValid || !formik.dirty} // Disable if not valid or not dirty
          >
            Submit
          </button>
        </div>
      </Form>
    </div>
  )
}

const AdmissionForm: React.FC<AdmissionFormProps> = ({
  onSubmit,
  patientId,
}) => {
  const handleSubmit = (values: AdmissionValues) => {
    // Handle form submission here
    onSubmit(values)
  }

  return (
    <div>
      <Formik
        initialValues={{
          diagnosis: '',
          details: '',
          comments: '',
          patientId: patientId,
          type: EventTypes.Admission,
        }}
        validationSchema={basicSchema}
        onSubmit={handleSubmit}
      >
        <AdmissionFormFields onSubmit={handleSubmit} patientId={patientId} />
      </Formik>
    </div>
  )
}

export default AdmissionForm
