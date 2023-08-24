import React from 'react'
import {
  Event,
  EventTypes,
  DoctorVisit,
  NurseVisit,
  Admission,
  InPatientVisit,
  EmergencyVisit,
  Discharge,
  Lab,
  Scan,
  Prescription,
} from '../../../types'
import doctor from '/doctor.png'
import nurse from '/nurse.png'
import emergency from '/emergency.png'
import hospital from '/hospital.png'
import hospitalBed from '/hospital-bed.png'
import lab from '/lab.png'
import radiography from '/radiography.png'
import prescription from '/prescription.png'
import discharge from '/discharge.png'

interface EventProps {
  event: Event | never
}

interface DoctorVisitComponentProps {
  event: DoctorVisit
}

interface AdmissionComponentProps {
  event: Admission
}

interface InPatientVisitComponentProps {
  event: InPatientVisit
}

interface DischargeComponentProps {
  event: Discharge
}

interface EmergencyVisitComponentProps {
  event: EmergencyVisit
}

interface NurseVisitComponentProps {
  event: NurseVisit
}

interface LabComponentProps {
  event: Lab
}

interface ScanComponentProps {
  event: Scan
}

interface PrescriptionComponentProps {
  event: Prescription
}
const assertNever = (value: never): never => {
  throw new Error(`Unhandled error ${JSON.stringify(value)}`)
}

const DoctorVisitComponent: React.FC<DoctorVisitComponentProps> = ({
  event,
}) => {
  const { diagnosis, dateTime, details, doctorName } = event
  return (
    <main className=" ">
      <section className=" ml-10 pt-10 ">
        <img src={doctor} className=" w-20 mx-auto text-blue-800" />
        {diagnosis && <p> Diagnosis: {diagnosis}</p>}
        <h3> Date: {dateTime}</h3>
        <h3>Visit summary : {details}</h3>
        <h3>Doctor's name: {doctorName}</h3>
      </section>
    </main>
  )
}

const NurseVisitComponent: React.FC<NurseVisitComponentProps> = ({ event }) => {
  const { diagnosis, dateTime, details, nurseName } = event
  return (
    <main className=" ">
      <section className=" ml-10 pt-10 ">
        <img src={nurse} className=" w-20 mx-auto text-blue-800" />
        {diagnosis && <p> Diagnosis: {diagnosis}</p>}
        <h3> Date: {dateTime}</h3>
        <h3>Visit summary : {details}</h3>
        <h3>Nurse's name: {nurseName}</h3>
      </section>
    </main>
  )
}

const EmergencyVisitComponent: React.FC<EmergencyVisitComponentProps> = ({
  event,
}) => {
  const { diagnosis, dateTime, details, doctorName } = event
  return (
    <main className=" ">
      <section className=" ml-10 pt-10 ">
        <img src={emergency} className=" w-20 mx-auto text-blue-800" />
        {diagnosis && <p> Diagnosis: {diagnosis}</p>}
        <h3> Date: {dateTime}</h3>
        <h3>Visit summary : {details}</h3>
        <h3>Doctor's name: {doctorName}</h3>
      </section>
    </main>
  )
}

const AdmissionComponent: React.FC<AdmissionComponentProps> = ({ event }) => {
  const { diagnosis, dateTime, details, doctorName } = event
  return (
    <main className=" ">
      <section className=" ml-10 pt-10 ">
        <img src={hospital} className=" w-20 mx-auto text-blue-800" />
        {diagnosis && <p> Diagnosis: {diagnosis}</p>}
        <h3> Date: {dateTime}</h3>
        <h3>Admission summary : {details}</h3>
        <h3>Doctor's name: {doctorName}</h3>
      </section>
    </main>
  )
}

