import { Formik, Field, Form, ErrorMessage, useFormikContext } from 'formik'
import { searchSchema } from './patientSearchSchema'
import { AiOutlineSearch } from 'react-icons/ai'

interface PatientSearchFormValues {
  id: string
}

interface SearchFormProps {
  onSubmit: (values: PatientSearchFormValues) => Promise<void>
}

const SearchFormFields: React.FC<SearchFormProps> = () => {
  const formik = useFormikContext<PatientSearchFormValues>()

  const isDisabledButton: string =
    !formik.isValid || !formik.dirty
      ? ' bg-gray-400'
      : ' bg-blue-500 hover:bg-blue-600'

  return (
    <div className="flex flex-col sm:flex-row items-center justify-center my-2">
      <Form className="flex flex-col sm:flex-row items-center justify-center">
        <div className=" px-2 flex ">
          <label
            className="block text-neutral-950 text-md font-medium pt-2 pb-1 max-w-xl"
            htmlFor="id"
          ></label>
          <Field
            className="text-gray-700 focus:outline-none focus:shadow-outline border-2 rounded-2xl border-gray-300 py-2 my-2 w-full"
            id="id"
            name="id"
            placeholder="... ID number"
          />
          <ErrorMessage
            component="id"
            className="text-red-500 text-sm"
            name="id"
          />
        </div>
        <button
          type="submit"
          className={`text-white flex font-bold py-2 px-4 my-2 sm:my-0 sm:ml-2  sm:w-auto rounded-xl shadow-lg ${isDisabledButton}`}
          disabled={!formik.isValid || !formik.dirty} // Disable if not valid or not dirty
        >
          <AiOutlineSearch className="mx-1 text-xl" /> Search
        </button>
      </Form>
    </div>
  )
}

const SearchForm: React.FC<SearchFormProps> = ({ onSubmit }) => {
  const handleSubmit = async (
    values: PatientSearchFormValues
  ): Promise<void> => {
    // Handle form submission here
    await onSubmit(values)
  }

  return (
    <Formik
      initialValues={{
        id: '',
      }}
      validationSchema={searchSchema}
      onSubmit={handleSubmit}
    >
      <SearchFormFields onSubmit={handleSubmit} />
    </Formik>
  )
}

export default SearchForm
