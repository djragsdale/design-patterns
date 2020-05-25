// If a customer receives regular invoices instead of up front payments they need an InvoiceAccount
// Each InvoiceAccount has a unique CustomerID+CostCenter
// Cost center defaults to '000'
import Sequelize from 'sequelize';

import mainDb from '../databases/main_db/connection.js';

export default mainDb.define('invoiceAccount', {
  invoiceAccountId: {
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
  costCenter: {
    allowNull: false,
    type: Sequelize.STRING(5),
  },
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
  tableName: 'invoiceAccount',
  timestamps: true,
});
