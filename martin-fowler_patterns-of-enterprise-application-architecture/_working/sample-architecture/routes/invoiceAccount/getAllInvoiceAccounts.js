import express from 'express';
import { getInvoiceAccounts } from '../../models/InvoiceAccount.js';

const router = express.Router();

router.get('/getAllInvoiceAccounts', async (req, res) => {
  const invoiceAccounts = await getInvoiceAccounts();
  res.json(invoiceAccounts);
});

export default router;
