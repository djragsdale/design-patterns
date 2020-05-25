import express from 'express';
import { getShoppingCarts } from '../../models/ShoppingCart.js';

const router = express.Router();

router.get('/getAllShoppingCarts', async (req, res) => {
  const shoppingCart = await getShoppingCarts();
  res.json(shoppingCart);
});

export default router;
