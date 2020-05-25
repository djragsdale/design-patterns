import express from 'express';

import getAllOrders from './getAllOrders.js';
import getOrdersByCustomerId from './getOrdersByCustomerId.js';
import getOrdersByUserId from './getOrdersByUserId.js';

const orderBase = express.Router();

orderBase.use('/order', [
  getAllOrders,
  getOrdersByCustomerId,
  getOrdersByUserId,
]);

export default orderBase;
