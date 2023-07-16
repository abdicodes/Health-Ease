interface Event {
  id: number
  type: string
  dateTime: string
}

interface PastEventsProps {
  events: Event[]
}

const PastEvents: React.FC<PastEventsProps> = ({ events }) => {
  const handleRenewalRequest = (eventId: number) => {
    console.log('request renewal')
  }

  return (
    <div>
      <h2>Past Events</h2>
      {events.map((event) => (
        <div key={event.id}>
          <h3>{event.type}</h3>
          <p>Date/Time: {event.dateTime.toString()}</p>
          {event.type === 'prescription' && (
            <button onClick={() => handleRenewalRequest(event.id)}>
              Renewal Request
            </button>
          )}
        </div>
      ))}
    </div>
  )
}

export default PastEvents
