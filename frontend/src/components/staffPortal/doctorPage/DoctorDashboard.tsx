import { useEffect, useState } from 'react'
import { MdReadMore, MdPostAdd } from 'react-icons/md'
import { LiaFileMedicalAltSolid } from 'react-icons/lia'
import { Link, useNavigate } from 'react-router-dom'
import { PatientData } from '../../../types'
import PatientCard from '../PatientCard'
import PatientSearch from '../PatientSearch'
import { useAuth } from '../../../context/AuthContext'

const SinglePatient = ({
  patient,
  openPatientCard,
  handleKeyDown,
  closePatientCard,
  isPatientCardOpen,
}: {
  patient: PatientData
  handleKeyDown: (e: React.KeyboardEvent<HTMLDivElement>) => void
  closePatientCard: () => void
  openPatientCard: (patient: PatientData) => void
  isPatientCardOpen: boolean
}) => {
  const navigate = useNavigate()
  return (
    <main className=" " tabIndex={0} onKeyDown={handleKeyDown}>
      <div
        onClick={isPatientCardOpen ? closePatientCard : undefined}
        className={isPatientCardOpen ? 'opacity-20 relative ' : ''}
      >
        <div
          className="flex  border-b items-center hover:bg-sky-100 bg-blue-50 my-3  mx-3 py-2"
          key={patient.id}
        >
          <div className="flex flex-col  justify-between md:flex-row ml-2 md:ml-10 ">
            <div className="font-base flex items-center text-base text-blue-950 my-1 p-2   ">
              {patient.name}
            </div>
          </div>
          <div className="  mr-4 flex items-end justify-end flex-col flex-1 md:flex-row   ">
            <div>
              <button
                className="flex items-center my-2 mx-2 p-2.5  rounded-2xl  shadow-xl border-blue-300 border bg-blue-50 text-blue-900 hover:bg-blue-500  hover:text-white md:mx-2  "
                onClick={() =>
                  navigate(`/staff-portal/new-entry/${patient.id}`)
                }
              >
                <MdPostAdd className="text-2xl mr-1" /> New Entry
              </button>
            </div>
            <Link to={`/staff-portal/patients/${patient.id}`}>
              <div>
                <button className="flex items-center my-2 mx-2 p-2.5  rounded-2xl  shadow-xl border-blue-300 border bg-blue-50 text-blue-900 hover:bg-blue-500  hover:text-white md:mx-2  ">
                  <LiaFileMedicalAltSolid className="text-xl mr-1" /> Medical
                  history
                </button>
              </div>
            </Link>
            <div>
              <button
                onClick={() => openPatientCard(patient)}
                className="flex items-center my-2 mx-2 p-2.5  rounded-2xl  shadow-xl border-blue-300 border bg-blue-50 text-blue-900 hover:bg-blue-500  hover:text-white md:mx-2  "
              >
                <MdReadMore className="text-2xl mr-1" /> Patient info
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

const PatientList = ({
  patients,
  handleKeyDown,
  closePatientCard,
  openPatientCard,
  selectedPatient,
  isPatientCardOpen,
}: {
  patients: PatientData[]
  handleKeyDown: (e: React.KeyboardEvent<HTMLDivElement>) => void
  closePatientCard: () => void
  openPatientCard: (patient: PatientData) => void
  selectedPatient: PatientData | null
  isPatientCardOpen: boolean
}) => {
  return (
    <main className=" " tabIndex={0} onKeyDown={handleKeyDown}>
      <div
        onClick={isPatientCardOpen ? closePatientCard : undefined}
        className={isPatientCardOpen ? 'opacity-20 relative ' : ''}
      >
        {patients.map((patient) => (
          <SinglePatient
            key={patient.id}
            patient={patient}
            openPatientCard={openPatientCard}
            closePatientCard={closePatientCard}
            handleKeyDown={handleKeyDown}
            isPatientCardOpen={isPatientCardOpen}
          />
        ))}
      </div>
      {selectedPatient && (
        <PatientCard patient={selectedPatient} onClose={closePatientCard} />
      )}
    </main>
  )
}
const DoctorDashboard = () => {
  const [selectedPatient, setSelectedPatient] = useState<PatientData | null>(
    null
  )

  const {
    patient,
    patientErrorMessage,
    admittedPatients,
    searchAdmittedPatientApi,
  } = useAuth()

  useEffect(() => {
    searchAdmittedPatientApi()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  // Function to open the patient card
  const openPatientCard = (patient: PatientData) => {
    setSelectedPatient(patient)
  }

  // Function to close the patient card
  const closePatientCard = () => {
    setSelectedPatient(null)
  }
  // Function to close the patient card when pressed space bar or esc key
  const handleKeyDown = (e: { key: string; preventDefault: () => void }) => {
    if (e.key === ' ' || e.key === 'Spacebar') {
      e.preventDefault()
      closePatientCard()
    }
  }

  const isPatientCardOpen = selectedPatient !== null

  return (
    <div className="">
      <PatientSearch />
      <div className="flex items-center justify-center text-xl text-blue-800 my-4">
        Search Result
      </div>
      {patient && (
        <SinglePatient
          patient={patient}
          openPatientCard={openPatientCard}
          closePatientCard={closePatientCard}
          isPatientCardOpen={isPatientCardOpen}
          handleKeyDown={handleKeyDown}
        />
      )}

      {patientErrorMessage && (
        <div className=" border opacity-60 p-3 text-lg text-red-700 border-red-700 my-4   max-w-fit mx-auto rounded-3xl">
          {patientErrorMessage}
        </div>
      )}
      <div className="border-t  mx-6 my-10" id="separator"></div>
      {admittedPatients && (
        <div>
          <div className="flex items-center justify-center text-xl text-blue-800 my-4">
            Admitted patients
          </div>
          <PatientList
            patients={admittedPatients}
            handleKeyDown={handleKeyDown}
            closePatientCard={closePatientCard}
            openPatientCard={openPatientCard}
            selectedPatient={selectedPatient}
            isPatientCardOpen={isPatientCardOpen}
          />
        </div>
      )}
    </div>
  )
}

export default DoctorDashboard
