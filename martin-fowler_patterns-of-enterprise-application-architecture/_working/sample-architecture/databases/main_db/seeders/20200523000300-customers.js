const faker = require('faker');
const range = require('../../../util/range.cjs');

const staticSeeds = () => [
  {
    name: 'Customer One',
    description: 'A customer that buys stuff',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: 'Customer Two',
    description: 'A second customer that buys stuff',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: 'Customer Three',
    description: 'A third customer that buys stuff',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

const dynamicSeeds = (count = 100) => {
  faker.seed(999); // This ensures consistent results

  return range(count).map(() => ({
    // name: Sequelize.STRING(100),
    name: faker.company.companyName(),
    // description: Sequelize.STRING(255),
    description: faker.company.catchPhrase(),
    createdAt: new Date(),
    updatedAt: new Date(),
  }));
};

const seeds = [
  ...staticSeeds(),
  ...dynamicSeeds(100),
];

module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert('customer', seeds),
  down: async (queryInterface) => queryInterface.bulkDelete('customer', null, {}),
};
