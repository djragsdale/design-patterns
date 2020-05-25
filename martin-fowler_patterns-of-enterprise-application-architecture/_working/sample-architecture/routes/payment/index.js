import express from 'express';

import getAllPayments from './getAllPayments.js';

const paymentBase = express.Router();

paymentBase.use('/payment', [
  getAllPayments,
]);

export default paymentBase;
