import React from 'react'
import { Event } from '../types'
const EventContainer = (event: Event): JSX.Element => {
  const handleRenewalRequest = (eventId: number): void => {
    console.log(eventId)
  }
  return (
    <div key={event.id}>
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
