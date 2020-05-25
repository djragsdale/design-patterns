// If a customer receives regular invoices instead of up front payments they need an InvoiceAccount
// Each InvoiceAccount has a unique CustomerID+CostCenter
// Cost center defaults to '000'
import invoiceAccountModel from './InvoiceAccount_db_model.js';
import convertSequelizeModelToPojo from '../util/convertSequelizeModelToPojo.js';

class InvoiceAccount {
  constructor({
    invoiceAccountId,
    customerId,
    costCenter,
    isActive,
    createdAt,
    updatedAt,
  }) {
    this.invoiceAccountId = invoiceAccountId;
    this.customerId = customerId;
    this.costCenter = costCenter ?? '000';
    this.isActive = isActive ?? true;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}

const getInvoiceAccounts = async () => {
  const invoiceAccounts = await invoiceAccountModel.findAll();
  return convertSequelizeModelToPojo(invoiceAccounts).map((pojo) => new InvoiceAccount(pojo));
};

export {
  getInvoiceAccounts,
  InvoiceAccount,
};
