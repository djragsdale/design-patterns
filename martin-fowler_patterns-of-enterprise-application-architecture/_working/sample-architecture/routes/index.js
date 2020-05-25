import express from 'express';

import address from './address/index.js';
import customer from './customer/index.js';
import invoice from './invoice/index.js';
import invoiceAccount from './invoiceAccount/index.js';
import order from './order/index.js';
import payment from './payment/index.js';
import paymentMethod from './paymentMethod/index.js';
import paymentType from './paymentType/index.js';
import product from './product/index.js';
import shoppingCart from './shoppingCart/index.js';
import warehouse from './warehouse/index.js';

const router = express.Router();

router.use(address);
router.use(customer);
router.use(invoice);
router.use(invoiceAccount);
router.use(order);
router.use(payment);
router.use(paymentMethod);
router.use(paymentType);
router.use(product);
router.use(shoppingCart);
router.use(warehouse);

export default router;
