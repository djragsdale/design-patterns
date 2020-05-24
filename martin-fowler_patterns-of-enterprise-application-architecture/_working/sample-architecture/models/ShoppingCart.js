// shoppingCartId, userId

// There are various PaymentType values
// E.g. Credit Card, InvoiceAccount, ACH

import shoppingCartModel from './ShoppingCart_db_model.js';
import convertSequelizeModelToPojo from '../util/convertSequelizeModelToPojo.js';

class ShoppingCart {
  constructor({
    shoppingCartId,
    userId,
    createdAt,
    updatedAt,
  }) {
    this.shoppingCartId = shoppingCartId;
    this.userId = userId;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}

const deleteShoppingCartForUserId = async (userId) => {
  const shoppingCart = await shoppingCartModel.findOne({
    where: {
      userId,
    },
  }) || {};

  // TODO: Use onDelete hooks to delete shopping cart products for the shopping cart

  await shoppingCart.destroy();

  return new ShoppingCart(convertSequelizeModelToPojo(shoppingCart));
};

const getShoppingCart = async (shoppingCartId) => {
  const shoppingCart = await shoppingCartModel.findOne({
    where: {
      shoppingCartId,
    },
  }) || {};

  return new ShoppingCart(convertSequelizeModelToPojo(shoppingCart));
};

const getShoppingCartByUserId = async (userId) => {
  const shoppingCart = await shoppingCartModel.findOne({
    where: {
      userId,
    },
  }) || {};

  return new ShoppingCart(convertSequelizeModelToPojo(shoppingCart));
};

const getShoppingCarts = async () => {
  const shoppingCarts = await shoppingCartModel.findAll();
  return convertSequelizeModelToPojo(shoppingCarts).map((pojo) => new ShoppingCart(pojo));
};

export {
  deleteShoppingCartForUserId,
  getShoppingCart,
  getShoppingCartByUserId,
  getShoppingCarts,
  ShoppingCart,
};