const InPatientVisitComponent: React.FC<InPatientVisitComponentProps> = ({
  event,
}) => {
  const { diagnosis, dateTime, details, doctorName } = event
  return (
    <main className=" ">
      <section className=" ml-10 pt-10 ">
        <img src={hospitalBed} className=" w-20 mx-auto text-blue-800" />
        {diagnosis && <p> Diagnosis: {diagnosis}</p>}
        <h3> Date: {dateTime}</h3>
        <h3>Ward visit summary : {details}</h3>
        <h3>Doctor's name: {doctorName}</h3>
      </section>
    </main>
  )
}

const DischargeComponent: React.FC<DischargeComponentProps> = ({ event }) => {
  const { diagnosis, dateTime, details, doctorName } = event
  return (
    <main className=" ">
      <section className=" ml-10 pt-10 ">
        <img src={discharge} className=" w-20 mx-auto text-blue-800" />
        {diagnosis && <p> Diagnosis: {diagnosis}</p>}
        <h3> Date: {dateTime}</h3>
        <h3>discharge summary : {details}</h3>
        <h3>Doctor's name: {doctorName}</h3>
      </section>
    </main>
  )
}

const LabComponent: React.FC<LabComponentProps> = ({ event }) => {
  const { doctorName, technicianName, tests, results, dateTime } = event
  return (
    <main>
      <img src={lab} />
      <h3> Date: {dateTime}</h3>
      <h3>Tests requested:</h3>
      <ul>
        {tests.map((test, i) => (
          <li key={i}>{test}</li>
        ))}
      </ul>
      <h3> Requested by Dr: {doctorName}</h3>
      {technicianName && <p> Done by : {technicianName}</p>}
      <h3> Results: </h3>
      <ul>
        {results.map((result, i) => (
          <li key={i}>{result}</li>
        ))}
      </ul>
    </main>
  )
}

const ScanComponent: React.FC<ScanComponentProps> = ({ event }) => {
  const { doctorName, technicianName, tests, results, dateTime } = event
  return (
    <main>
      <img src={radiography} />
      <h3> Date: {dateTime}</h3>
      <h3>Tests requested:</h3>
      <ul>
        {tests.map((test, i) => (
          <li key={i}>{test}</li>
        ))}
      </ul>
      <h3> Requested by Dr: {doctorName}</h3>
      {technicianName && <p> Done by : {technicianName}</p>}
      <h3> Results: </h3>
      <ul>
        {results.map((result, i) => (
          <li key={i}>{result}</li>
        ))}
      </ul>
    </main>
  )
}

const PrescriptionComponent: React.FC<PrescriptionComponentProps> = ({
  event,
}) => {
  return (
    <main>
      <img src={prescription} />
      <h3>prescriptions : </h3>
      <ul>
        {event.drugs.map((drug, i) => (
          <li key={i}>
            drug name: {drug.name} quantity: {drug.quantity} dose: {drug.dose}
          </li>
        ))}
      </ul>
      <p> Prescribed by Dr: {event.doctorName}</p>
      {event.pharmacist && <p> Done by : {event.pharmacist}</p>}
      <p> Prescription Expiration date: {event.expirayDate}</p>
    </main>
  )
}

const DetailedEventContainer: React.FC<EventProps> = ({ event }) => {
  switch (event.type) {
    case EventTypes.DoctorVisit:
      return <DoctorVisitComponent event={event} />

    case EventTypes.NurseVisit:
      return <NurseVisitComponent event={event} />

    case EventTypes.Admission:
      return <AdmissionComponent event={event} />

    case EventTypes.InPatientVisit:
      return <InPatientVisitComponent event={event} />

    case EventTypes.Discharge:
      return <DischargeComponent event={event} />

    case EventTypes.Lab:
      return <LabComponent event={event} />

    case EventTypes.Scan:
      return <ScanComponent event={event} />

    case EventTypes.Prescription:
      return <PrescriptionComponent event={event} />

    case EventTypes.EmergencyVisit:
      return <EmergencyVisitComponent event={event} />

    default:
      return assertNever(event)
  }
}

export default DetailedEventContainer
