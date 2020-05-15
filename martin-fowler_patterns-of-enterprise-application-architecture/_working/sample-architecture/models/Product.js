// All Products have a SKU
// This SKU is used to communicate between data sources

import productDBModel from './Product_db_model.js';
import convertModelToPojo from '../util/convertModelToPojo.js';

const getProduct = async (sku) => {
  const product = await productDBModel.findOne({
    where: {
      sku,
    },
  }) || {};

  return convertModelToPojo(product);
};

const getProducts = async () => {
  const products = await productDBModel.findAll();
  return convertModelToPojo(products);
};

export {
  getProduct,
  getProducts,
};
