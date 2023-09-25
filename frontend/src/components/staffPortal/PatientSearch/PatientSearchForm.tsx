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
    <div className="my-2  mt-8 mb-2 ">
      <Form className=" w-full flex flex-col items-center">
        <div className=" flex justify-center items-center my-2">
          <Field
            className="text-gray-700 focus:outline-none focus:shadow-outline border-2 max-h-11  md:w-96 rounded-2xl border-gray-300  mx-3 py-3 px-4 "
            id="id"
            name="id"
            placeholder="... Enter patient's ID "
            value={formik.values.id || ''}
          />
          <button
            id="search"
            type="submit"
            className={`text-white flex items-center font-bold py-3 px-4  max-h-11 rounded-xl shadow-lg ${isDisabledButton}`}
            disabled={!formik.isValid || !formik.dirty} // Disable if not valid or not dirty
          >
            <AiOutlineSearch className="mx-1 text-xl" /> Search
          </button>
        </div>

        <div className="">
          <ErrorMessage
            component="a"
            className="text-red-500 text-sm"
            name="id"
          />
        </div>
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
