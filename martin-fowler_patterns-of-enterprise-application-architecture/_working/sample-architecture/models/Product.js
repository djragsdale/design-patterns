// All Products have a SKU
// This SKU is used to communicate between data sources

import productDBModel from './Product_db_model.js';
import convertSequelizeModelToPojo from '../util/convertSequelizeModelToPojo.js';

export default class Product {
  constructor({
    productId,
    sku,
    name,
    description,
    createdAt,
    updatedAt,
  }) {
    this.productId = productId;
    this.sku = sku;
    this.name = name;
    this.description = description;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}

const getProduct = async (sku) => {
  const product = await productDBModel.findOne({
    where: {
      sku,
    },
  }) || {};

  return new Product(convertSequelizeModelToPojo(product));
};

const getProducts = async () => {
  const products = await productDBModel.findAll();
  return convertSequelizeModelToPojo(products).map((pojo) => new Product(pojo));
};

export {
  getProduct,
  getProducts,
};
