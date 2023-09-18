import DetailedEventContainer from './DetailedEventContainer'
import { Link, useNavigate } from 'react-router-dom'
import PatientNavBar from '../patientPortal/NavBar'
import StaffNavBar from '../staffPortal/NavBar'
import { useAuth } from '../../context/AuthContext'

const DetailedEvent = () => {
  const { patientResponse, staffResponse, selectedEvent } = useAuth()

  const navigate = useNavigate()

  return (
    <>
      {patientResponse?.user && <PatientNavBar />}
      {staffResponse?.user && <StaffNavBar />}
      {selectedEvent ? (
        <main className="bg-blue-50 min-h-screen flex flex-col items-center justify-center ">
          <DetailedEventContainer event={selectedEvent} />

          <button
            className="bg-blue-700 font-medium text-white p-2 px-4 my-4 rounded-2xl shadow-lg hover:bg-blue-600 cursor-pointer"
            onClick={() => {
              navigate(-1)
            }}
          >
            Go Back
          </button>
        </main>
      ) : (
        <div className="flex  flex-col items-center justify-center mt-20 text-xl  ">
          An error has occured!
          <Link to="/">
            <button className="text-blue-900">
              Click here to return to home page
            </button>
          </Link>
        </div>
      )}
    </>
  )
}

export default DetailedEvent
