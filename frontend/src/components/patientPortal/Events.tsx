import React from 'react'
import { Event } from '../../types'
import EventContainer from './EventContainer'
import { isFutureEvent } from '../../utils/isFutureEvent'
import { Link } from 'react-router-dom'
import Navbar from '../NavBar'

interface EventsProps {
  events: Event[]
}

const Events: React.FC<EventsProps> = ({ events }) => {
  return (
    <main className="pt-5 bg-blue-50 min-h-screen">
      <section className="">
        <Navbar />
      </section>
      <section className="mx-10  my-5">
        <h2 className="text-2xl text-center font-medium mb-6">Future Events</h2>
        {events.filter((element) => isFutureEvent(element.dateTime)).length >
        0 ? (
          events.map((event) =>
            isFutureEvent(event.dateTime) ? (
              <div
                key={event.id}
                className="py-5 shadow-md bg-blue-100 pl-6 rounded-2xl"
              >
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
      </section>
      <section className="mx-10 text-center my-10">
        <h2 className="text-2xl text-center font-medium mb-6">Past Events</h2>
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
      </section>
    </main>
  )
}

export default Events
