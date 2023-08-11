import { Model, DataTypes } from 'sequelize'

import { sequelize } from '../utils/db'

class OutpatientVisit extends Model {}

OutpatientVisit.init(
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

class NurseVisit extends Model {}

NurseVisit.init(
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

class InpatientVisit extends Model {}

InpatientVisit.init(
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

class EmergencyVisit extends Model {}

EmergencyVisit.init(
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

class Admission extends Model {}

Admission.init(
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

class Discharge extends Model {}

Discharge.init(
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

export {
  OutpatientVisit,
  InpatientVisit,
  EmergencyVisit,
  NurseVisit,
  Admission,
  Discharge,
}
