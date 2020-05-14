import express from 'express';
import { getProduct } from '../../models/Product.js';

const router = express.Router();

router.get('/getProductBySKU/:sku', (req, res) => {
  res.json(getProduct(req.params.sku));
});

export default router;
