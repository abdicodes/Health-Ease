import React from 'react'
import { Event } from '../../types'
import EventContainer from './EventContainer'

import { FiCheckSquare, FiAlertOctagon } from 'react-icons/fi'
import { isFutureEvent } from '../../utils/isFutureEvent'

interface EventsProps {
  events: Event[]
}

const Events: React.FC<EventsProps> = ({ events }) => {
  return (
    <main className="py-5 bg-blue-50 min-h-screen">
      <section className="mx-10  my-5">
        <h2 className=" flex items-center text-xl md:text-2xl shadow-2xl rounded-md text-center font-medium mb-6 text-blue-950 bg-blue-200 max-w-fit p-3 mx-auto">
          <FiAlertOctagon className="mr-2" /> Upcoming Events
        </h2>
        {events.filter((element) => isFutureEvent(element.dateTime)).length >
        0 ? (
          events
            .sort((a, b) => (a.dateTime < b.dateTime ? 1 : -1))
            .map((event) =>
              isFutureEvent(event.dateTime) ? (
                <div key={event.id}>
                  <EventContainer event={event} />
                </div>
              ) : null
            )
        ) : (
          <div className="text-center  text-gray-600 ">
            <p>No upcoming events!</p>
          </div>
        )}
      </section>
      <section className="mx-10 text-center my-10">
        <h2 className=" flex items-center text-xl md:text-2xl shadow-2xl rounded-md text-center font-medium mb-6 text-blue-950 bg-blue-200 max-w-fit p-3 mx-auto">
          <FiCheckSquare className="mr-2 " /> Past Events
        </h2>
        {events
          .filter((event) => event.type !== 'Appointment')
          .sort((a, b) => (a.dateTime < b.dateTime ? 1 : -1))
          .map((event) => (
            <div key={event.id}>
              <EventContainer event={event} />
            </div>
          ))}
      </section>
    </main>
  )
}

export default Events
