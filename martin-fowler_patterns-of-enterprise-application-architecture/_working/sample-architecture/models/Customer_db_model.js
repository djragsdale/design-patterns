// A customer can have 1 or more users
import Sequelize from 'sequelize';

import mainDb from '../databases/main_db/connection.js';

export default mainDb.define('customer', {
  customerId: {
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
  tableName: 'customer',
  timestamps: true,
});
