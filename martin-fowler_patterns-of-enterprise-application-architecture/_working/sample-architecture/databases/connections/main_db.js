import Sequelize from 'sequelize';

import config from '../../config.cjs';

const {
  mainDBDatabase,
  mainDBHost,
  mainDBPassword,
  mainDBUser,
} = config();

const sequelize = new Sequelize(mainDBDatabase, mainDBUser, mainDBPassword, {
  host: mainDBHost,
  dialect: 'postgres',

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});

export default sequelize;
