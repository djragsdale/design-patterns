// There are various PaymentType values
// E.g. Credit Card, InvoiceAccount, ACH

import paymentTypeModel from './PaymentType_db_model.js';
import convertSequelizeModelToPojo from '../util/convertSequelizeModelToPojo.js';

class PaymentType {
  constructor({
    paymentTypeId,
    name,
    createdAt,
    updatedAt,
  }) {
    this.paymentTypeId = paymentTypeId;
    this.name = name;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}

const getPaymentType = async (paymentTypeId) => {
  const paymentType = await paymentTypeModel.findOne({
    where: {
      paymentTypeId,
    },
  }) || {};

  return new PaymentType(convertSequelizeModelToPojo(paymentType));
};

const getPaymentTypes = async () => {
  const paymentTypes = await paymentTypeModel.findAll();
  return convertSequelizeModelToPojo(paymentTypes).map((pojo) => new PaymentType(pojo));
};

export {
  getPaymentType,
  getPaymentTypes,
};
