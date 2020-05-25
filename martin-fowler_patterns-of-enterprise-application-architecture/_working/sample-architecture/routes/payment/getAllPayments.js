import express from 'express';
import { getPayments } from '../../models/Payment.js';

const router = express.Router();

router.get('/getAllPayments', async (req, res) => {
  const payments = await getPayments();
  res.json(payments);
});

export default router;
