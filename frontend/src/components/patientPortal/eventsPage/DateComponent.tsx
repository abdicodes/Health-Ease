import { FiCalendar, FiClock } from 'react-icons/fi'

const DateParser = ({
  daysDifference,
  day,
  month,
  year,
}: {
  daysDifference: number
  day: number
  month: string
  year: number
}) => {
  const currentYear: number = new Date().getFullYear()
  const currentDay: number = new Date().getDate()
  console.log(currentYear, year)
  switch (daysDifference) {
    case 0:
      if (currentDay - day === 0) return <p>Today</p>
      else if (currentDay - day > 0) return <p>Yesterday</p>
      else return <p>Tomorrow</p>
    case 1:
      if (currentDay - day === 1) return <p> Yesterday</p>
      else
        return (
          <p>
            {day} {month}
          </p>
        )
    case -1:
      return <p> Tomorrow</p>
    default:
      return (
        <p>
          {day} {month} {currentYear - year > 0 && year}
        </p>
      )
  }
}

const DateComponent = ({ timestamp }: { timestamp: string }) => {
  const date: Date = new Date(timestamp)
  const year: number = date.getFullYear()
  const month: string = date.toDateString().split(' ')[1]
  const day: number = date.getDate()
  const hour: string =
    date.getHours() < 10 ? `0${date.getHours()}` : `${date.getHours()}`
  const minute: string =
    date.getMinutes() < 10 ? `0${date.getMinutes()}` : `${date.getMinutes()}`
  const daysDifference: number = Math.floor(
    (new Date().getTime() - date.getTime()) / 1000 / 60 / 60 / 24
  )
  let backgroundColorClass: string

  if (daysDifference === 0) {
    backgroundColorClass = 'bg-red-200'
  } else if (daysDifference < 0) {
    backgroundColorClass = 'bg-blue-100'
  } else {
    backgroundColorClass = 'bg-neutral-200'
  }

  return (
    <div
      className={`flex flex-col justify-center items-center rounded-2xl p-2 px-8  md:font-semibold  md:p-4 md:px-8 text-lg md:text-xl  ${backgroundColorClass}`}
    >
      <div className="  flex items-center ">
        <FiCalendar className=" mr-2" />
        <DateParser
          daysDifference={daysDifference}
          day={day}
          month={month}
          year={year}
        />
      </div>
      <div className=" font-serif   flex items-center ">
        <FiClock className=" mr-2" /> {hour}:{minute}
      </div>
    </div>
  )
}

export default DateComponent
