// Manifest shows what products might be on a vehicle in transit. Contains multiple shipments.

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('manifest', {
    manifestId: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    note: Sequelize.STRING(1000),
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
  }, {
    tableName: 'manifest',
    timestamps: true,
  }),
  down: (queryInterface) => queryInterface.dropTable('manifest'),
};
