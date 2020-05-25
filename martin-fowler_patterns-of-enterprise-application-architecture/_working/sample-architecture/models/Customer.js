// A customer can have 1 or more users

import customerModel from './Customer_db_model.js';
import convertSequelizeModelToPojo from '../util/convertSequelizeModelToPojo.js';

class Customer {
  constructor({
    customerId,
    name,
    description,
    createdAt,
    updatedAt,
  }) {
    this.customerId = customerId;
    this.name = name;
    this.description = description;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }

  // .addUser(User) method upserts a related CustomerUser

  // .save() method uses an upsert
}

const getCustomers = async () => {
  const customers = await customerModel.findAll();
  return convertSequelizeModelToPojo(customers).map((pojo) => new Customer(pojo));
};

export {
  getCustomers,
  Customer,
};
