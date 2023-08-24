import { FiCalendar, FiClock } from 'react-icons/fi'

const DateParser = ({
  daysDifference,
  day,
  month,
}: {
  daysDifference: number
  day: number
  month: string
}) => {
  const currentDay: number = new Date().getDate()
  switch (daysDifference) {
    case 0:
      if (currentDay - day === 0) return <p>Today</p>
      else if (currentDay - day > 0) return <p>Yesterday</p>
      else return <p>Tomorrow</p>
    case 1:
      return <p> Yesterday</p>
    case -1:
      return <p> Tomorrow</p>
    default:
      return (
        <p>
          {day} {month}
        </p>
      )
  }
}

const DateComponent = ({ timestamp }: { timestamp: string }) => {
  const date: Date = new Date(timestamp)

  const month: string = date.toDateString().split(' ')[1]
  const day: number = date.getDate()
  const hour: number = date.getHours()
  const minute: number = date.getMinutes()
  const daysDifference: number = Math.floor(
    (new Date().getTime() - date.getTime()) / 1000 / 60 / 60 / 24
  )
  let backgroundColorClass: string

  if (daysDifference === 0) {
    backgroundColorClass = 'bg-orange-200'
  } else if (daysDifference < 0) {
    backgroundColorClass = 'bg-green-200'
  } else {
    backgroundColorClass = 'bg-neutral-200'
  }

  return (
    <div
      className={`flex flex-col justify-center items-center rounded-2xl p-2 px-8  md:font-semibold  md:p-4 md:px-8 text-lg md:text-xl  ${backgroundColorClass}`}
    >
      <div className="  flex items-center ">
        <FiCalendar className=" mr-2" />
        <DateParser daysDifference={daysDifference} day={day} month={month} />
      </div>
      <div className=" font-serif   flex items-center ">
        <FiClock className=" mr-2" /> {hour}:{minute}
      </div>
    </div>
  )
}

export default DateComponent
