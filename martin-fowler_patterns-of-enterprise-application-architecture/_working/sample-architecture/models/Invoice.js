// Most invoices will be created through scheduled jobs.
// If the Invoice has a rendered .pdf or .docx then that will probably be stored on the cloud
// somewhere like Amazon S3, while the invoice data will be stored in a database.

import invoiceModel from './Invoice_db_model.js';
import convertSequelizeModelToPojo from '../util/convertSequelizeModelToPojo.js';

class Invoice {
  constructor({
    invoiceId,
    invoiceAccountId,
    invoiceDocumentURL,
    subtotalAmount,
    taxAmount,
    dueBy,
    paidOn,
    createdAt,
    updatedAt,
  }) {
    this.invoiceId = invoiceId;
    this.invoiceAccountId = invoiceAccountId;
    this.invoiceDocumentURL = invoiceDocumentURL;
    this.subtotalAmount = subtotalAmount;
    this.taxAmount = taxAmount;
    this.dueBy = dueBy;
    this.paidOn = paidOn;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}

const getInvoices = async () => {
  const invoices = await invoiceModel.findAll();
  return convertSequelizeModelToPojo(invoices).map((pojo) => new Invoice(pojo));
};

export {
  getInvoices,
  Invoice,
};
