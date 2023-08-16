import React from 'react'
import { Event } from '../../types'
import EventContainer from './EventContainer'
import { isFutureEvent } from '../../utils/isFutureEvent'
import { Link } from 'react-router-dom'

interface EventsProps {
  events: Event[]
}

const Events: React.FC<EventsProps> = ({ events }) => {
  return (
    <div>
      <h2 className="">Future Events</h2>
      {events.filter((element) => isFutureEvent(element.dateTime)).length >
      0 ? (
        events.map((event) =>
          isFutureEvent(event.dateTime) ? (
            <div key={event.id}>
              <EventContainer event={event} />
              <Link to={`/${event.id}`}>
                <button>Show Details</button>
              </Link>
              <button> cancel </button>
              <button> reschedule </button>
            </div>
          ) : null
        )
      ) : (
        <div>
          <p>No future events!</p>
        </div>
      )}
      <h2>Past Events</h2>
      {events.map((event) =>
        !isFutureEvent(event.dateTime) ? (
          <div key={event.id}>
            <EventContainer event={event} />
            <Link to={`/${event.id}`}>
              <button>Show Details</button>
            </Link>
          </div>
        ) : null
      )}
    </div>
  )
}

export default Events
