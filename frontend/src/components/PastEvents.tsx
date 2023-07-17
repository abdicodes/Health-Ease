import React from 'react'
import { Event } from '../types'
// import EventContainer from './EventContainer'
import { isFutureEvent } from '../utils/isFutureEvent'
import EventRenderer from './EventRenderer'

interface PastEventsProps {
  events: Event[]
}

const PastEvents: React.FC<PastEventsProps> = ({ events }) => {
  return (
    <div>
      <h2> Future Events</h2>
      {events.filter((element) => isFutureEvent(element.dateTime)).length >
      0 ? (
        events.map((event) =>
          isFutureEvent(event.dateTime) ? (
            <EventRenderer event={event} key={event.id} />
          ) : null
        )
      ) : (
        <p>No events!</p>
      )}
      <h2>Past Events</h2>
      {events.map((event) =>
        !isFutureEvent(event.dateTime) ? (
          <EventRenderer event={event} key={event.id} />
        ) : null
      )}
    </div>
  )
}

export default PastEvents
