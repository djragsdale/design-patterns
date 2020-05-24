const staticSeeds = () => [
  {
    paymentTypeId: 1,
    name: 'Fake Credit Card',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    paymentTypeId: 2,
    name: 'Fake Invoice Account',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    paymentTypeId: 3,
    name: 'Fake ACH',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

const seeds = [
  ...staticSeeds(),
];

module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert('paymentMethod', seeds),
  down: async (queryInterface) => queryInterface.bulkDelete('paymentMethod', null, {}),
};
