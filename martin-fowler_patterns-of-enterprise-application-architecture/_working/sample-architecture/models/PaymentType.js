// There are various PaymentType values
// E.g. Credit Card, InvoiceAccount, ACH

import paymentTypeModel from './PaymentType_db_model.js';
import convertSequelizeModelToPojo from '../util/convertSequelizeModelToPojo.js';

const getPaymentType = async (paymentTypeId) => {
  const paymentType = await paymentTypeModel.findOne({
    where: {
      paymentTypeId,
    },
  }) || {};

  return convertSequelizeModelToPojo(paymentType);
};

const getPaymentTypes = async () => {
  const paymentTypes = await paymentTypeModel.findAll();
  return convertSequelizeModelToPojo(paymentTypes);
};

export {
  getPaymentType,
  getPaymentTypes,
};
