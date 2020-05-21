import express from 'express';
import { getPaymentTypes } from '../../models/PaymentType.js';

const router = express.Router();

router.get('/getAllPaymentTypes', async (req, res) => {
  const paymentTypes = await getPaymentTypes();
  res.json(paymentTypes);
});

export default router;
