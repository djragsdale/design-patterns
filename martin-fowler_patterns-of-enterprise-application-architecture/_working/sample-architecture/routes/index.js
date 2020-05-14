import express from 'express';

import product from './product/index.js';

const router = express.Router();

router.use(product);

export default router;
