const { DataTypes } = require('sequelize')

module.exports = {
  up: async ({ context: queryInterface }) => {
    //   Doctor Visit
    await queryInterface.createTable('outpatient_visits', {
      id: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
      },
      patient_id: {
        type: DataTypes.STRING,
        allowNull: false,
        references: { model: 'patients', key: 'id' },
      },
      type: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'Doctor Visit',
      },
      diagnosis: {
        type: DataTypes.STRING,
      },
      staff_id: {
        type: DataTypes.STRING,
        allowNull: false,
        references: { model: 'staffs', key: 'id' },
      },
      details: {
        type: DataTypes.TEXT,
      },
      comments: {
        type: DataTypes.TEXT,
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

    // in-patient visits
    await queryInterface.createTable('inpatient_visits', {
      id: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
      },

      type: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'In-Patient Visit',
      },
      patient_id: {
        type: DataTypes.STRING,
        allowNull: false,
        references: { model: 'patients', key: 'id' },
      },
      diagnosis: {
        type: DataTypes.STRING,
      },
      staff_id: {
        type: DataTypes.STRING,
        allowNull: false,
        references: { model: 'staffs', key: 'id' },
      },
      details: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      comments: {
        type: DataTypes.TEXT,
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

    // Hospital admission
    await queryInterface.createTable('admissions', {
      id: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
      },
      type: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'Admission',
      },
      patient_id: {
        type: DataTypes.STRING,
        allowNull: false,
        references: { model: 'patients', key: 'id' },
      },
      diagnosis: {
        type: DataTypes.STRING,
      },
      staff_id: {
        type: DataTypes.STRING,
        allowNull: false,
        references: { model: 'staffs', key: 'id' },
      },
      details: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      comments: {
        type: DataTypes.TEXT,
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

    // Hospital discharge
    await queryInterface.createTable('discharges', {
      id: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
      },
      type: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'Discharge',
      },
      patient_id: {
        type: DataTypes.STRING,
        allowNull: false,
        references: { model: 'patients', key: 'id' },
      },
      diagnosis: {
        type: DataTypes.STRING,
      },
      staff_id: {
        type: DataTypes.STRING,
        allowNull: false,
        references: { model: 'staffs', key: 'id' },
      },
      details: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      comments: {
        type: DataTypes.TEXT,
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

    // emergency visit
    await queryInterface.createTable('emergency_visits', {
      id: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
      },
      type: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'Emergency Visit',
      },
      patient_id: {
        type: DataTypes.STRING,
        allowNull: false,
        references: { model: 'patients', key: 'id' },
      },
      diagnosis: {
        type: DataTypes.STRING,
      },
      staff_id: {
        type: DataTypes.STRING,
        allowNull: false,
        references: { model: 'staffs', key: 'id' },
      },
      details: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      comments: {
        type: DataTypes.TEXT,
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
    // nurse visit
    await queryInterface.createTable('nurse_visits', {
      id: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
      },
      type: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'Nurse Visit',
      },
      patient_id: {
        type: DataTypes.STRING,
        allowNull: false,
        references: { model: 'patients', key: 'id' },
      },
      diagnosis: {
        type: DataTypes.STRING,
      },
      staff_id: {
        type: DataTypes.STRING,
        allowNull: false,
        references: { model: 'staffs', key: 'id' },
      },
      details: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      comments: {
        type: DataTypes.TEXT,
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
  down: async ({ context: queryInterface }) => {
    await queryInterface.dropTable('outpatient_visits')
    await queryInterface.dropTable('inpatient_visits')
    await queryInterface.dropTable('discharges')
    await queryInterface.dropTable('emergency_visits')
    await queryInterface.dropTable('admissions')
    await queryInterface.dropTable('nurse_visits')
  },
}
