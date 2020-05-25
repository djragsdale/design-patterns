import Sequelize from 'sequelize';

import mainDb from '../databases/main_db/connection.js';

export default mainDb.define('payment', {
  paymentId: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },
  paymentMethodId: {
    allowNull: false,
    type: Sequelize.INTEGER,
    references: {
      model: 'paymentMethod',
      key: 'paymentMethodId',
    },
  },
  customerId: {
    allowNull: false,
    type: Sequelize.INTEGER,
    references: {
      model: 'invoiceAccount',
      key: 'invoiceAccountId',
    },
  },
  userId: {
    allowNull: false,
    type: Sequelize.STRING(100),
  },
  amount: Sequelize.DOUBLE,
  createdAt: {
    allowNull: false,
    type: Sequelize.DATE,
  },
  updatedAt: {
    allowNull: false,
    type: Sequelize.DATE,
  },
}, {
  tableName: 'payment',
  timestamps: true,
});
