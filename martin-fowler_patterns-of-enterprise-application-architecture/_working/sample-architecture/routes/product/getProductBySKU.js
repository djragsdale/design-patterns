import express from 'express';
import logger from '../../util/logger/index.js';
import { getProduct } from '../../models/Product.js';

const router = express.Router();

const baseRoute = 'getProductBySKU';

router.get(`/${baseRoute}/:sku`, async (req, res) => {
  const product = await getProduct(req.params.sku);

  if (!product) {
    logger.traffic(`404 not found ${req.path}`);
    return res.status(404).end();
  }

  logger.traffic(`responding ${req.path}`, product.productId);
  return res.json(product);
});

export default router;
