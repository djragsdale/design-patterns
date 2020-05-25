import express from 'express';

import getAllShoppingCarts from './getAllShoppingCarts.js';
import getShoppingCartByUserId from './getShoppingCartByUserId.js';

const shoppingCartBase = express.Router();

shoppingCartBase.use('/shoppingCart', [
  getAllShoppingCarts,
  getShoppingCartByUserId,
]);

export default shoppingCartBase;
