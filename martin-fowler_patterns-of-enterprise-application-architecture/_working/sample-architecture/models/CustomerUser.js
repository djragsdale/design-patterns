// A customer can have 1 or more users
// A user can purchase for more than 1 customer
// This prepares us better for future integration with customer cost centers (InvoiceAccount)

import customerUserModel from './CustomerUser_db_model.js';
import convertSequelizeModelToPojo from '../util/convertSequelizeModelToPojo.js';

class CustomerUser {
  constructor({
    customerUserId,
    customerId,
    userId,
    isActive,
    createdAt,
    updatedAt,
  }) {
    this.customerUserId = customerUserId;
    this.customerId = customerId;
    this.userId = userId;
    this.isActive = isActive ?? true;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}

const getCustomerUsers = async () => {
  const customers = await customerUserModel.findAll();
  return convertSequelizeModelToPojo(customers).map((pojo) => new CustomerUser(pojo));
};

export {
  getCustomerUsers,
  CustomerUser,
};
