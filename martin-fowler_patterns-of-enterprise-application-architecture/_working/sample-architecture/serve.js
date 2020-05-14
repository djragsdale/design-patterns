import config from './config.js';
import app from './index.js';
import logger from './util/logger/index.js';

const { port } = config();

logger.log(`Your app is now listening on port ${port}`);
app.listen(port);
