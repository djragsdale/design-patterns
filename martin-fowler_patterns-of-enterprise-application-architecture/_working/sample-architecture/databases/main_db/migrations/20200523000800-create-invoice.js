module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('invoice', {
    invoiceId: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    invoiceAccountId: {
      allowNull: false,
      type: Sequelize.INTEGER,
      references: {
        model: 'invoiceAccount',
        key: 'invoiceAccountId',
      },
    },
    invoiceDocumentURL: Sequelize.STRING(255),
    subtotalAmount: Sequelize.DOUBLE,
    taxAmount: Sequelize.DOUBLE,
    // totalAmount is calculated
    dueBy: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    paidOn: {
      allowNull: false,
      type: Sequelize.DATE,
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
    tableName: 'invoice',
    timestamps: true,
  }),
  down: (queryInterface) => queryInterface.dropTable('invoice'),
};
