import express from 'express';
import { getProducts } from '../../models/Product.js';

const router = express.Router();

router.get('/getAllProducts', async (req, res) => {
  const products = await getProducts();
  res.json(products);
});

export default router;
