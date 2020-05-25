import express from 'express';
import { getWarehouses } from '../../models/Warehouse.js';

const router = express.Router();

router.get('/getAllWarehouses', async (req, res) => {
  const warehouses = await getWarehouses();
  res.json(warehouses);
});

export default router;
