module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('customer', {
    customerId: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    name: Sequelize.STRING(100),
    description: Sequelize.STRING(255),
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
  }, {
    tableName: 'customer',
    timestamps: true,
  }),
  down: (queryInterface) => queryInterface.dropTable('customer'),
};