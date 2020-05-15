const config = require('../../config.cjs');

const {
  productDBDatabase,
  productDBHost,
  productDBPassword,
  productDBUser,
} = config();

module.exports = {
  development: {
    username: productDBUser,
    password: productDBPassword,
    database: productDBDatabase,
    host: productDBHost,
    dialect: 'mysql',
  },
  test: {
    username: productDBUser,
    password: productDBPassword,
    database: productDBDatabase,
    host: productDBHost,
    dialect: 'mysql',
  },
  production: {
    username: productDBUser,
    password: productDBPassword,
    database: productDBDatabase,
    host: productDBHost,
    dialect: 'mysql',
  },
};
