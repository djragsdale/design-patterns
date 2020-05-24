module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('shoppingCart', {
    shoppingCartId: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    userId: {
      allowNull: false,
      type: Sequelize.STRING(100),
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
  }, {
    tableName: 'shoppingCart',
    timestamps: true,
  }),
  down: (queryInterface) => queryInterface.dropTable('shoppingCart'),
};
