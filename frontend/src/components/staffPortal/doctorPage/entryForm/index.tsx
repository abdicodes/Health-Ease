import { useState } from 'react'
import { useAuth } from '../../../../context/AuthContext'
import heart from '/heart.png'
import { useMatch, useNavigate } from 'react-router-dom'
import { EntryFormValues } from '../../../../types'
import SelectedForm from './SelectedForm'
import { IoArrowBackOutline } from 'react-icons/io5'
import { FaExchangeAlt } from 'react-icons/fa'

const AddEntry = () => {
  const [selectedForm, setSelectedForm] = useState<string | null>(null)
  const [successMessage, setSuccessMessage] = useState<boolean>(false)
  const [errorMessage, setErrorMessage] = useState<boolean>(false)

  const match = useMatch('/staff-portal/new-entry/:id')
  const id = match?.params.id
  const navigate = useNavigate()
  const { addEntry } = useAuth()

  const handleSubmit = async (values: EntryFormValues) => {
    try {
      await addEntry(values)

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
    <div className=" flex flex-col mt-10 mb-6">
      {!successMessage && !errorMessage && (
        <div>
          <div className=" flex items-center flex-col  justify-center text-3xl text-blue-800">
            <img src={heart} className="h-20 mb-6" alt="healthEase Logo" />
            <button
              className="flex items-center text-xl mb-4 hover:text-blue-400 "
              onClick={() => navigate(-1)}
            >
              <IoArrowBackOutline />
              Go Back
            </button>
            Add new entry
            {selectedForm && (
              <button
                className="mx-4 bg-blue-500 text-white py-2 px-3 flex items-center rounded-xl my-4 max-w-sm text-base hover:bg-blue-600"
                onClick={() => setSelectedForm(null)}
              >
                <FaExchangeAlt className="mr-2" /> Change entry type
              </button>
            )}
          </div>

          <div>
            {id && (
              <SelectedForm
                handleSubmit={handleSubmit}
                patientId={id}
                selectedForm={selectedForm}
              />
            )}
          </div>

          {!selectedForm && (
            <div className="flex justify-center">
              <div className="flex flex-wrap  justify-center items-center mt-6 mb-2 max-w-lg ">
                <button
                  onClick={() => setSelectedForm('outpatient')}
                  className="mx-4 bg-blue-500 text-white py-1  px-2 rounded-xl my-4 hover:bg-blue-600"
                >
                  Out-patient visit
                </button>
                <button
                  onClick={() => setSelectedForm('inpatient')}
                  className="mx-4 bg-blue-500 text-white py-1  px-2 rounded-xl my-4 hover:bg-blue-600"
                >
                  In-patient Visit
                </button>
                <button
                  onClick={() => setSelectedForm('emergency')}
                  className="mx-4 bg-blue-500 text-white py-1  px-2 rounded-xl my-4 hover:bg-blue-600"
                >
                  Emergency Visit
                </button>
                <button
                  onClick={() => setSelectedForm('admission')}
                  className="mx-4 bg-blue-500 text-white py-1  px-2 rounded-xl my-4 hover:bg-blue-600"
                >
                  Admission
                </button>
                <button
                  onClick={() => setSelectedForm('discharge')}
                  className="mx-4 bg-blue-500 text-white py-1  px-2 rounded-xl my-4 hover:bg-blue-600"
                >
                  Discharge
                </button>
                <button
                  onClick={() => setSelectedForm('lab')}
                  className="mx-4 bg-blue-500 text-white py-1  px-2 rounded-xl my-4 hover:bg-blue-600"
                >
                  Lab order
                </button>
                <button
                  onClick={() => setSelectedForm('scan')}
                  className="mx-4 bg-blue-500 text-white py-1  px-2 rounded-xl my-4 hover:bg-blue-600"
                >
                  Scan order
                </button>

                <button
                  onClick={() => setSelectedForm('appointment')}
                  className="mx-4 bg-blue-500 text-white py-1  px-2 rounded-xl my-4 hover:bg-blue-600"
                >
                  Appointment
                </button>

                <button
                  onClick={() => setSelectedForm('prescription')}
                  className="mx-4 bg-blue-500 text-white py-1  px-2 rounded-xl my-4 hover:bg-blue-600"
                >
                  Prescription
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {successMessage && (
        <div className="flex flex-col items-center justify-center">
          <div className="text-emerald-900 text-xl font-medium mt-8">
            You have successfully added a new entry
          </div>
          <div className="text-neutral-600 font-light my-4">
            you will be redirected to previous page shortly!
          </div>
        </div>
      )}

      {errorMessage && (
        <div className="flex flex-col items-center justify-center">
          <div className="text-red-800 text-xl font-medium mt-8">
            ERROR!:your entry has not been added
          </div>
          <div className="text-neutral-600 font-light my-4">
            Please try again or contact your system administrator
          </div>
        </div>
      )}
    </div>
  )
}

export default AddEntry
