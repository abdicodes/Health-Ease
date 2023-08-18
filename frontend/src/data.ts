import { Event, EventTypes } from './types'

const data: Event[] = [
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
      {
        name: 'antihistamin',
        quantity: 60,
        dose: '10mg',
        instruction: 'after food',
      },
      {
        name: 'Paracetamol',
        quantity: 30,
        dose: '500mg',
        instruction: 'before food',
      },
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
  {
    id: 4,
    type: EventTypes.NurseVisit,
    dateTime: '2023-8-02',
    nurseName: 'Bianca',
    details: ' ',
  },
]

export default data
