import Events from '../../eventsPage/Events'
import NavBar from '../NavBar'
import { useAuth } from '../../../context/AuthContext'
import { useNavigate, useMatch } from 'react-router-dom'
import { useEffect } from 'react'

const MedicalHistory = () => {
  const navigate = useNavigate()
  const match = useMatch('/staff-portal/patients/:id')

  const { staffResponse, events, searchEventsApi } = useAuth()
  if (!staffResponse?.user) {
    navigate('/staff-portal')
  }

  useEffect(() => {
    if (match?.params.id) {
      console.log(match?.params)
      const id = match?.params.id
      console.log(id)
      searchEventsApi(id)
    }
    console.log(events)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div>
      <NavBar />
      <Events events={events} />
    </div>
  )
}

export default MedicalHistory
