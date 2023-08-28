import React from 'react'
import { Event } from '../../../types'
import DateComponent from './DateComponent'
import { Link } from 'react-router-dom'

type eventProps = {
  event: Event
}
const EventContainer: React.FC<eventProps> = ({ event }: eventProps) => {
  return (
    <div className="py-5 shadow-md bg-neutral-50 pl-6 rounded-2xl my-10 flex  items-center justify-between  md:mx-10 lg:mx-20 md:text-xl ">
      <div>
        <DateComponent timestamp={event.dateTime} />
      </div>
      <div className="  mr-4 md:text-center flex-1 items-end  flex  flex-col md:justify-between md:flex-row md:items-center ">
        <div className="flex flex-col items-center justify-center flex-1">
          <h3 className=" mb-2 mr-1 font-semibold text-blue-950  ">
            {event.type}
          </h3>
          {event.comments && (
            <p className="hidden max-w-md text-neutral-600 leading-relaxed text-sm md:flex md:px-10 ">
              {event.comments}
            </p>
          )}
        </div>
        <Link to={`/${event.id}`}>
          <div className="my-2 p-3 font-medium rounded-2xl  shadow-xl border-blue-300 border-2 bg-blue-50 text-blue-900 hover:bg-blue-500 hover:border-0 hover:text-white hover:p-3.5 ">
            View details
          </div>
        </Link>
      </div>
    </div>
  )
}

export default EventContainer
