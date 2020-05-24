// A PaymentMethod belongs to a customer
// Each PaymentMethod is assigned a PaymentType
// Since each PaymentMethod has different attributes, these are all stored in separate tables
// This model knows about each PaymentMethod, and can be used generically to process payment
// methods without the user caring out what payment methods are provided.
// There is no paymentMethod table, or if there is it is merely an association table of
// payment type to the respective tables

import paymentMethodModel from './PaymentMethod_db_model.js';
import convertSequelizeModelToPojo from '../util/convertSequelizeModelToPojo.js';

export default class PaymentMethod {
  constructor({
    paymentMethodId,
    paymentTypeId,
    name,
    createdAt,
    updatedAt,
  }) {
    this.paymentMethodId = paymentMethodId;
    this.paymentTypeId = paymentTypeId;
    this.name = name;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}

const getPaymentMethod = async (paymentMethodId) => {
  const paymentMethod = await paymentMethodModel.findOne({
    where: {
      paymentMethodId,
    },
  }) || {};

  return new PaymentMethod(convertSequelizeModelToPojo(paymentMethod));
};

const getPaymentMethods = async () => {
  const paymentMethods = await paymentMethodModel.findAll();
  return convertSequelizeModelToPojo(paymentMethods).map((pojo) => new PaymentMethod(pojo));
};

export {
  getPaymentMethod,
  getPaymentMethods,
};
