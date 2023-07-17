import PastEvents from './components/Events'
import { Event, EventTypes } from './types'

function App() {
  const events: Event[] = [
    {
      id: 1,
      type: EventTypes.DoctorVisit,
      dateTime: '2023-05-02',
      diagnosis: 'mild allergy',
      doctorName: 'Avicenna',
      details: `Patient complained about eye itching, running nose, 
      possible symptops of pollen allergy. Antihistamen is prescribed. 
      Patient also complained about a headache, symptops started 3 days ago. 
      Further lab tests are needed and meantime painkillers are prescribed
      `,
    },
    {
      id: 2,
      type: EventTypes.Prescription,
      dateTime: '2023-05-02',
      drugs: [
        { name: 'antihistamin', quantity: 60, dose: '10mg' },
        { name: 'Paracetamol', quantity: 30, dose: '500mg' },
      ],
      doctorName: 'Avicenna',
      comments: '1 10mg tablet x2 times a day ',
      pharmacist: 'Andre Onana',
      active: false,
      expirayDate: '2024-05-22',
    },
    {
      id: 3,
      type: EventTypes.Lab,
      dateTime: '2023-05-02',
      tests: ['CRP', 'CBC'],
      doctorName: 'Avicenna',
      technicianName: 'Sophia',
      results: ['CRP : negative', 'CBC : negative'],
      pending: false,
    },
  ]
  return (
    <div>
      <PastEvents events={events} />
    </div>
  )
}

export default App
