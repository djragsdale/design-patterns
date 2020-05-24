import shoppingCartProductModel from './ShoppingCartProduct_db_model.js';
import convertSequelizeModelToPojo from '../util/convertSequelizeModelToPojo.js';

class ShoppingCartProduct {
  constructor({
    shoppingCartProductId,
    shoppingCartId,
    sku,
    quantity,
    createdAt,
    updatedAt,
  }) {
    this.shoppingCartProductId = shoppingCartProductId;
    this.shoppingCartId = shoppingCartId;
    this.sku = sku;
    this.quantity = quantity;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}

const deleteShoppingCartProductsForShoppingCartId = async (shoppingCartId) => {
  const shoppingCartProduct = await shoppingCartProductModel.findOne({
    where: {
      shoppingCartId,
    },
  }) || {};

  await shoppingCartProduct.destroy();

  return new ShoppingCartProduct(convertSequelizeModelToPojo(shoppingCartProduct));
};

const getShoppingCartProductsByShoppingCartId = async (shoppingCartId) => {
  const shoppingCartProduct = await shoppingCartProductModel.findOne({
    where: {
      shoppingCartId,
    },
  }) || {};

  return new ShoppingCartProduct(convertSequelizeModelToPojo(shoppingCartProduct));
};

export {
  deleteShoppingCartProductsForShoppingCartId,
  getShoppingCartProductsByShoppingCartId,
  ShoppingCartProduct,
};
