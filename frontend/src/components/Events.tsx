import React from 'react'
import { Event } from '../types'
import EventContainer from './EventContainer'
import { isFutureEvent } from '../utils/isFutureEvent'

interface EventsProps {
  events: Event[]
}

const containerStyle: React.CSSProperties = {
  border: '1px solid #ccc',
  borderRadius: '4px',
  padding: '10px',
  margin: '10px auto',
  maxWidth: '400px',
}

const Events: React.FC<EventsProps> = ({ events }) => {
  return (
    <div>
      <h2 style={{ textAlign: 'center' }}>Future Events</h2>
      {events.filter((element) => isFutureEvent(element.dateTime)).length >
      0 ? (
        events.map((event) =>
          isFutureEvent(event.dateTime) ? (
            <div style={containerStyle} key={event.id}>
              <EventContainer event={event} />
            </div>
          ) : null
        )
      ) : (
        <div style={containerStyle}>
          <p>No future events!</p>
        </div>
      )}
      <h2 style={{ textAlign: 'center' }}>Past Events</h2>
      {events.map((event) =>
        !isFutureEvent(event.dateTime) ? (
          <div style={containerStyle} key={event.id}>
            <EventContainer event={event} />
          </div>
        ) : null
      )}
    </div>
  )
}

export default Events
