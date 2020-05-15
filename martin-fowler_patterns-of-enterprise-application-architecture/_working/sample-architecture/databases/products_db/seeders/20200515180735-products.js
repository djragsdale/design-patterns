const faker = require('faker');
const range = require('../../../util/range.cjs');

const staticSeeds = () => [
  {
    sku: 'abc123-def456',
    name: 'My Fake Product',
    description: 'My Fake product is by far the best fake product you could ever have.',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

const dynamicSeeds = (count = 100) => {
  faker.seed(999); // This ensures consistent results

  return range(count).map(() => {
    const productName = faker.commerce.product();

    return {
      // sku: Sequelize.STRING(25),
      sku: faker.random.alphaNumeric(25),
      // name: Sequelize.STRING(100),
      name: productName,
      // description: Sequelize.STRING(255),
      description: `${faker.commerce.productAdjective()} ${faker.commerce.productMaterial()} ${productName}`,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
  });
};

const seeds = [
  ...staticSeeds(),
  ...dynamicSeeds(10),
];

module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert('product', seeds),
  down: async (queryInterface) => queryInterface.bulkDelete('product', null, {}),
};
