import { QueryInterface } from 'sequelize'
enum GenderEnum {
  Male = 'male',
  Female = 'female',
}

const patients = [
  {
    name: 'mike jones',
    email: 'mike@hotmail.com',
    username: 'mike',
    password: 'mike123',
    phone_number: '0449208411',
    date_of_birth: '11-09-2000',
    gender: GenderEnum.Male,
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    name: 'sandy jones',
    email: 'sandy@hotmail.com',
    username: 'sandy',
    password: 'sandy123',
    phone_number: '0449208412',
    date_of_birth: '11-10-2000',
    gender: GenderEnum.Female,
    created_at: new Date(),
    updated_at: new Date(),
  },
]

const staff = [
  {
    name: 'patel rajesh',
    email: 'raj@hotmail.com',
    username: 'patel',
    password: 'patel123',
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    name: 'kumar madras ',
    email: 'kumar@hotmail.com',
    username: 'kumar',
    password: 'kumar123',
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    name: 'joey ',
    email: 'joey@hotmail.com',
    username: 'joey',
    password: 'joey123',
    created_at: new Date(),
    updated_at: new Date(),
  },

  {
    name: 'joyce ',
    email: 'joyce@hotmail.com',
    username: 'joyce',
    password: 'joyce123',
    created_at: new Date(),
    updated_at: new Date(),
  },
]

const roles = [
  {
    id: 1,
    name: 'Doctor',
  },
  { id: 2, name: 'Nurse' },
  { id: 3, name: 'Lab Technician ' },
  { id: 4, name: 'Scan Technician' },
  { id: 5, name: 'Pharmacist' },
  { id: 6, name: 'Receptionist' },
]

const staff_role = [
  {
    staff_id: 1,
    role_id: 1,
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    staff_id: 2,
    role_id: 2,
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    staff_id: 3,
    role_id: 3,
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    staff_id: 4,
    role_id: 4,
    created_at: new Date(),
    updated_at: new Date(),
  },
]

const outpatient_visit = [
  {
    patient_id: 1,
    diagnosis: 'mild allergy',
    staff_id: 2,
    details: `Patient complained about eye itching, running nose,
        possible symptops of pollen allergy. Antihistamen is prescribed.
        Patient also complained about a headache, symptops started 3 days ago.
        Further lab tests are needed and meantime painkillers are prescribed
        `,
    comments: 'He coughts a lot',
    created_at: new Date(),
    updated_at: new Date(),
    type: 'Doctor Visit',
  },
  {
    patient_id: 2,
    diagnosis: 'strong allergy',
    staff_id: 3,
    details: `Patient complained about eye itching`,
    comments: 'He went coughing alot ',
    type: 'Doctor Visit',
    created_at: new Date(),
    updated_at: new Date(),
  },
]

const inpatient_visit = [
  {
    patient_id: 2,
    diagnosis: 'mild allergy',
    staff_id: 1,
    type: 'In-Patient Visit',
    details: `Patient complained about eye itching, running nose,
          possible symptops of pollen allergy. Antihistamen is prescribed.
          Patient also complained about a headache, symptops started 3 days ago.
          Further lab tests are needed and meantime painkillers are prescribed
          `,
    comments: 'She panics a lot',
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    patient_id: 1,
    diagnosis: 'strong allergy',
    type: 'In-Patient Visit',
    staff_id: 1,
    details: `Patient complained about eye itching`,
    comments: 'He is nervous alot ',
    created_at: new Date(),
    updated_at: new Date(),
  },
]

const lab_visits = [
  {
    patient_id: 1,
    ordered_by: 2,
    processed_by: 4,
    comments: 'He suffers from phobia related to insersion of needles',
    created_at: new Date(),
    updated_at: new Date(),
    type: 'Laboratory tests',
  },
]
module.exports = {
  up: async ({ context: queryInterface }: { context: QueryInterface }) => {
    // Create the patients table
    await queryInterface.bulkInsert('patients', patients)
    await queryInterface.bulkInsert('staffs', staff)
    await queryInterface.bulkInsert('roles', roles)
    await queryInterface.bulkInsert('staff_roles', staff_role)
    await queryInterface.bulkInsert('outpatient_visits', outpatient_visit)
    await queryInterface.bulkInsert('inpatient_visits', inpatient_visit)
    await queryInterface.bulkInsert('lab_events', lab_visits)

    return queryInterface
  },

  // rollback action, here we drop patients table
  down: async ({ context: queryInterface }: { context: QueryInterface }) => {
    await queryInterface.bulkDelete('lab_events', {})
    await queryInterface.bulkDelete('inpatient_visits', {})
    await queryInterface.bulkDelete('outpatient_visits', {})
    await queryInterface.bulkDelete('staff_roles', {})
    await queryInterface.bulkDelete('roles', {})
    await queryInterface.bulkDelete('staffs', {})
    await queryInterface.bulkDelete('patients', {})
  },
}
