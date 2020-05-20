import cors from 'cors';
import express from 'express';
import logger from './util/logger/index.js';
import routes from './routes/index.js';

const app = express();

app.use(cors({
  origin: [
    'http://localhost:3000',
    'http://localhost:4200',
  ],
}));

// TODO: Generate Transaction IDs for all incoming requests
app.use((req, res, next) => {
  logger.traffic('requesting', req.path);
  next();
});

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.use(routes);

const errorHandler = (err, req, res, next) => {
  logger.error(err.stack);
  next(err);
};

app.use(errorHandler);

export default app;
