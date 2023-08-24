import { useMatch, Link } from 'react-router-dom'
import data from '../../../data'
import { Event } from '../../../types'
import DetailedEventContainer from './DetailedEventContainer'

const DetailedEvent = () => {
  const match = useMatch('/:id')
  if (!match) return null

  const { id } = match.params

  if (!id) return null

  const event = data.find((element: Event) => element.id === Number(id))
  if (!event) return null

  return (
    <main className="bg-blue-50 min-h-screen flex flex-col items-center justify-center">
      <DetailedEventContainer event={event} />
      <Link to="/">
        <div className="bg-blue-500 text-white p-2 px-4 mt-4 rounded-2xl shadow-md hover:bg-blue-600 cursor-pointer">
          <h2 className="font-medium">Go Back</h2>
        </div>
      </Link>
    </main>
  )
}

export default DetailedEvent
