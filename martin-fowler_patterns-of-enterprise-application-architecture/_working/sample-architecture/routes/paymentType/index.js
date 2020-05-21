import express from 'express';

import getAllPaymentTypes from './getAllPaymentTypes.js';

const paymentTypeBase = express.Router();

paymentTypeBase.use('/paymentType', [
  getAllPaymentTypes,
]);

export default paymentTypeBase;
