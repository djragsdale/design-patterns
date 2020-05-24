// There are various PaymentType values
// E.g. Credit Card, InvoiceAccount, ACH

import Sequelize from 'sequelize';

import mainDb from '../databases/main_db/connection.js';

export default mainDb.define('paymentType', {
  paymentTypeId: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },
  name: Sequelize.STRING(100),
  createdAt: {
    allowNull: false,
    type: Sequelize.DATE,
  },
  updatedAt: {
    allowNull: false,
    type: Sequelize.DATE,
  },
}, {
  tableName: 'paymentType',
  timestamps: true,
});
