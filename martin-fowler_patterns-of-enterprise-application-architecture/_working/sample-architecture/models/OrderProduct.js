// orderProductId, orderId, sku, quantity, unitCost

import orderProductModel from './OrderProduct_db_model.js';
import convertSequelizeModelToPojo from '../util/convertSequelizeModelToPojo.js';

class OrderProduct {
  constructor({
    orderProductId,
    orderId,
    sku,
    quantity,
    unitCost,
    createdAt,
    updatedAt,
  }) {
    this.orderProductId = orderProductId;
    this.orderId = orderId;
    this.sku = sku;
    this.quantity = quantity;
    this.unitCost = unitCost;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}

const getOrderProducts = async () => {
  const orderProducts = await orderProductModel.findAll();
  return convertSequelizeModelToPojo(orderProducts).map((pojo) => new OrderProduct(pojo));
};

const getOrderProductsByOrderId = async (orderId) => {
  const orderProducts = await orderProductModel.findAll({
    where: {
      orderId,
    },
  }) || [];

  return convertSequelizeModelToPojo(orderProducts).map((pojo) => new OrderProduct(pojo));
};

export {
  getOrderProducts,
  getOrderProductsByOrderId,
  OrderProduct,
};
