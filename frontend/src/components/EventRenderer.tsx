import React from 'react'
import {
  Event,
  EventTypes,
  DoctorVisit,
  NurseVisit,
  Admission,
  InPatientVisit,
  Discharge,
  Lab,
  Scan,
  Prescription,
} from '../types'

interface EventRendererProps {
  event: Event
}

const assertNever = (value: never): never => {
  throw new Error(`Unhandled error ${JSON.stringify(value)}`)
}

const DoctorVisitComponent: React.FC<EventRendererProps> = ({ event }) => {
  const doctorVisitEvent = event as DoctorVisit
  return (
    <div>
      {doctorVisitEvent.diagnosis && (
        <p> Diagnosis: {doctorVisitEvent.diagnosis}</p>
      )}

      <p>Visit summary : {doctorVisitEvent.details}</p>
      <p>Doctor's name: {doctorVisitEvent.doctorName}</p>
    </div>
  )
}

const NurseVisitComponent: React.FC<EventRendererProps> = ({ event }) => {
  const nurseVisitEvent = event as NurseVisit
  return (
    <div>
      {nurseVisitEvent.diagnosis && (
        <p> Diagnosis: {nurseVisitEvent.diagnosis}</p>
      )}

      <p>Visit summary : {nurseVisitEvent.details}</p>

      <p>Nurse's name: {nurseVisitEvent.nurseName}</p>
    </div>
  )
}

const AdmissionComponent: React.FC<EventRendererProps> = ({ event }) => {
  const admissionVisitEvent = event as Admission
  return (
    <div>
      {admissionVisitEvent.diagnosis && (
        <p> Diagnosis: {admissionVisitEvent.diagnosis}</p>
      )}

      <p>Admission summary : {admissionVisitEvent.details}</p>

      <p>Doctor's name: {admissionVisitEvent.doctorName}</p>
    </div>
  )
}

const InPatientVisitComponent: React.FC<EventRendererProps> = ({ event }) => {
  const inPatientVisitEvent = event as InPatientVisit
  return (
    <div>
      {inPatientVisitEvent.diagnosis && (
        <p> Diagnosis: {inPatientVisitEvent.diagnosis}</p>
      )}

      <p>Ward Visit summary : {inPatientVisitEvent.details}</p>

      <p>Doctor's name: {inPatientVisitEvent.doctorName}</p>
    </div>
  )
}

const DischargeComponent: React.FC<EventRendererProps> = ({ event }) => {
  const dischargeEvent = event as Discharge
  return (
    <div>
      <p>Discharge summary : {dischargeEvent.details}</p>
      <p>Doctor's name: {dischargeEvent.doctorName}</p>
    </div>
  )
}

const LabComponent: React.FC<EventRendererProps> = ({ event }) => {
  const labEvent = event as Lab
  return (
    <div>
      <p>Tests requested:</p>
      <ul>
        {labEvent.tests.map((test, i) => (
          <li key={i}>{test}</li>
        ))}
      </ul>
      <p> Requested by Dr: {labEvent.doctorName}</p>
      {labEvent.technicianName && <p> Done by : {labEvent.technicianName}</p>}
      <p> Results: </p>
      <ul>
        {labEvent.results.map((result, i) => (
          <li key={i}>{result}</li>
        ))}
      </ul>
    </div>
  )
}

const ScanComponent: React.FC<EventRendererProps> = ({ event }) => {
  const scanEvent = event as Scan
  return (
    <div>
      <p>Tests requested: {scanEvent.scan}</p>

      <p> Requested by Dr: {scanEvent.doctorName}</p>
      {scanEvent.technicianName && <p> Done by : {scanEvent.technicianName}</p>}
      <p> Results: {scanEvent.results}</p>
    </div>
  )
}

const PrescriptionComponent: React.FC<EventRendererProps> = ({ event }) => {
  const prescriptionEvent = event as Prescription
  return (
    <div>
      <p>prescriptios : </p>
      <ul>
        {prescriptionEvent.drugs.map((drug, i) => (
          <li key={i}>
            drug name: {drug.name} quantity: {drug.quantity} dose: {drug.dose}
          </li>
        ))}
      </ul>
      <p> Requested by Dr: {prescriptionEvent.doctorName}</p>
      {prescriptionEvent.pharmacist && (
        <p> Done by : {prescriptionEvent.pharmacist}</p>
      )}
      <p> Prescription Exiration date: {prescriptionEvent.expirayDate}</p>
    </div>
  )
}

const EventRenderer: React.FC<EventRendererProps> = ({ event }) => {
  switch (event.type) {
    case EventTypes.DoctorVisit:
      const doctorVisitEvent = event as DoctorVisit

      return <DoctorVisitComponent event={doctorVisitEvent} />

    case EventTypes.NurseVisit:
      const nurseVisitEvent = event as NurseVisit

      return <NurseVisitComponent event={nurseVisitEvent} />

    case EventTypes.Admission:
      const admissionEvent = event as Admission

      return <AdmissionComponent event={admissionEvent} />

    case EventTypes.InPatientVisit:
      const inPatientVisitEvent = event as InPatientVisit

      return <InPatientVisitComponent event={inPatientVisitEvent} />

    case EventTypes.Discharge:
      const dischargeEvent = event as Discharge

      return <DischargeComponent event={dischargeEvent} />

    case EventTypes.Lab:
      const labEvent = event as Lab

      return <LabComponent event={labEvent} />

    case EventTypes.Scan:
      const scanEvent = event as Scan

      return <ScanComponent event={scanEvent} />

    case EventTypes.Prescription:
      const prescriptionEvent = event as Prescription

      return <PrescriptionComponent event={prescriptionEvent} />

    default:
      return assertNever(event)
  }
}

export default EventRenderer
