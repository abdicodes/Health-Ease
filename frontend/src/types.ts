export enum EventTypes {
  DoctorVisit = 'Doctor Visit',
  NurseVisit = 'Nurse Visit',
  Admission = 'Admission',
  EmergencyVisit = 'Emergency Visit',
  Discharge = 'discharge',
  InPatientVisit = 'In-patient Visit',
  Lab = 'Laboratory test',
  Scan = 'Medical Imaging',
  Prescription = 'Prescription',
}

interface Drug {
  name: string
  quantity: number
  dose: string
  instruction: string
}

interface Test {
  name: string
  status: boolean
  result?: string
}

export interface BasicEvent {
  id: number
  type: EventTypes
  dateTime: string
  comments?: string
}

export interface DoctorVisit extends BasicEvent {
  type: EventTypes.DoctorVisit
  diagnosis?: string
  doctorName: string
  details: string
}

export interface NurseVisit extends BasicEvent {
  type: EventTypes.NurseVisit
  diagnosis?: string
  nurseName: string
  details: string
}

export interface Admission extends BasicEvent {
  type: EventTypes.Admission
  diagnosis?: string
  doctorName: string
  details: string
}

export interface Discharge extends BasicEvent {
  type: EventTypes.Discharge
  doctorName: string
  diagnosis?: string
  details: string
}

export interface InPatientVisit extends BasicEvent {
  type: EventTypes.InPatientVisit
  diagnosis?: string
  doctorName: string
  details: string
}

export interface EmergencyVisit extends BasicEvent {
  type: EventTypes.EmergencyVisit
  diagnosis?: string
  doctorName: string
  details: string
}

export interface Lab extends BasicEvent {
  type: EventTypes.Lab
  tests: Test[]
  doctorName: string
  technicianName?: string
}

export interface Scan extends BasicEvent {
  type: EventTypes.Scan
  tests: string[]
  doctorName: string
  technicianName?: string
  results: string[]
  pending: boolean
}

export interface Prescription extends BasicEvent {
  type: EventTypes.Prescription
  drugs: Drug[]
  doctorName: string
  pharmacist?: string
  active: boolean
  expirayDate: string
}

export type Event =
  | DoctorVisit
  | NurseVisit
  | Admission
  | EmergencyVisit
  | InPatientVisit
  | Discharge
  | Lab
  | Scan
  | Prescription
