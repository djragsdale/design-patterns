// All Products have a SKU
// This SKU is used to communicate between data sources

import Sequelize from 'sequelize';

import productsDb from '../databases/connections/products_db.js';

const Product = productsDb.define('product', {
  product_id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  sku: Sequelize.STRING(25),
  name: Sequelize.STRING(100),
  description: Sequelize.STRING(255),
}, {
  tableName: 'product',
  timestamps: false, // TODO: Re-initialize the database with this set to true
  underscored: true,
});

const getProduct = async (sku) => {
  const product = await Product.findOne({
    where: {
      sku,
    },
  });
  return product;
};
const getProducts = async () => Product.findAll();

export {
  getProduct,
  getProducts,
};
