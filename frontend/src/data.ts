import { Event, EventTypes } from './types'

const data: Event[] = [
  {
    id: 1,
    type: EventTypes.DoctorVisit,
    dateTime: '2023-08-23T20:26:06.679Z',
    diagnosis: 'mild allergy',
    doctorName: 'Avicenna',
    details: `Patient complained about eye itching, running nose, 
      possible symptops of pollen allergy. Antihistamen is prescribed. 
      Patient also complained about a headache, symptops started 3 days ago. 
      Further lab tests are needed and meantime painkillers are prescribed
      `,
    comments:
      'do not eat anything before coming to clinic do not eat anything before coming to clinic do not eat anything before coming to clinic',
  },
  {
    id: 2,
    type: EventTypes.Prescription,
    dateTime: new Date().toJSON(),
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
        instruction: '1  tablet 2 times a day before food',
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
    dateTime: '2023-08-22T14:26:06.679Z',
    tests: [
      { name: 'CRP', status: true, result: 'negative' },
      { name: 'blood count', status: false, result: '100 mg/l' },
    ],
    doctorName: 'Avicenna',
    comments: 'hello',
  },
  {
    id: 4,
    type: EventTypes.NurseVisit,
    dateTime: '2022-07-11T00:26:06.679Z',
    nurseName: 'Bianca',
    details:
      ' Patient complained about shortness of breathing. clinical assessment was conducted and patient was referred to the respiratory clinic ',
  },
  {
    id: 5,
    type: EventTypes.Scan,
    dateTime: '2023-08-22T14:26:06.679Z',
    image: {
      name: 'spine MRI',
      status: true,
      result: `L4-L5: Image 21-mild to moderate decreased disc signal and disc height with mild endplate spondylitic change, bulge and a left paracentral disc herniation extruded superiorly, 7 mm AP by 16 mm mL by 14 mm CC, with the left L5 nerve root sleeve impingement in the lateral recess, with severe right more than left facet arthrosis. Narrowing of the thecal sac, 8 mm, with mild left lateral recess stenosis, patent right lateral recess and mild to moderate left and mild right foraminal stenosis. 
      L5-S1: Image 32-mild decreased disc signal with mild/moderate decreased disc height and endplate spondylitic change, bulge and left paracentral disc herniation, 3 mm AP by 8mm mL, with left S1 nerve root sleeve impingement in the lateral recess, with moderate facet arthrosis. Patent canal and right lateral recess and right foramen with minor left foraminal stenosis. No paraspinal masses or collections.`,
    },

    doctorName: 'Avicenna',
    comments: 'hello',
  },
]

export default data
