import Sequelize from 'sequelize';

import productsDb from '../databases/products_db/connection.js';

// TODO: Add effDt (effective date) to handle product changes over time
export default productsDb.define('product', {
  productId: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },
  sku: Sequelize.STRING(25),
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
  tableName: 'product',
  timestamps: true,
});
