import { Formik, Field, Form, ErrorMessage, useFormikContext } from 'formik'
import { appointmentSchema } from './entryFormSchema'
import { AppointmentFormValues, EventTypes } from '../../../../types'
interface AppointmentFormProps {
  onSubmit: (values: AppointmentFormValues) => void
  patientId: number
}

const AppointmentFormFields: React.FC<AppointmentFormProps> = () => {
  const formik = useFormikContext<AppointmentFormValues>()

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
            htmlFor="date"
          >
            Date
          </label>
          <Field
            type="date"
            className="text-gray-700 focus:outline-none focus:shadow-outline border-2 border-gray-300 py-2 px-4 block w-full appearance-none"
            id="date"
            name="date"
          />
          <ErrorMessage
            component="a"
            className="text-red-500 text-sm"
            name="time.date"
          />
        </div>
        <div className="my-4">
          <label
            className="block text-neutral-800 text-opacity-60 text-md font-medium pt-2 pb-1 max-w-xl"
            htmlFor="time"
          >
            Time
          </label>
          <div className="flex">
            <Field
              as="select"
              name="time.hours"
              className="text-gray-700 focus:outline-none focus:shadow-outline border-2 border-gray-300 py-2 px-4 w-1/2 mr-2"
            >
              <option value="">Select Hour</option>
              {Array.from({ length: 10 }, (_, i) => (
                <option key={i} value={i + 8}>
                  {i + 8}
                </option>
              ))}
            </Field>
            <Field
              as="select"
              name="time.minutes"
              className="text-gray-700 focus:outline-none focus:shadow-outline border-2 border-gray-300 py-2 px-4 w-1/2"
            >
              <option value="">Select Minutes</option>

              {Array.from({ length: 12 }, (_, i) => (
                <option key={i} value={i * 5}>
                  {i * 5}
                </option>
              ))}
            </Field>
          </div>
          <ErrorMessage
            component="div"
            className="text-red-500 text-sm"
            name="time.minutes"
          />
        </div>
        <div className="my-4">
          <label
            className="block text-neutral-800 text-opacity-60 text-md font-medium pt-2 pb-1 max-w-xl"
            htmlFor="duration"
          >
            Duration (minutes)
          </label>
          <Field
            type="number"
            className="text-gray-700 focus:outline-none focus:shadow-outline border-2 border-gray-300 py-2 px-4 block w-full appearance-none"
            id="duration"
            name="duration"
          />
          <ErrorMessage
            component="a"
            className="text-red-500 text-sm"
            name="duration"
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

const AppointmentForm: React.FC<AppointmentFormProps> = ({
  onSubmit,
  patientId,
}) => {
  const handleSubmit = (values: AppointmentFormValues) => {
    // Handle form submission here
    onSubmit(values)
  }

  return (
    <div>
      <Formik
        initialValues={{
          date: '',
          time: {
            hours: '',
            minutes: '',
          },
          duration: '',
          patientId: patientId,
          type: EventTypes.Appointment,
        }}
        validationSchema={appointmentSchema}
        onSubmit={handleSubmit}
      >
        <AppointmentFormFields onSubmit={handleSubmit} patientId={patientId} />
      </Formik>
    </div>
  )
}

export default AppointmentForm
