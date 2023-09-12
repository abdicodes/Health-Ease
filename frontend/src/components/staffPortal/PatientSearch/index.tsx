import SearchForm from './PatientSearchForm'
import { useAuth } from '../../../context/AuthContext'
import { MdSearch } from 'react-icons/md'
// import { useNavigate } from 'react-router-dom'

const PatientSearch = () => {
  //   const navigate = useNavigate()
  const { searchPatientApi, patient } = useAuth()
  interface SearchFormValues {
    id: string
  }

  const handleSearch = async (values: SearchFormValues) => {
    try {
      if (values.id) {
        await searchPatientApi(values.id)
        console.log(patient)
      }
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <div className=" flex flex-col mt-10 mb-1">
      <div className=" flex items-center justify-center text-xl text-blue-800">
        <MdSearch className="text-x mr-1" /> Patient Search
      </div>
      <div className="flex items-center justify-center font-thin text-md text-neutral-700">
        Search for a patient using their Identification No.
      </div>
      <div>
        <SearchForm onSubmit={handleSearch} />
      </div>
    </div>
  )
}

export default PatientSearch
