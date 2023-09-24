import React from 'react'
import { Event, EventTypes } from '../../types'
import AppointmentComponent from './AppointmentComponent'
import DoctorVisitComponent from './DoctorVisitComponent'
import AdmissionComponent from './AdmissionComponent'
import DischargeComponent from './DischargeComponent'
import EmergencyVisitComponent from './EmergencyVisitComponent'
import InPatientVisitComponent from './InPatientVisitComponent'
import LabComponent from './LabComponent'
import NurseVisitComponent from './NurseVisitComponent'
import PrescriptionComponent from './PrescriptionComponent'
import ScanComponent from './ScanComponent'
interface EventProps {
  event: Event | never
}

const assertNever = (value: never): never => {
  throw new Error(`Unhandled error ${JSON.stringify(value)}`)
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

    case EventTypes.Appointment:
      return <AppointmentComponent event={event} />

    default:
      return assertNever(event)
  }
}

export default DetailedEventContainer
