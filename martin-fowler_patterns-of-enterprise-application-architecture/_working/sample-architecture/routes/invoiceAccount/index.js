import express from 'express';

import getAllInvoiceAccounts from './getAllInvoiceAccounts.js';

const invoiceAccountBase = express.Router();

invoiceAccountBase.use('/invoiceAccount', [
  getAllInvoiceAccounts,
]);

export default invoiceAccountBase;
