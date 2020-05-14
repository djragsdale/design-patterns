import express from 'express';
import { getProducts } from '../../models/Product.js';

const router = express.Router();

router.get('/getAllProducts', (req, res) => {
  res.json(getProducts());
});

export default router;
