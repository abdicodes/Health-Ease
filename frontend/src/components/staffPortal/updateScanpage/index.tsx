import { useAuth } from '../../../context/AuthContext'
import heart from '/heart.png'
import { useMatch, useNavigate } from 'react-router-dom'
import { EventTypes, UpdateScanFormValues } from '../../../types'
import { IoArrowBackOutline } from 'react-icons/io5'
import ScanUpdateForm from './ScanForm'
import { useState } from 'react'

const UpdateScan = () => {
  const match = useMatch('/staff-portal/update-scan/:id')
  const id = match?.params.id
  const navigate = useNavigate()
  const { updateScan, selectedEvent } = useAuth()
  const [successMessage, setSuccessMessage] = useState<boolean>(false)
  const [errorMessage, setErrorMessage] = useState<boolean>(false)

  const handleSubmit = async (values: UpdateScanFormValues) => {
    try {
      setSuccessMessage(true)
      setTimeout(() => {
        setSuccessMessage(false)
        navigate(-1)
      }, 3000)
      await updateScan(values)
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
            Update Scan results
          </div>

          <div>
            {id && selectedEvent?.type === EventTypes.Scan && (
              <ScanUpdateForm onSubmit={handleSubmit} event={selectedEvent} />
            )}
          </div>
        </div>
      )}
      {successMessage && (
        <div className="flex flex-col items-center justify-center">
          <div className="text-emerald-900 text-xl font-medium mt-8">
            You have successfully updated Scan results
          </div>
          <div className="text-neutral-600 font-light my-4">
            you will be redirected to previous page shortly!
          </div>
        </div>
      )}

      {errorMessage && (
        <div className="flex flex-col items-center justify-center">
          <div className="text-red-800 text-xl font-medium mt-8">
            ERROR!:your Scan result has not been updated
          </div>
          <div className="text-neutral-600 font-light my-4">
            Please try again or contact your system administrator
          </div>
        </div>
      )}
    </div>
  )
}

export default UpdateScan
