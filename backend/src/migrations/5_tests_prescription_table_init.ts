import { QueryInterface, DataTypes } from 'sequelize'

module.exports = {
  up: async ({ context: queryInterface }: { context: QueryInterface }) => {
    // Lab event table
    await queryInterface.createTable('lab_events', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      type: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'Laboratory tests',
      },
      patient_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: { model: 'patients', key: 'id' },
      },
      ordered_by: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: { model: 'staffs', key: 'id' },
      },

      processed_by: {
        type: DataTypes.INTEGER,
        references: { model: 'staffs', key: 'id' },
      },
      tests: {
        type: DataTypes.ARRAY(DataTypes.JSONB), // Store an array of test objects here
      },
      comments: {
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

    // Scan event table
    await queryInterface.createTable('scan_events', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },

      type: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'Medical Imaging',
      },
      patient_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: { model: 'patients', key: 'id' },
      },
      ordered_by: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: { model: 'staffs', key: 'id' },
      },
      processed_by: {
        type: DataTypes.INTEGER,
        references: { model: 'staffs', key: 'id' },
      },
      image: {
        type: DataTypes.JSONB, // Store image objects here
      },
      comments: {
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

    await queryInterface.createTable('prescription_events', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      type: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'Prescriptions',
      },
      active: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
      patient_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: { model: 'patients', key: 'id' },
      },
      ordered_by: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: { model: 'staffs', key: 'id' },
      },

      processed_by: {
        type: DataTypes.INTEGER,
        references: { model: 'staffs', key: 'id' },
      },
      drugs: {
        type: DataTypes.ARRAY(DataTypes.JSONB), // Store an array of drugs objects here
      },
      comments: {
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

  // rollback action, here we drop lab_events, scan_events and prescription_events tables
  down: async ({ context: queryInterface }: { context: QueryInterface }) => {
    await queryInterface.dropTable('scan_events')
    await queryInterface.dropTable('lab_events')
    await queryInterface.dropTable('prescription_events')
  },
}
