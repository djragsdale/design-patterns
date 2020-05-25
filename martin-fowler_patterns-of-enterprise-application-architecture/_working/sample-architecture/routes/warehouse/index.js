import express from 'express';

import getAllWarehouses from './getAllWarehouses.js';

const warehouseBase = express.Router();

warehouseBase.use('/warehouse', [
  getAllWarehouses,
]);

export default warehouseBase;
