// import OutpatientForm from './OutPatientForm'
// import { useAuth } from '../../../../context/AuthContext'
import heart from '/heart.png'
import { useMatch, useNavigate } from 'react-router-dom'

import { EntryFormValues } from '../../../../types'
// import LabForm from './Labform'
import AdmissionForm from './AdmissionForm'
import LabForm from './Labform'
import OutpatientForm from './OutPatientForm'

import ScanForm from './ScanForm'
import { useState } from 'react'

import { IoArrowBackOutline } from 'react-icons/io5'
import InpatientForm from './InpatientForm'
import EmergencyForm from './EmergencyForm'
import DischargeForm from './DischargeForm'
import { FaExchangeAlt } from 'react-icons/fa'

const AddEntry = () => {
  const [selectedForm, setSelectedForm] = useState<string | null>(null)
  const match = useMatch('/staff-portal/new-entry/:id')
  const navigate = useNavigate()
  const id = match?.params.id
  // const navigate = useNavigate()
  // const { addEntry } = useAuth()

  const handleSubmit = async (values: EntryFormValues) => {
    try {
      console.log(values)
      // await addEntry(values)
    } catch (e) {
      console.error(e)
    }
  }

  const SelectedForm = ({
    handleSubmit,
    patientId,
    selectedForm,
  }: {
    handleSubmit: (values: EntryFormValues) => Promise<void>
    patientId: number
    selectedForm: string | null
  }) => {
    switch (selectedForm) {
      case 'outpatient':
        return <OutpatientForm patientId={patientId} onSubmit={handleSubmit} />
      case 'inpatient':
        return <InpatientForm patientId={patientId} onSubmit={handleSubmit} />
      case 'admission':
        return <AdmissionForm patientId={patientId} onSubmit={handleSubmit} />
      case 'emergency':
        return <EmergencyForm patientId={patientId} onSubmit={handleSubmit} />
      case 'discharge':
        return <DischargeForm patientId={patientId} onSubmit={handleSubmit} />
      case 'lab':
        return <LabForm patientId={patientId} onSubmit={handleSubmit} />
      case 'scan':
        return <ScanForm patientId={patientId} onSubmit={handleSubmit} />
      default:
        return (
          <div className="flex justify-center mt-1 text-neutral-700">
            Select the entry type
          </div>
        )
    }
  }

  return (
    <div className=" flex flex-col mt-10 mb-6">
      <div className=" flex items-center flex-col  justify-center text-3xl text-blue-800">
        <img src={heart} className="h-20 mb-6" alt="healthEase Logo" />
        <button
          className="flex items-center text-xl mb-4 "
          onClick={() => navigate(-1)}
        >
          <IoArrowBackOutline />
          Go Back
        </button>
        Add new entry
        {selectedForm && (
          <button
            className="mx-4 bg-blue-700 text-white py-2 px-3 flex items-center rounded-xl my-4 max-w-sm text-base"
            onClick={() => setSelectedForm(null)}
          >
            <FaExchangeAlt className="mr-2" /> Change entry type
          </button>
        )}
      </div>

      <div>
        {
          <SelectedForm
            handleSubmit={handleSubmit}
            patientId={Number(id)}
            selectedForm={selectedForm}
          />
        }
      </div>

      {!selectedForm && (
        <div className="flex justify-center">
          <div className="flex flex-wrap  justify-center items-center mt-6 mb-2 max-w-lg ">
            <button
              onClick={() => setSelectedForm('outpatient')}
              className="mx-4 bg-blue-700 text-white py-1  px-2 rounded-xl my-4 "
            >
              Out-patient visit
            </button>
            <button
              onClick={() => setSelectedForm('inpatient')}
              className="mx-4 bg-blue-700 text-white py-1  px-2 rounded-xl my-4"
            >
              In-patient Visit
            </button>
            <button
              onClick={() => setSelectedForm('emergency')}
              className="mx-4 bg-blue-700 text-white py-1  px-2 rounded-xl my-4"
            >
              Emergency Visit
            </button>
            <button
              onClick={() => setSelectedForm('admission')}
              className="mx-4 bg-blue-700 text-white py-1  px-2 rounded-xl my-4"
            >
              Admission
            </button>
            <button
              onClick={() => setSelectedForm('discharge')}
              className="mx-4 bg-blue-700 text-white py-1  px-2 rounded-xl my-4"
            >
              Discharge
            </button>
            <button
              onClick={() => setSelectedForm('lab')}
              className="mx-4 bg-blue-700 text-white py-1  px-2 rounded-xl my-4"
            >
              Lab order
            </button>
            <button
              onClick={() => setSelectedForm('scan')}
              className="mx-4 bg-blue-700 text-white py-1  px-2 rounded-xl my-4"
            >
              Scan order
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default AddEntry
