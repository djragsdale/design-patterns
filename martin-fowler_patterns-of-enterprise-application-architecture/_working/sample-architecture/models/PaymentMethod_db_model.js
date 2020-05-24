import Sequelize from 'sequelize';

import mainDb from '../databases/main_db/connection.js';

export default mainDb.define('paymentmethod', {
  paymentMethodId: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },
  paymentTypeId: {
    allowNull: false,
    type: Sequelize.INTEGER,
    references: {
      model: 'paymentType',
      key: 'paymentTypeId',
    },
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
  tableName: 'paymentMethod',
  timestamps: true,
});
