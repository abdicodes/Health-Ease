import Events from '../../eventsPage/Events'
import NavBar from '../NavBar'
import { useAuth } from '../../../context/AuthContext'
import { useMatch, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { TbLoader } from 'react-icons/tb'

const MedicalHistory = () => {
  const match = useMatch('/staff-portal/patients/:id')
  const { staffResponse, events, searchEventsApi } = useAuth()
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    if (match?.params.id) {
      const id = match?.params.id
      searchEventsApi(id)
      setLoading(false)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [staffResponse])

  return (
    <div>
      <NavBar />
      {!loading &&
        (!staffResponse?.user ? (
          <div className="flex  flex-col items-center justify-center mt-20 text-xl  ">
            Your login information has not been verified{' '}
            <Link to="/staff-portal">
              <button className="text-blue-900">
                {' '}
                Click here to login again
              </button>
            </Link>
          </div>
        ) : events.length === 0 ? (
          <div className="flex justify-center mt-20 text-xl font-semibold text-rose-900">
            No medical record is found for this patient!
          </div>
        ) : (
          <Events events={events} />
        ))}

      {loading && (
        <div className="flex flex-col items-center text-neutral-600  mt-20">
          <TbLoader className="text-4xl  " />
          loading
        </div>
      )}
    </div>
  )
}

export default MedicalHistory
