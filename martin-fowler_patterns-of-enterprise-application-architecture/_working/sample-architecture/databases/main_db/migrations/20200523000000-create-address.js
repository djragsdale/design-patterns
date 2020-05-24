module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('address', {
    addressId: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    isActive: Sequelize.BOOLEAN,
    line1: Sequelize.STRING(100),
    line2: Sequelize.STRING(100),
    city: Sequelize.STRING(100),
    state: Sequelize.STRING(10),
    postal: Sequelize.STRING(10),
    country: Sequelize.STRING(10),
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
  }, {
    tableName: 'address',
    timestamps: true,
  }),
  down: (queryInterface) => queryInterface.dropTable('address'),
};
