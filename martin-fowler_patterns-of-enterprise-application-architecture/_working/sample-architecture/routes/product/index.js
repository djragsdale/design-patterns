import express from 'express';

import getAllProducts from './getAllProducts.js';
import getProductBySKU from './getProductBySKU.js';

const productBase = express.Router();

productBase.use('/product', [
  getAllProducts,
  getProductBySKU,
]);

export default productBase;
