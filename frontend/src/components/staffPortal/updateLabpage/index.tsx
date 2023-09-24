import { useAuth } from '../../../context/AuthContext'
import heart from '/heart.png'
import { useMatch, useNavigate } from 'react-router-dom'
import { EventTypes, UpdateLabFormvalues } from '../../../types'
import { IoArrowBackOutline } from 'react-icons/io5'
import LabForm from './Labform'
import { useState } from 'react'

const UpdateLab = () => {
  const match = useMatch('/staff-portal/update-lab/:id')
  const id = match?.params.id
  const navigate = useNavigate()
  const [successMessage, setSuccessMessage] = useState<boolean>(false)
  const [errorMessage, setErrorMessage] = useState<boolean>(false)

  const { updateLab, selectedEvent } = useAuth()

  const handleSubmit = async (values: UpdateLabFormvalues) => {
    try {
      await updateLab(values)
      setSuccessMessage(true)
      setTimeout(() => {
        setSuccessMessage(false)
        navigate(-1)
      }, 3000)
    } catch (e) {
      setErrorMessage(true)
      setTimeout(() => {
        setErrorMessage(false)
      }, 3000)
    }
  }

  return (
    <div>
      {!successMessage && !errorMessage && (
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
      )}
      {successMessage && (
        <div className="flex flex-col items-center justify-center">
          <div className="text-emerald-900 text-xl font-medium mt-8">
            You have successfully updated lab results
          </div>
          <div className="text-neutral-600 font-light my-4">
            you will be redirected to previous page shortly!
          </div>
        </div>
      )}

      {errorMessage && (
        <div className="flex flex-col items-center justify-center">
          <div className="text-red-800 text-xl font-medium mt-8">
            ERROR!:your Lab result has not been updated
          </div>
          <div className="text-neutral-600 font-light my-4">
            Please try again or contact your system administrator
          </div>
        </div>
      )}
    </div>
  )
}

export default UpdateLab
