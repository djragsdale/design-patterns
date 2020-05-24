import shoppingCartModel from './ShoppingCart_db_model.js';
import convertSequelizeModelToPojo from '../util/convertSequelizeModelToPojo.js';

import { deleteShoppingCartProductsForShoppingCartId } from './ShoppingCartProduct.js';

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

  async delete() {
    const queriedShoppingCart = await shoppingCartModel.findOne({
      where: {
        shoppingCartId: this.shoppingCartId,
      },
    }) || {};

    await queriedShoppingCart.destroy();
  }
}

const deleteShoppingCartForUserId = async (userId) => {
  const queriedShoppingCart = await shoppingCartModel.findOne({
    where: {
      userId,
    },
  }) || {};

  const shoppingCart = new ShoppingCart(convertSequelizeModelToPojo(queriedShoppingCart));

  await deleteShoppingCartProductsForShoppingCartId(shoppingCart.shoppingCartId);

  await shoppingCart.delete();

  return shoppingCart;
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
