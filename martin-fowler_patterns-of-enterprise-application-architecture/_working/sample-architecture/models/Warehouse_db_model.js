// A warehouse stores inventory
// Calculating warehouse stock for each product SKU will get time consuming over time so these
// calculations will probably be scheduled as batch jobs, augmented by audits
// Audits and materialized calculations are out of scope but may change over time.

import Sequelize from 'sequelize';

import mainDb from '../databases/main_db/connection.js';

export default mainDb.define('warehouse', {
  warehouseId: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },
  name: Sequelize.STRING(100),
  description: Sequelize.STRING(255),
  createdAt: {
    allowNull: false,
    type: Sequelize.DATE,
  },
  updatedAt: {
    allowNull: false,
    type: Sequelize.DATE,
  },
}, {
  tableName: 'warehouse',
  timestamps: true,
});
