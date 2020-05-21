import express from 'express';

import paymentType from './paymentType/index.js';
import product from './product/index.js';

const router = express.Router();

router.use(paymentType);
router.use(product);

export default router;
