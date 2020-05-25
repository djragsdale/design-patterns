import express from 'express';

import getAllInvoices from './getAllInvoices.js';

const invoiceBase = express.Router();

invoiceBase.use('/invoice', [
  getAllInvoices,
]);

export default invoiceBase;
