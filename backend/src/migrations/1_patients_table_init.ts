import { QueryInterface, DataTypes } from 'sequelize'

enum GenderEnum {
  Male = 'male',
  Female = 'female',
}

module.exports = {
  up: async ({ context: queryInterface }: { context: QueryInterface }) => {
    // Create the patients table
    await queryInterface.createTable('patients', {
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
      phone_number: {
        type: DataTypes.STRING,
      },
      date_of_birth: {
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
      blood_type: {
        type: DataTypes.STRING,
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

  // rollback action, here we drop patients table
  down: async ({ context: queryInterface }: { context: QueryInterface }) => {
    await queryInterface.dropTable('patients')
  },
}
