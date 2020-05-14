import express from 'express';
import { getProduct } from '../../models/Product.js';

const router = express.Router();

router.get('/getProductBySKU/:sku', async (req, res) => {
  const product = await getProduct(req.params.sku);
  res.json(product);
});

export default router;
