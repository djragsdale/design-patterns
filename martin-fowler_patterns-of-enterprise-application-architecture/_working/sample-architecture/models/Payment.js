import paymentModel from './Payment_db_model.js';
import convertSequelizeModelToPojo from '../util/convertSequelizeModelToPojo.js';

class Payment {
  constructor({
    paymentId,
    paymentMethodId,
    customerId,
    userId,
    amount,
    createdAt,
    updatedAt,
  }) {
    this.paymentId = paymentId;
    this.paymentMethodId = paymentMethodId;
    this.customerId = customerId;
    this.userId = userId;
    this.amount = amount;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}

const getPayments = async () => {
  const invoices = await paymentModel.findAll();
  return convertSequelizeModelToPojo(invoices).map((pojo) => new Payment(pojo));
};

export {
  getPayments,
  Payment,
};
