// A customer can have 1 or more users
import Sequelize from 'sequelize';

import mainDb from '../databases/main_db/connection.js';

export default mainDb.define('customerUser', {
  customerUserId: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },
  customerId: {
    allowNull: false,
    type: Sequelize.INTEGER,
    references: {
      model: 'customer',
      key: 'customerId',
    },
  },
  userId: {
    allowNull: false,
    type: Sequelize.STRING(100),
  },
  // Instead of using a default value (which is hard discover), make it required and apply the
  // default in our domain model. The DB is reflective of data, not business rules.
  isActive: {
    allowNull: false,
    type: Sequelize.BOOLEAN,
  },
  createdAt: {
    allowNull: false,
    type: Sequelize.DATE,
  },
  updatedAt: {
    allowNull: false,
    type: Sequelize.DATE,
  },
}, {
  tableName: 'customerUser',
  timestamps: true,
});
