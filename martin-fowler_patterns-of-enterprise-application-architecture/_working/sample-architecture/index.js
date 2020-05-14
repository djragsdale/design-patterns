import express from 'express';
import logger from './util/logger/index.js';

const app = express();

// TODO: Generate Transaction IDs for all incoming requests
app.use((req, res, next) => {
  logger.traffic('requesting', req.path);
  next();
});

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

const errorHandler = (err, req, res, next) => {
  logger.error(err.stack);
  next(err);
};

app.use(errorHandler);

export default app;
