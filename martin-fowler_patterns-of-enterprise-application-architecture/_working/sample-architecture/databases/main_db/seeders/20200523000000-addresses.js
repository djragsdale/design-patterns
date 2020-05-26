const faker = require('faker');
const range = require('../../../util/range.cjs');

const staticSeeds = () => [
  {
    isActive: true,
    line1: '123 Main St.',
    city: 'Indianapolis',
    state: 'IN',
    postal: '46201',
    country: 'USA',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

const dynamicSeeds = (count = 100) => {
  faker.seed(999); // This ensures consistent results

  return range(count).map((idx) => ({
    // isActive: Sequelize.BOOLEAN,
    isActive: idx % 4 > 0,
    // line1: Sequelize.STRING(100),
    line1: `${faker.address.streetAddress()} ${faker.address.streetName()} ${faker.address.streetSuffix()}`,
    // line2: Sequelize.STRING(100),
    line2: (idx % 7 > 0) ? undefined : faker.address.secondaryAddress(),
    // city: Sequelize.STRING(100),
    city: faker.address.city(),
    // state: Sequelize.STRING(10),
    state: faker.address.stateAbbr(),
    // postal: Sequelize.STRING(10),
    postal: faker.address.zipCode(),
    // country: Sequelize.STRING(10),
    country: 'USA',
    createdAt: new Date(),
    updatedAt: new Date(),
  }));
};

const seeds = [
  ...staticSeeds(),
  ...dynamicSeeds(100),
];

module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert('address', seeds),
  down: async (queryInterface) => queryInterface.bulkDelete('address', null, {}),
};
