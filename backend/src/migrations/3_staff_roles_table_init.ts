import { QueryInterface, DataTypes } from 'sequelize'

module.exports = {
  up: async ({ context: queryInterface }: { context: QueryInterface }) => {
    // Create the roles table and connecting table roles_staff!

    await queryInterface.createTable('roles', {
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
    })

    await queryInterface.createTable('staff_roles', {
      staff_id: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
        references: { model: 'staffs', key: 'id' },
      },
      role_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        references: { model: 'roles', key: 'id' },
      },
      created_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      updated_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
    })
  },

  // rollback action, here we drop roles and staff_roles tables
  down: async ({ context: queryInterface }: { context: QueryInterface }) => {
    await queryInterface.dropTable('roles')
    await queryInterface.dropTable('staff_roles')
  },
}
