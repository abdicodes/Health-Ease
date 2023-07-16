export enum EventTypes {
  DoctorVisit = 'doctorVisit',
  NurseVisit = 'nurseVisit',
  Admission = 'admission',
  Discharge = 'discharge',
  InPatientVisit = 'inPatientVisit',
  Lab = 'labTest',
  Scan = 'scan',
  Prescription = 'prescription',
}

interface Drug {
  name: string
  quantity: number
}

export interface BasicEvent {
  id: number
  type: EventTypes
  dateTime: Date
  comments?: string
}

export interface DoctorVisit extends BasicEvent {
  diagnosis: string
  doctorName: string
  details: string
}

export interface NurseVisit extends BasicEvent {
  diagnosis: string
  nurseName: string
  details: string
}

export interface Admission extends BasicEvent {
  diagnosis: string
  doctorName: string
  details: string
}

export interface Discharge extends BasicEvent {
  doctorName: string
  details: string
}

export interface InPatientVisit extends BasicEvent {
  diagnosis: string
  doctorName: string
  details: string
}

export interface LabTest extends BasicEvent {
  tests: string[]
  doctorName: string
  comments?: string
  technicianName?: string
  results: string[]
  pending: boolean
}

export interface Scan extends BasicEvent {
  scan: string
  doctorName: string
  comments?: string
  technicianName?: string
  results: string
  pending: boolean
}

export interface Prescription extends BasicEvent {
  drugs: Drug[]
  doctorName: string
  comments?: string
  pharmacist?: string
  active: boolean
  expirayDate: Date
}
