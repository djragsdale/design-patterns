// All Products have a SKU
// This SKU is used to communicate between data sources

import productDBModel from './Product_db_model.js';
import convertSequelizeModelToPojo from '../util/convertSequelizeModelToPojo.js';

const getProduct = async (sku) => {
  const product = await productDBModel.findOne({
    where: {
      sku,
    },
  }) || {};

  return convertSequelizeModelToPojo(product);
};

const getProducts = async () => {
  const products = await productDBModel.findAll();
  return convertSequelizeModelToPojo(products);
};

export {
  getProduct,
  getProducts,
};
