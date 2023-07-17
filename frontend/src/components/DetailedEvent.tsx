import { useMatch } from 'react-router-dom'
import data from '../data'
import { Event } from '../types'
import DetailedEventContainer from './DetailedEventContainer'
import { Link } from 'react-router-dom'

const containerStyle: React.CSSProperties = {
  padding: '10px',
  margin: '25px auto',
  maxWidth: '400px',
}

const DetailedEvent = () => {
  const match = useMatch('/:id')
  if (!match) return null
  const { id } = match.params

  if (id === null) {
    return null
  }

  const event = data.find((element: Event) => element.id === Number(id))
  if (!event) return null
  return (
    <div style={containerStyle}>
      <h3> {event.type}</h3>
      <h4> Date: {event.dateTime}</h4>
      <DetailedEventContainer event={event} />
      <Link to={`/`}>
        <button>Go back</button>
      </Link>
    </div>
  )
}

export default DetailedEvent
