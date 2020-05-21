module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('paymentType', {
    paymentTypeId: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    name: Sequelize.STRING(100),
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
  }, {
    tableName: 'paymentType',
    timestamps: true,
  }),
  down: (queryInterface) => queryInterface.dropTable('paymentType'),
};
