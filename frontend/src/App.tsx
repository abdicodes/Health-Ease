import React from 'react'
import PastEvents from './components/PastEvents'
function App() {
  interface Event {
    id: number
    type: string
    dateTime: string
  }

  const events: Event[] = [
    {
      id: 1,
      type: 'test',
      dateTime: '2012',
    },
  ]
  return (
    <div>
      <PastEvents events={events} />
    </div>
  )
}

export default App
