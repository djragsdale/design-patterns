
const staticSeeds = () => [
  {
    name: 'Credit Card',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: 'Invoice Account',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: 'ACH',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

const seeds = [
  ...staticSeeds(),
];

module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert('paymentType', seeds),
  down: async (queryInterface) => queryInterface.bulkDelete('paymentType', null, {}),
};
