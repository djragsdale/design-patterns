// Most invoices will be created through scheduled jobs.
// If the Invoice has a rendered .pdf or .docx then that will probably be stored on the cloud
// somewhere like Amazon S3, while the invoice data will be stored in a database.

import Sequelize from 'sequelize';

import mainDb from '../databases/main_db/connection.js';

export default mainDb.define('invoice', {
  invoiceId: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },
  invoiceAccountId: {
    allowNull: false,
    type: Sequelize.INTEGER,
    references: {
      model: 'invoiceAccount',
      key: 'invoiceAccountId',
    },
  },
  invoiceDocumentURL: Sequelize.STRING(255),
  subtotalAmount: Sequelize.DOUBLE,
  taxAmount: Sequelize.DOUBLE,
  // totalAmount is calculated
  dueBy: {
    allowNull: false,
    type: Sequelize.DATE,
  },
  paidOn: {
    allowNull: false,
    type: Sequelize.DATE,
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
  tableName: 'invoice',
  timestamps: true,
});
