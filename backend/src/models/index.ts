import Patient from './patient'
import Staff from './staff'
import { LabEvent, ScanEvent } from './tests'
import { Role, StaffRole } from './role'
import {
  OutpatientVisit,
  InpatientVisit,
  EmergencyVisit,
  NurseVisit,
  Admission,
  Discharge,
} from './event'

Role.belongsToMany(Staff, { through: StaffRole, as: 'current_roles' })
Staff.belongsToMany(Role, { through: StaffRole, as: 'staff_list' })

Staff.belongsTo(OutpatientVisit, { foreignKey: 'staffId', as: 'staff' })
Staff.belongsTo(InpatientVisit, { foreignKey: 'staffId', as: 'staff' })
Staff.belongsTo(EmergencyVisit, { foreignKey: 'staffId', as: 'staff' })
Staff.belongsTo(NurseVisit, { foreignKey: 'staffId', as: 'staff' })
Staff.belongsTo(Admission, { foreignKey: 'staffId', as: 'staff' })
Staff.belongsTo(Discharge, { foreignKey: 'staffId', as: 'staff' })
Staff.belongsTo(LabEvent, { foreignKey: 'orderedBy', as: 'ordered_by' })
Staff.belongsTo(LabEvent, { foreignKey: 'processedBy', as: 'processed_by' })
Staff.belongsTo(ScanEvent, { foreignKey: 'orderedBy', as: 'ordered_by' })
Staff.belongsTo(ScanEvent, { foreignKey: 'processedBy', as: 'processed_by' })

Patient.belongsTo(OutpatientVisit, { foreignKey: 'patientId', as: 'patient' })
Patient.belongsTo(InpatientVisit, { foreignKey: 'patientId', as: 'patient' })
Patient.belongsTo(EmergencyVisit, { foreignKey: 'patientId', as: 'patient' })
Patient.belongsTo(NurseVisit, { foreignKey: 'patientId', as: 'patient' })
Patient.belongsTo(Admission, { foreignKey: 'patientId', as: 'patient' })
Patient.belongsTo(Discharge, { foreignKey: 'patientId', as: 'patient' })
Patient.belongsTo(LabEvent, { foreignKey: 'patientId', as: 'patient' })
Patient.belongsTo(Discharge, { foreignKey: 'patientId', as: 'patient' })

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
}
