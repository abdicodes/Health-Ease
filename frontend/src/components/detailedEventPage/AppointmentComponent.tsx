import { BsCalendar4Event } from 'react-icons/bs'
import { Appointment } from '../../types'
import doctor from '/doctor.png'
import { FaUserNurse } from 'react-icons/fa'
import { BiSolidCommentDetail, BiTime } from 'react-icons/bi'

interface AppointmentComponentProps {
  event: Appointment
}

const AppointmentComponent: React.FC<AppointmentComponentProps> = ({
  event,
}) => {
  const { dateTime, staffName, type, comments, duration } = event
  return (
    <main className="  bg-gradient-to-br from-white to-blue-100 mx-4 md:mx-10 mt-10 rounded-xl shadow-sm shadow-blue-950 max-w-3xl">
      <section className=" mx-10 my-2 ">
        <div className="text-blue-950 flex items-center  pt-4 justify-center mb-6">
          <img src={doctor} className=" w-16  text-blue-800" />
          <h1 className="text-3xl  ml-4 font-semibold">{type}</h1>
        </div>

        <div className="my-2 text-lg font-semibold text-blue-900 flex items-center">
          <BsCalendar4Event className="mr-1 text-base" />
          Date: {new Date(dateTime).toDateString()}
        </div>
        <div className="my-2 text-lg font-semibold text-blue-900 flex items-center">
          <FaUserNurse className="mr-1 " />
          Appointment with: {staffName}
        </div>

        <div className="my-2 text-lg font-semibold text-blue-900 flex items-center">
          <BiTime className="mr-1 " />
          Duration: {duration} Minutes
        </div>

        {comments && (
          <>
            <div className="my-2 text-lg font-semibold text-blue-900 flex items-center">
              <BiSolidCommentDetail className="mr-1 " /> Comments
            </div>
            <div className=" text-amber-950 leading-8 bg-white p-4 rounded-2xl border-slate-500 border mb-6 ">
              {comments}
            </div>
          </>
        )}
      </section>
    </main>
  )
}

export default AppointmentComponent
