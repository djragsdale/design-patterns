module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('customerUser', {
    customerUserId: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    customerId: {
      allowNull: false,
      type: Sequelize.INTEGER,
      references: {
        model: 'customer',
        key: 'customerId',
      },
    },
    userId: {
      allowNull: false,
      type: Sequelize.STRING(100),
    },
    isActive: {
      allowNull: false,
      type: Sequelize.BOOLEAN,
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
    tableName: 'customerUser',
    timestamps: true,
  }),
  down: (queryInterface) => queryInterface.dropTable('customerUser'),
};
