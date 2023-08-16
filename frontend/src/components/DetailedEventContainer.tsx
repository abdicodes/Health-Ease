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
} from '../types'

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
  return (
    <div>
      {event.diagnosis && <p> Diagnosis: {event.diagnosis}</p>}

      <p>Visit summary : {event.details}</p>
      <p>Doctor's name: {event.doctorName}</p>
    </div>
  )
}

const NurseVisitComponent: React.FC<NurseVisitComponentProps> = ({ event }) => {
  return (
    <div>
      {event.diagnosis && <p> Diagnosis: {event.diagnosis}</p>}

      <p>Visit summary : {event.details}</p>

      <p>Nurse's name: {event.nurseName}</p>
    </div>
  )
}

const EmergencyVisitComponent: React.FC<EmergencyVisitComponentProps> = ({
  event,
}) => {
  return (
    <div>
      {event.diagnosis && <p> Diagnosis: {event.diagnosis}</p>}

      <p>Visit summary : {event.details}</p>

      <p>Nurse's name: {event.doctorName}</p>
    </div>
  )
}

const AdmissionComponent: React.FC<AdmissionComponentProps> = ({ event }) => {
  return (
    <div>
      {event.diagnosis && <p> Diagnosis: {event.diagnosis}</p>}

      <p>Admission summary : {event.details}</p>

      <p>Doctor's name: {event.doctorName}</p>
    </div>
  )
}

const InPatientVisitComponent: React.FC<InPatientVisitComponentProps> = ({
  event,
}) => {
  return (
    <div>
      {event.diagnosis && <p> Diagnosis: {event.diagnosis}</p>}

      <p>Ward Visit summary : {event.details}</p>

      <p>Doctor's name: {event.doctorName}</p>
    </div>
  )
}

const DischargeComponent: React.FC<DischargeComponentProps> = ({ event }) => {
  return (
    <div>
      <p>Discharge summary : {event.details}</p>
      <p>Doctor's name: {event.doctorName}</p>
    </div>
  )
}

const LabComponent: React.FC<LabComponentProps> = ({ event }) => {
  return (
    <div>
      <p>Tests requested:</p>
      <ul>
        {event.tests.map((test, i) => (
          <li key={i}>{test}</li>
        ))}
      </ul>
      <p> Requested by Dr: {event.doctorName}</p>
      {event.technicianName && <p> Done by : {event.technicianName}</p>}
      <p> Results: </p>
      <ul>
        {event.results.map((result, i) => (
          <li key={i}>{result}</li>
        ))}
      </ul>
    </div>
  )
}

const ScanComponent: React.FC<ScanComponentProps> = ({ event }) => {
  return (
    <div>
      <p>Tests requested: {event.scan}</p>

      <p> Requested by Dr: {event.doctorName}</p>
      {event.technicianName && <p> Done by : {event.technicianName}</p>}
      <p> Results: {event.results}</p>
    </div>
  )
}

const PrescriptionComponent: React.FC<PrescriptionComponentProps> = ({
  event,
}) => {
  return (
    <div>
      <p>prescriptions : </p>
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
    </div>
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
