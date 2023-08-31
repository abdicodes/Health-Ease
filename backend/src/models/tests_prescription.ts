import { Model, DataTypes } from 'sequelize'

import { sequelize } from '../utils/db'

class LabEvent extends Model {}

LabEvent.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
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

class ScanEvent extends Model {}

ScanEvent.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
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

class PrescriptionEvent extends Model {}

PrescriptionEvent.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
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
    modelName: 'labEvent',
  }
)

export { LabEvent, ScanEvent }
