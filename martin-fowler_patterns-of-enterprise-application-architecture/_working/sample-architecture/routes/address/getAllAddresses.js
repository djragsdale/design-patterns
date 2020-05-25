import express from 'express';
import { getAddresses } from '../../models/Address.js';

const router = express.Router();

router.get('/getAllAddresses', async (req, res) => {
  const addresses = await getAddresses();
  res.json(addresses);
});

export default router;
