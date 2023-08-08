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

interface DoctorVisitComponentProps {
  event: Event
}

const assertNever = (value: never): never => {
  throw new Error(`Unhandled error ${JSON.stringify(value)}`)
}

const containerStyle: React.CSSProperties = {
  border: '1px solid #ccc',
  borderRadius: '4px',
  padding: '10px',
  margin: '25px auto',
  maxWidth: '400px',
}

const DoctorVisitComponent: React.FC<DoctorVisitComponentProps> = ({
  event,
}) => {
  const doctorVisitEvent = event as DoctorVisit
  return (
    <div style={containerStyle}>
      {doctorVisitEvent.diagnosis && (
        <p> Diagnosis: {doctorVisitEvent.diagnosis}</p>
      )}

      <p>Visit summary : {doctorVisitEvent.details}</p>
      <p>Doctor's name: {doctorVisitEvent.doctorName}</p>
    </div>
  )
}

const NurseVisitComponent: React.FC<DoctorVisitComponentProps> = ({
  event,
}) => {
  const nurseVisitEvent = event as NurseVisit
  return (
    <div style={containerStyle}>
      {nurseVisitEvent.diagnosis && (
        <p> Diagnosis: {nurseVisitEvent.diagnosis}</p>
      )}

      <p>Visit summary : {nurseVisitEvent.details}</p>

      <p>Nurse's name: {nurseVisitEvent.nurseName}</p>
    </div>
  )
}

const AdmissionComponent: React.FC<DoctorVisitComponentProps> = ({ event }) => {
  const admissionVisitEvent = event as Admission
  return (
    <div style={containerStyle}>
      {admissionVisitEvent.diagnosis && (
        <p> Diagnosis: {admissionVisitEvent.diagnosis}</p>
      )}

      <p>Admission summary : {admissionVisitEvent.details}</p>

      <p>Doctor's name: {admissionVisitEvent.doctorName}</p>
    </div>
  )
}

const InPatientVisitComponent: React.FC<DoctorVisitComponentProps> = ({
  event,
}) => {
  const inPatientVisitEvent = event as InPatientVisit
  return (
    <div style={containerStyle}>
      {inPatientVisitEvent.diagnosis && (
        <p> Diagnosis: {inPatientVisitEvent.diagnosis}</p>
      )}

      <p>Ward Visit summary : {inPatientVisitEvent.details}</p>

      <p>Doctor's name: {inPatientVisitEvent.doctorName}</p>
    </div>
  )
}

const DischargeComponent: React.FC<DoctorVisitComponentProps> = ({ event }) => {
  const dischargeEvent = event as Discharge
  return (
    <div style={containerStyle}>
      <p>Discharge summary : {dischargeEvent.details}</p>
      <p>Doctor's name: {dischargeEvent.doctorName}</p>
    </div>
  )
}

const LabComponent: React.FC<DoctorVisitComponentProps> = ({ event }) => {
  const labEvent = event as Lab
  return (
    <div style={containerStyle}>
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

const ScanComponent: React.FC<DoctorVisitComponentProps> = ({ event }) => {
  const scanEvent = event as Scan
  return (
    <div style={containerStyle}>
      <p>Tests requested: {scanEvent.scan}</p>

      <p> Requested by Dr: {scanEvent.doctorName}</p>
      {scanEvent.technicianName && <p> Done by : {scanEvent.technicianName}</p>}
      <p> Results: {scanEvent.results}</p>
    </div>
  )
}

const PrescriptionComponent: React.FC<DoctorVisitComponentProps> = ({
  event,
}) => {
  const prescriptionEvent = event as Prescription
  return (
    <div style={containerStyle}>
      <p>prescriptions : </p>
      <ul>
        {prescriptionEvent.drugs.map((drug, i) => (
          <li key={i}>
            drug name: {drug.name} quantity: {drug.quantity} dose: {drug.dose}
          </li>
        ))}
      </ul>
      <p> Prescribed by Dr: {prescriptionEvent.doctorName}</p>
      {prescriptionEvent.pharmacist && (
        <p> Done by : {prescriptionEvent.pharmacist}</p>
      )}
      <p> Prescription Expiration date: {prescriptionEvent.expirayDate}</p>
    </div>
  )
}

const DetailedEventContainer: React.FC<DoctorVisitComponentProps> = ({
  event,
}) => {
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

export default DetailedEventContainer
