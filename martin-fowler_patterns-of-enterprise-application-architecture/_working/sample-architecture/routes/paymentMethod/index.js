import express from 'express';

import getAllPaymentTypes from './getAllPaymentMethods.js';

const paymentMethodBase = express.Router();

paymentMethodBase.use('/paymentMethod', [
  getAllPaymentTypes,
]);

export default paymentMethodBase;
