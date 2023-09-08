import { useMatch } from 'react-router-dom'
// import data from '../../../data'
import { Event } from '../../../types'
import DetailedEventContainer from './DetailedEventContainer'
import { useNavigate } from 'react-router-dom'
import NavBar from '../../NavBar'
import { useAuth } from '../../../context/AuthContext'
import LoginPage from '../loginPage'

const DetailedEvent = () => {
  const { patientResponse } = useAuth()

  const match = useMatch('/:id')
  const navigate = useNavigate()

  if (!(patientResponse?.user && patientResponse.loginMode === 'patient')) {
    console.log(patientResponse)
    return <LoginPage />
  }
  if (!match) return null

  const { id } = match.params

  if (!id) return null

  const event = patientResponse?.events.find(
    (element: Event) => element.id === Number(id)
  )
  if (!event) return null

  return (
    <>
      <NavBar />
      <main className="bg-blue-50 min-h-screen flex flex-col items-center justify-center ">
        <DetailedEventContainer event={event} />

        <button
          className="bg-blue-700 font-medium text-white p-2 px-4 my-4 rounded-2xl shadow-lg hover:bg-blue-600 cursor-pointer"
          onClick={() => {
            navigate(-1)
          }}
        >
          Go Back
        </button>
      </main>
    </>
  )
}

export default DetailedEvent
