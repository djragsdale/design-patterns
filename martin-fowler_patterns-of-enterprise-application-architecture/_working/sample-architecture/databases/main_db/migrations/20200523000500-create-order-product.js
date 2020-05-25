module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('orderProduct', {
    orderProductId: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    orderId: {
      allowNull: false,
      type: Sequelize.INTEGER,
      references: {
        model: 'order',
        key: 'orderId',
      },
    },
    sku: Sequelize.STRING(25),
    quantity: Sequelize.INTEGER,
    unitCost: Sequelize.DOUBLE,
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
  }, {
    tableName: 'orderProduct',
    timestamps: true,
  }),
  down: (queryInterface) => queryInterface.dropTable('orderProduct'),
};
