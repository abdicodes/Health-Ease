import { Model, DataTypes } from 'sequelize'

import { sequelize } from '../utils/db'

enum GenderEnum {
  Male = 'male',
  Female = 'female',
}

interface PatientAttributes {
  id?: number
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
class Patient extends Model<PatientAttributes> implements PatientAttributes {
  id?: number
  name!: string
  username!: string
  password!: string
  email!: string
  phoneNumber?: string
  dateOfBirth!: string
  address?: string
  gender!: string
  bloodType?: string
}

Patient.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phoneNumber: {
      type: DataTypes.STRING,
    },
    dateOfBirth: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
    },
    gender: {
      type: DataTypes.ENUM(...Object.values(GenderEnum)),
      allowNull: false,
    },
    bloodType: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    underscored: true,
    modelName: 'patients',
  }
)

export default Patient
