import { Model, DataTypes } from 'sequelize'

import { sequelize } from '../utils/db'

class Role extends Model {}

Role.init(
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
      unique: true,
    },
  },
  {
    sequelize,
    underscored: true,
    timestamps: false,
    modelName: 'role',
  }
)

class StaffRole extends Model {}

StaffRole.init(
  {
    staffId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      references: { model: 'staffs', key: 'id' },
    },
    roleId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      references: { model: 'roles', key: 'id' },
    },
  },
  {
    sequelize,
    underscored: true,
    modelName: 'staffRole',
  }
)

export { Role, StaffRole }
