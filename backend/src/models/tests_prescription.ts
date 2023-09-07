import { Model, DataTypes } from 'sequelize'

import { sequelize } from '../utils/db'
import { Staff } from './index'

class LabEvent extends Model {
  id!: number
  type!: string
  comments?: string
  updatedAt!: string
  lab_ordered_by?: Staff
  lab_processed_by?: Staff
  tests?: JSON[]
}

LabEvent.init(
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
      defaultValue: 'Laboratory tests',
    },
    patientId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: 'patients', key: 'id' },
    },
    orderedBy: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: 'staffs', key: 'id' },
    },
    processedBy: {
      type: DataTypes.INTEGER,
      references: { model: 'staffs', key: 'id' },
    },
    tests: {
      type: DataTypes.ARRAY(DataTypes.JSONB), // Store an array of test objects here
    },
    comments: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    underscored: true,
    modelName: 'labEvent',
  }
)

class ScanEvent extends Model {
  id!: number
  type!: string
  comments?: string
  updatedAt!: string
  scan_ordered_by?: Staff
  scan_processed_by?: Staff
  image?: string
}

ScanEvent.init(
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
      defaultValue: 'Medical Imaging',
    },
    patientId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: 'patients', key: 'id' },
    },
    orderedBy: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: 'staffs', key: 'id' },
    },
    processedBy: {
      type: DataTypes.INTEGER,
      references: { model: 'staffs', key: 'id' },
    },
    image: {
      type: DataTypes.JSONB, // Store image objects here
    },
    comments: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    underscored: true,
    modelName: 'scanEvent',
  }
)

class PrescriptionEvent extends Model {
  id!: number
  type!: string
  comments?: string
  updatedAt!: string
  prescription_ordered_by?: Staff
  prescription_processed_by?: Staff
  active?: boolean
  drugs?: JSON[]
}

PrescriptionEvent.init(
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
      defaultValue: 'Prescriptions',
    },
    active: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
    patientId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: 'patients', key: 'id' },
    },
    orderedBy: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: 'staffs', key: 'id' },
    },
    processedBy: {
      type: DataTypes.INTEGER,
      references: { model: 'staffs', key: 'id' },
    },
    drugs: {
      type: DataTypes.ARRAY(DataTypes.JSONB), // Store an array of drugs objects here
    },
    comments: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    underscored: true,
    modelName: 'prescriptionEvent',
  }
)

export { LabEvent, ScanEvent, PrescriptionEvent }
