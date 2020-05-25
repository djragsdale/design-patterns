import express from 'express';
import logger from '../../util/logger/index.js';
import { getOrdersByCustomerId } from '../../models/Order.js';

const router = express.Router();

const baseRoute = 'getOrdersByCustomerId';

router.get(`/${baseRoute}/:customerId`, async (req, res) => {
  const orders = await getOrdersByCustomerId(req.params.customerId);

  if (!orders) {
    logger.traffic(`404 not found ${req.path}`);
    return res.status(404).end();
  }

  logger.traffic(`responding ${req.path}`, orders.length);
  return res.json(orders);
});

export default router;
