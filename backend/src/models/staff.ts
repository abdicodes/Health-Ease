import { Model, DataTypes } from 'sequelize'

import { sequelize } from '../utils/db'

interface StaffAttributes {
  id?: number
  name: string
  username: string
  password: string
  email: string
}
class Staff extends Model<StaffAttributes> implements StaffAttributes {
  id?: number
  name!: string
  username!: string
  password!: string
  email!: string
}

Staff.init(
  {
    id: {
      type: DataTypes.INTEGER,
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
  },
  {
    sequelize,
    underscored: true,
    modelName: 'staff',
  }
)

export default Staff
