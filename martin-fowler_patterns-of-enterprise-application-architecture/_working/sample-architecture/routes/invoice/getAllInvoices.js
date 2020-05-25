import express from 'express';
import { getInvoices } from '../../models/Invoice.js';

const router = express.Router();

router.get('/getAllInvoices', async (req, res) => {
  const invoiceAccounts = await getInvoices();
  res.json(invoiceAccounts);
});

export default router;
