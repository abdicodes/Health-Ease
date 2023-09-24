import { useAuth } from '../../../context/AuthContext'
import heart from '/heart.png'
import { useMatch, useNavigate } from 'react-router-dom'
import { EventTypes, UpdateLabFormvalues } from '../../../types'
import { IoArrowBackOutline } from 'react-icons/io5'
import LabForm from './Labform'

const UpdateLab = () => {
  const match = useMatch('/staff-portal/update-lab/:id')
  const id = match?.params.id
  const navigate = useNavigate()
  const { updateLab, selectedEvent } = useAuth()

  const handleSubmit = async (values: UpdateLabFormvalues) => {
    try {
      console.log(values)
      await updateLab(values)
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <div className=" flex flex-col mt-10 mb-6">
      <div className=" flex items-center flex-col  justify-center text-3xl text-blue-800">
        <img src={heart} className="h-20 mb-6" alt="healthEase Logo" />
        <button
          className="flex items-center text-xl mb-4 hover:text-blue-400 "
          onClick={() => navigate(-1)}
        >
          <IoArrowBackOutline />
          Go Back
        </button>
        Update Lab results
      </div>

      <div>
        {id && selectedEvent?.type === EventTypes.Lab && (
          <LabForm onSubmit={handleSubmit} event={selectedEvent} />
        )}
      </div>
    </div>
  )
}

export default UpdateLab
