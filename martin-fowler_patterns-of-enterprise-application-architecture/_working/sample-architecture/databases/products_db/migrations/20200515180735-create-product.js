module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('product', {
    productId: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    sku: {
      allowNull: false,
      type: Sequelize.STRING(25),
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
    tableName: 'product',
    timestamps: true,
  }),
  down: (queryInterface) => queryInterface.dropTable('product'),
};
