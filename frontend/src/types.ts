export enum EventTypes {
  DoctorVisit = 'Doctor Visit',
  NurseVisit = 'Nurse Visit',
  Admission = 'Admission',
  EmergencyVisit = 'Emergency Visit',
  Discharge = 'Discharge',
  InPatientVisit = 'In-Patient Visit',
  Lab = 'Laboratory tests',
  Scan = 'Medical Imaging',
  Prescription = 'Prescriptions',
}

interface Drug {
  name: string
  quantity: number
  dose: string
  instruction: string
}

//isNormal should return true
export interface Test {
  name: string
  result?: string
}

interface Image {
  name: string
  status: boolean
  result?: string
  isNormal?: boolean
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
  image: Image
  doctorName: string
  technicianName?: string
}

export interface Prescription extends BasicEvent {
  type: EventTypes.Prescription
  drugs: Drug[]
  doctorName: string
  pharmacist?: string
  active: boolean
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

export interface PatientData {
  id: number
  name: string
  email: string
  phoneNumber: string | null
  dateOfBirth: string
  address?: string | null
  gender: string
  bloodType?: string | null
  isAdmitted: boolean
}

export interface PatientProps {
  name: string
  username: string
  password: string
  email: string
  phoneNumber?: string
  dateOfBirth: string
  address?: string
  gender: string
  bloodType?: string
}
export interface PatientCardProps {
  patient: PatientData
  onClose: () => void
}

export interface Appointment {
  id: number
  doctorName: string
  startDate: string
  endDate: string
}

export interface BasicFormValues {
  diagnosis: string
  details: string
  comments?: string
  patientId: number
}

export interface OutpatientFormValues extends BasicFormValues {
  type: EventTypes.DoctorVisit
}

export interface InpatientFormValues extends BasicFormValues {
  type: EventTypes.InPatientVisit
}

export interface DischargeFormValues extends BasicFormValues {
  type: EventTypes.Discharge
}

export interface EmergencyFormValues extends BasicFormValues {
  type: EventTypes.EmergencyVisit
}

export interface NurseFormValues extends BasicFormValues {
  type: EventTypes.NurseVisit
}

export interface AdmissionValues extends BasicFormValues {
  type: EventTypes.Admission
}

export interface LabFormValues {
  tests: Test[]
  comments?: string
}

export interface ScanFormValues {
  tests: Image[]
  comments?: string
}

export interface PrescriptionFormValues {
  tests: Drug[]
  comments?: string
}

export type EntryFormValues =
  | OutpatientFormValues
  | InpatientFormValues
  | DischargeFormValues
  | AdmissionValues
  | NurseFormValues
  | EmergencyFormValues
  | LabFormValues
  | ScanFormValues
  | PrescriptionFormValues
