import React from 'react'
import { Event } from '../types'

type eventProps = {
  event: Event
}
const EventContainer: React.FC<eventProps> = ({ event }: eventProps) => {
  const handleRenewalRequest = (eventId: number): void => {
    console.log(eventId)
  }
  return (
    <div>
      <h3>{event.type}</h3>
      <p>Date/Time: {event.dateTime.toString()}</p>
      {event.type === 'Prescription' && event.active === false && (
        <button onClick={() => handleRenewalRequest(event.id)}>
          Renewal Request
        </button>
      )}
    </div>
  )
}

export default EventContainer
