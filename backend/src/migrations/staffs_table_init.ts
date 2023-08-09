import { QueryInterface, DataTypes } from 'sequelize'

module.exports = {
  up: async ({ context: queryInterface }: { context: QueryInterface }) => {
    // Create the staffs table

    await queryInterface.createTable('staffs', {
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
    })
  },

  // rollback action, here we drop staffs table
  down: async ({ context: queryInterface }: { context: QueryInterface }) => {
    await queryInterface.dropTable('staffs')
  },
}
