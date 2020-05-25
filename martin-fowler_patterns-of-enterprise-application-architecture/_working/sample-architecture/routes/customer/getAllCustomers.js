import express from 'express';
import { getCustomers } from '../../models/Customer.js';

const router = express.Router();

router.get('/getAllCustomers', async (req, res) => {
  const customers = await getCustomers();
  res.json(customers);
});

export default router;
