import express from 'express';
import { getPaymentMethods } from '../../models/PaymentMethod.js';

const router = express.Router();

router.get('/getAllPaymentMethods', async (req, res) => {
  const paymentMethods = await getPaymentMethods();
  res.json(paymentMethods);
});

export default router;
