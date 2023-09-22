import { Model, DataTypes } from 'sequelize'

import { sequelize } from '../utils/db'

interface current_roles {
  id: number
}
interface StaffAttributes {
  id?: string
  name: string
  username: string
  password: string
  email: string
  disabled?: boolean
}

class Staff extends Model<StaffAttributes> implements StaffAttributes {
  id?: string
  name!: string
  username!: string
  password!: string
  email!: string
  current_roles?: current_roles[]
  disabled?: boolean
}

Staff.init(
  {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
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
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    disabled: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
  },
  {
    sequelize,
    underscored: true,
    modelName: 'staff',
  }
)

export default Staff
