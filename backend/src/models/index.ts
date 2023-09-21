import Patient from './patient'
import Staff from './staff'
import { LabEvent, ScanEvent, PrescriptionEvent } from './tests_prescription'
import { Role, StaffRole } from './role'
import {
  OutpatientVisit,
  InpatientVisit,
  EmergencyVisit,
  NurseVisit,
  Admission,
  Discharge,
  Appointment,
} from './event'

Role.belongsToMany(Staff, { through: StaffRole, as: 'staff_list' })
Staff.belongsToMany(Role, { through: StaffRole, as: 'current_roles' })

OutpatientVisit.belongsTo(Staff, {
  foreignKey: 'staffId',
  as: 'outpatient_visit_staff',
})
InpatientVisit.belongsTo(Staff, {
  foreignKey: 'staffId',
  as: 'inpatient_visit_staff',
})
EmergencyVisit.belongsTo(Staff, {
  foreignKey: 'staffId',
  as: 'emergency_visit_staff',
})
NurseVisit.belongsTo(Staff, { foreignKey: 'staffId', as: 'nurse_visit_staff' })
Admission.belongsTo(Staff, { foreignKey: 'staffId', as: 'admission_staff' })
Discharge.belongsTo(Staff, { foreignKey: 'staffId', as: 'discharge_staff' })

Appointment.belongsTo(Staff, { foreignKey: 'staffId', as: 'appointment_staff' })

LabEvent.belongsTo(Staff, { foreignKey: 'orderedBy', as: 'lab_ordered_by' })
LabEvent.belongsTo(Staff, { foreignKey: 'processedBy', as: 'lab_processed_by' })

PrescriptionEvent.belongsTo(Staff, {
  foreignKey: 'orderedBy',
  as: 'prescription_ordered_by',
})
PrescriptionEvent.belongsTo(Staff, {
  foreignKey: 'processedBy',
  as: 'prescription_processed_by',
})

ScanEvent.belongsTo(Staff, { foreignKey: 'orderedBy', as: 'scan_ordered_by' })
ScanEvent.belongsTo(Staff, {
  foreignKey: 'processedBy',
  as: 'scan_processed_by',
})

OutpatientVisit.belongsTo(Patient, {
  foreignKey: 'patientId',
  as: 'outpatient_visit_patient',
})
InpatientVisit.belongsTo(Patient, {
  foreignKey: 'patientId',
  as: 'inpatient_visit_patient',
})
EmergencyVisit.belongsTo(Patient, {
  foreignKey: 'patientId',
  as: 'emergency_visit_patient',
})
NurseVisit.belongsTo(Patient, {
  foreignKey: 'patientId',
  as: 'nurse_visit_patient',
})
Admission.belongsTo(Patient, {
  foreignKey: 'patientId',
  as: 'admission_patient',
})
Discharge.belongsTo(Patient, {
  foreignKey: 'patientId',
  as: 'discharge_patient',
})

Appointment.belongsTo(Patient, {
  foreignKey: 'patientId',
  as: 'appointment_patient',
})
LabEvent.belongsTo(Patient, {
  foreignKey: 'patientId',
  as: 'lab_event_patient',
})
ScanEvent.belongsTo(Patient, {
  foreignKey: 'patientId',
  as: 'scan_event_patient',
})
PrescriptionEvent.belongsTo(Patient, {
  foreignKey: 'patientId',
  as: 'prescription_event_patient',
})

export {
  Patient,
  Staff,
  LabEvent,
  ScanEvent,
  Role,
  StaffRole,
  OutpatientVisit,
  InpatientVisit,
  EmergencyVisit,
  NurseVisit,
  Admission,
  Discharge,
  PrescriptionEvent,
  Appointment,
}
