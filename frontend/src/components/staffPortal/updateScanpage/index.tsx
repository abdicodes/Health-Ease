import { useAuth } from '../../../context/AuthContext'
import heart from '/heart.png'
import { useMatch, useNavigate } from 'react-router-dom'
import { EventTypes, UpdateScanFormValues } from '../../../types'
import { IoArrowBackOutline } from 'react-icons/io5'
import ScanUpdateForm from './ScanForm'

const UpdateScan = () => {
  const match = useMatch('/staff-portal/update-scan/:id')
  const id = match?.params.id
  const navigate = useNavigate()
  const { updateScan, selectedEvent } = useAuth()

  const handleSubmit = async (values: UpdateScanFormValues) => {
    try {
      console.log(values)
      await updateScan(values)
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
        Update Scan results
      </div>

      <div>
        {id && selectedEvent?.type === EventTypes.Scan && (
          <ScanUpdateForm onSubmit={handleSubmit} event={selectedEvent} />
        )}
      </div>
    </div>
  )
}

export default UpdateScan
