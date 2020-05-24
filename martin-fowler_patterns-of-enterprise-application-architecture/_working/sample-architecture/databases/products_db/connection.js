import Sequelize from 'sequelize';

import config from '../../config.cjs';

const {
  productDBDatabase,
  productDBHost,
  productDBPassword,
  productDBUser,
} = config();

const sequelize = new Sequelize(productDBDatabase, productDBUser, productDBPassword, {
  host: productDBHost,
  dialect: 'mysql',

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});

export default sequelize;
