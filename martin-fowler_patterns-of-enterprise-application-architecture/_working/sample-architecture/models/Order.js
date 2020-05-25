// orderId, userId, paymentMethodId, shippingAddressId, billingAddressId
// costs will be calculated based on child OrderProducts

import orderModel from './Order_db_model.js';
import { getOrderProductsByOrderId } from './OrderProduct.js';
import convertSequelizeModelToPojo from '../util/convertSequelizeModelToPojo.js';

class Order {
  constructor({
    orderId,
    userId,
    customerId,
    paymentMethodId,
    shippingAddressId,
    billingAddressId,
    createdAt,
    updatedAt,

    orderProducts,
  }) {
    this.orderId = orderId;
    this.userId = userId;
    this.customerId = customerId;
    this.paymentMethodId = paymentMethodId;
    this.shippingAddressId = shippingAddressId;
    this.billingAddressId = billingAddressId;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;

    this.orderProducts = orderProducts;
  }

  // If not using this asynchronous method, I could use an async static method `from` to retrieve
  // object with relationships.
  // async orderProducts() {
  //   return getOrderProductsByOrderId(this.orderId);
  // }
}

// const createOrderFromShoppingCart = async (shoppingCart) => {
//
// };

// TODO: Retrieve data with relationships
const getOrders = async () => {
  const orders = await orderModel.findAll();
  return convertSequelizeModelToPojo(orders).map((pojo) => new Order(pojo));
};

const getOrdersByCustomerId = async (customerId) => {
  const orders = await orderModel.findAll({
    where: {
      customerId,
    },
  }) || [];

  return convertSequelizeModelToPojo(orders).map((pojo) => new Order(pojo));
};

const getOrdersByUserId = async (userId) => {
  const orders = await orderModel.findAll({
    where: {
      userId,
    },
  }) || [];

  return convertSequelizeModelToPojo(orders).map((pojo) => new Order(pojo));
};

export {
  // createOrderFromShoppingCart,
  getOrders,
  getOrdersByCustomerId,
  getOrdersByUserId,
  Order,
};
