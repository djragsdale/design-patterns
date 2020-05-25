module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('invoiceAccount', {
    invoiceAccountId: {
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
    costCenter: {
      allowNull: false,
      type: Sequelize.STRING(5),
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
    tableName: 'invoiceAccount',
    timestamps: true,
  }),
  down: (queryInterface) => queryInterface.dropTable('invoiceAccount'),
};
