import express from 'express';
import { getShoppingCartByUserId } from '../../models/ShoppingCart.js';

const router = express.Router();

router.get('/getShoppingCartByUserId', async (req, res) => {
  const shoppingCart = await getShoppingCartByUserId();
  res.json(shoppingCart);
});

export default router;
