import { Model, DataTypes } from 'sequelize'
import { Staff } from './index'

import { sequelize } from '../utils/db'

class OutpatientVisit extends Model {
  id!: number
  type!: string
  patientId!: number
  diagnosis?: string
  staffId!: string
  details?: string
  comments?: string
  updatedAt!: string
  outpatient_visit_staff?: Staff
}

OutpatientVisit.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'Doctor Visit',
    },
    patientId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: 'patients', key: 'id' },
    },
    diagnosis: {
      type: DataTypes.STRING,
    },
    staffId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: 'staffs', key: 'id' },
    },
    details: {
      type: DataTypes.STRING,
    },
    comments: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    underscored: true,
    modelName: 'outpatientVisit',
  }
)

class NurseVisit extends Model {
  id!: number
  type!: string
  patientId!: number
  diagnosis?: string
  staffId!: string
  details?: string
  comments?: string
  updatedAt!: string
  nurse_visit_staff?: Staff
}

NurseVisit.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'Nurse Visit',
    },
    patientId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: 'patients', key: 'id' },
    },
    diagnosis: {
      type: DataTypes.STRING,
    },
    staffId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: 'staffs', key: 'id' },
    },
    details: {
      type: DataTypes.STRING,
    },
    comments: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    underscored: true,
    modelName: 'nurseVisit',
  }
)

class InpatientVisit extends Model {
  id!: number
  type!: string
  patientId!: number
  diagnosis?: string
  staffId!: string
  details?: string
  comments?: string
  updatedAt!: string
  inpatient_visit_staff?: Staff
}

InpatientVisit.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'In-Patient Visit',
    },
    patientId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: 'patients', key: 'id' },
    },
    diagnosis: {
      type: DataTypes.STRING,
    },
    staffId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: 'staffs', key: 'id' },
    },
    details: {
      type: DataTypes.STRING,
    },
    comments: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    underscored: true,
    modelName: 'inpatientVisit',
  }
)

class EmergencyVisit extends Model {
  id!: number
  type!: string
  patientId!: number
  diagnosis?: string
  staffId!: string
  details?: string
  comments?: string
  updatedAt!: string
  emergency_visit_staff?: Staff
}

EmergencyVisit.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'Emergency Visit',
    },
    patientId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: 'patients', key: 'id' },
    },
    diagnosis: {
      type: DataTypes.STRING,
    },
    staffId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: 'staffs', key: 'id' },
    },
    details: {
      type: DataTypes.STRING,
    },
    comments: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    underscored: true,
    modelName: 'emergencyVisit',
  }
)

class Admission extends Model {
  id!: number
  type!: string
  patientId!: number
  diagnosis?: string
  staffId!: string
  details?: string
  comments?: string
  updatedAt!: string
  admission_staff?: Staff
}

Admission.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'Admission',
    },
    patientId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: 'patients', key: 'id' },
    },
    diagnosis: {
      type: DataTypes.STRING,
    },
    staffId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: 'staffs', key: 'id' },
    },
    details: {
      type: DataTypes.STRING,
    },
    comments: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    underscored: true,
    modelName: 'admission',
  }
)

class Discharge extends Model {
  id!: number
  type!: string
  patientId!: number
  diagnosis?: string
  staffId!: string
  details?: string
  comments?: string
  updatedAt!: string
  discharge_staff?: Staff
}

Discharge.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'Discharge',
    },
    patientId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: 'patients', key: 'id' },
    },
    diagnosis: {
      type: DataTypes.STRING,
    },
    staffId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: 'staffs', key: 'id' },
    },
    details: {
      type: DataTypes.STRING,
    },
    comments: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    underscored: true,
    modelName: 'discharge',
  }
)

class Appointment extends Model {
  id!: number
  type!: string
  patientId!: number
  staffId!: string
  comments?: string
  startDate!: Date
  endDate!: Date
}

Appointment.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'Doctor Visit',
    },
    patientId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: 'patients', key: 'id' },
    },
    staffId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: 'staffs', key: 'id' },
    },
    comments: {
      type: DataTypes.STRING,
    },

    startDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    endDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    sequelize,
    underscored: true,
    modelName: 'appointment',
  }
)

export {
  OutpatientVisit,
  InpatientVisit,
  EmergencyVisit,
  NurseVisit,
  Admission,
  Discharge,
  Appointment,
}
