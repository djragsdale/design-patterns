import express from 'express';

import getAllCustomers from './getAllCustomers.js';

const customerBase = express.Router();

customerBase.use('/customer', [
  getAllCustomers,
]);

export default customerBase;
