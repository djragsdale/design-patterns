import express from 'express';

import address from './address/index.js';
import customer from './customer/index.js';
import order from './order/index.js';
import paymentMethod from './paymentMethod/index.js';
import paymentType from './paymentType/index.js';
import product from './product/index.js';
import shoppingCart from './shoppingCart/index.js';

const router = express.Router();

router.use(address);
router.use(customer);
router.use(order);
router.use(paymentMethod);
router.use(paymentType);
router.use(product);
router.use(shoppingCart);

export default router;
