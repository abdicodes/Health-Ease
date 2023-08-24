import React from 'react'
import { Event } from '../../../types'
import DateComponent from './DateComponent'

type eventProps = {
  event: Event
}
const EventContainer: React.FC<eventProps> = ({ event }: eventProps) => {
  return (
    <div className="py-5 shadow-md bg-neutral-50 pl-6 rounded-2xl my-10 flex flex-col items-center justify-between md:flex-row md:mx-10 lg:mx-20  ">
      <DateComponent timestamp={event.dateTime} />
      <h3 className="text-center  font-semibold text-blue-950  md:text-2xl">
        {event.type}
      </h3>

      <div className="">View details</div>
    </div>
  )
}

export default EventContainer
