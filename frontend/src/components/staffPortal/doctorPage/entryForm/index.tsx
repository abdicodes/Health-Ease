import OutpatientForm from './OutPatientForm'
import { useAuth } from '../../../../context/AuthContext'
import heart from '/heart.png'
import { useMatch } from 'react-router-dom'

import { EntryFormValues } from '../../../../types'

const AddEntry = () => {
  const match = useMatch('/staff-portal/new-entry/:id')
  const id = match?.params.id
  // const navigate = useNavigate()
  const { addEntry } = useAuth()

  const handleSubmit = async (values: EntryFormValues) => {
    try {
      await addEntry(values)
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <div className=" flex flex-col mt-10 mb-6">
      <div className=" flex items-center flex-col  justify-center text-3xl text-blue-800">
        <img src={heart} className="h-20 mb-6" alt="healthEase Logo" />
        Add new entry
      </div>
      <div>
        {id && (
          <OutpatientForm onSubmit={handleSubmit} patientId={Number(id)} />
        )}
      </div>
    </div>
  )
}

export default AddEntry
