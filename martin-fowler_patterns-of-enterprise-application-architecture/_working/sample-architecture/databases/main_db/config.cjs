const config = require('../../config.cjs');

const {
  mainDBDatabase,
  mainDBHost,
  mainDBPassword,
  mainDBUser,
} = config();

module.exports = {
  development: {
    username: mainDBUser,
    password: mainDBPassword,
    database: mainDBDatabase,
    host: mainDBHost,
    dialect: 'postgres',
  },
  test: {
    username: mainDBUser,
    password: mainDBPassword,
    database: mainDBDatabase,
    host: mainDBHost,
    dialect: 'postgres',
  },
  production: {
    username: mainDBUser,
    password: mainDBPassword,
    database: mainDBDatabase,
    host: mainDBHost,
    dialect: 'postgres',
  },
};
