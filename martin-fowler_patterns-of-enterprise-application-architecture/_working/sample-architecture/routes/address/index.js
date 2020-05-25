import express from 'express';

import getAllAddresses from './getAllAddresses.js';

const addressBase = express.Router();

addressBase.use('/address', [
  getAllAddresses,
]);

export default addressBase;
