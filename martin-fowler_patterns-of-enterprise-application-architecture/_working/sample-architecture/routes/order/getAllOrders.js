import express from 'express';
import { getOrders } from '../../models/Order.js';

const router = express.Router();

router.get('/getAllOrders', async (req, res) => {
  const orders = await getOrders();
  res.json(orders);
});

export default router;
