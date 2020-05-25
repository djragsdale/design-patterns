import express from 'express';
import logger from '../../util/logger/index.js';
import { getOrdersByUserId } from '../../models/Order.js';

const router = express.Router();

const baseRoute = 'getOrdersByUserId';

router.get(`/${baseRoute}/:userId`, async (req, res) => {
  const orders = await getOrdersByUserId(req.params.userId);

  if (!orders) {
    logger.traffic(`404 not found ${req.path}`);
    return res.status(404).end();
  }

  logger.traffic(`responding ${req.path}`, orders.length);
  return res.json(orders);
});

export default router;
