module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('order', {
    orderId: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    userId: {
      allowNull: false,
      type: Sequelize.STRING(100),
    },
    customerId: {
      allowNull: false,
      type: Sequelize.INTEGER,
      references: {
        model: 'customer',
        key: 'customerId',
      },
    },
    paymentMethodId: {
      allowNull: false,
      type: Sequelize.INTEGER,
      references: {
        model: 'paymentMethod',
        key: 'paymentMethodId',
      },
    },
    shippingAddressId: {
      allowNull: false,
      type: Sequelize.INTEGER,
      references: {
        model: 'address',
        key: 'addressId',
      },
    },
    billingAddressId: {
      allowNull: false,
      type: Sequelize.INTEGER,
      references: {
        model: 'address',
        key: 'addressId',
      },
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
    tableName: 'order',
    timestamps: true,
  }),
  down: (queryInterface) => queryInterface.dropTable('order'),
};
