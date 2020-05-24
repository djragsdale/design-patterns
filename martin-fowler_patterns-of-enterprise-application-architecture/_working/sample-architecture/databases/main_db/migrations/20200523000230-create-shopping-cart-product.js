module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('shoppingCartProduct', {
    shoppingCartProductId: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    shoppingCartId: {
      allowNull: false,
      type: Sequelize.INTEGER,
      references: {
        model: 'shoppingCart',
        key: 'shoppingCartId',
      },
    },
    sku: Sequelize.STRING(25),
    quantity: Sequelize.INTEGER,
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
  }, {
    tableName: 'shoppingCartProduct',
    timestamps: true,
  }),
  down: (queryInterface) => queryInterface.dropTable('shoppingCartProduct'),
};
