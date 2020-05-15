// Long-term I'd like to embrace 12-factor config for this

const config = {
  development: {
    logLevel: parseInt(process.env.LOG_LEVEL || 3, 10),
    port: process.env.PORT || '8080',
    productDBDatabase: 'products_db',
    productDBHost: 'localhost',
    productDBPassword: process.env.PRODUCT_DB_PASSWORD || 'password',
    productDBUser: process.env.PRODUCT_DB_USER || 'dev',
  },
  test: {
    logLevel: -1,
    port: process.env.PORT,
    productDBDatabase: 'products_db',
    productDBHost: process.env.PRODUCT_DB_HOST,
    productDBPassword: process.env.PRODUCT_DB_PASSWORD,
    productDBUser: process.env.PRODUCT_DB_USER,
  },
  production: {
    logLevel: parseInt(process.env.LOG_LEVEL || 1, 10),
    port: process.env.PORT,
    productDBDatabase: 'products_db',
    productDBHost: process.env.PRODUCT_DB_HOST,
    productDBPassword: process.env.PRODUCT_DB_PASSWORD,
    productDBUser: process.env.PRODUCT_DB_USER,
  },
};

// This must use CJS exports
module.exports = function getEnvironmentConfig(environment) {
  const env = environment || process.env.NODE_ENV || 'development';

  return config[env];
};
