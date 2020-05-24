// shoppingCartProductId, shoppingCartId, sku, quantity

import Sequelize from 'sequelize';

import mainDb from '../databases/main_db/connection.js';

export default mainDb.define('shoppingCartProduct', {
  shoppingCartProductId: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },
  shoppingCartId: {
    allowNull: false,
    type: Sequelize.INTEGER,
    references: {
      model: 'shoppingCart',
      key: 'shoppingCartId',
    },
  },
  sku: Sequelize.STRING(25),
  quantity: Sequelize.INTEGER,
  createdAt: {
    allowNull: false,
    type: Sequelize.DATE,
  },
  updatedAt: {
    allowNull: false,
    type: Sequelize.DATE,
  },
}, {
  tableName: 'shoppingCartProduct',
  timestamps: true,
});
