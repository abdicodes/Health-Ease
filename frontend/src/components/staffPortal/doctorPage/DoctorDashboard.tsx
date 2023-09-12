import { useState } from 'react'
import { MdReadMore } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { PatientData } from '../../../types'
import PatientCard from '../PatientCard'

const patients: PatientData[] = [
  {
    id: 1,
    name: 'mike jones junior alpha julio',
    email: 'mike@hotmail.com',
    phoneNumber: '0449208411',
    dateOfBirth: '11-09-2000',
    address: 'tuukkalantie 17 I 360, helsinki, 00940 Finland',
    gender: 'male',
    bloodType: 'O+',
    isAdmitted: false,
  },
  {
    id: 2,
    name: 'sandy jones',
    email: 'sandy@hotmail.com',
    phoneNumber: '0449208412',
    dateOfBirth: '11-10-2000',
    address: null,
    gender: 'female',
    bloodType: null,
    isAdmitted: false,
  },
]

const PatientList = ({ patients }: { patients: PatientData[] }) => {
  const [selectedPatient, setSelectedPatient] = useState<PatientData | null>(
    null
  )

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
    <main
      className=" "
      tabIndex={0} // This makes the element focusable and able to receive keyboard events
      onKeyDown={handleKeyDown}
    >
      <div
        onClick={isPatientCardOpen ? closePatientCard : undefined}
        className={
          isPatientCardOpen ? 'opacity-20 relative ' : ' bg-blue-50   '
        }
      >
        {patients.map((patient) => {
          return (
            <div
              className="flex  border-b items-center hover:bg-sky-100"
              key={patient.id}
            >
              <div className="flex flex-col  justify-between md:flex-row ml-2 md:ml-10 ">
                <div className="font-base flex items-center text-base text-blue-950 my-1 p-2   ">
                  {patient.name}
                </div>
              </div>
              <div className="  mr-4 flex items-end justify-end flex-col flex-1 md:flex-row   ">
                <div>
                  <button className="flex items-center my-2 mx-2 p-2.5  rounded-2xl  shadow-xl border-blue-300 border bg-blue-50 text-blue-900 hover:bg-blue-500  hover:text-white md:mx-2  ">
                    <MdReadMore className="text-2xl mr-1" /> New Entry
                  </button>
                </div>
                <Link to={`/staff-portal/patients/${patient.id}}`}>
                  <div>
                    <button className="flex items-center my-2 mx-2 p-2.5  rounded-2xl  shadow-xl border-blue-300 border bg-blue-50 text-blue-900 hover:bg-blue-500  hover:text-white md:mx-2  ">
                      <MdReadMore className="text-lg mr-1" /> Medical history
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
          )
        })}
      </div>
      {selectedPatient && (
        <PatientCard patient={selectedPatient} onClose={closePatientCard} />
      )}
    </main>
  )
}
const DoctorDashboard = () => {
  return <PatientList patients={patients} />
}

export default DoctorDashboard
