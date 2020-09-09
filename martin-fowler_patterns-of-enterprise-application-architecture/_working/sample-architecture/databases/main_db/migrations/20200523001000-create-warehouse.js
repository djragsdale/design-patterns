// Warehouse is the physical warehouse where products are stored long term. Relates to Address.
// The items within a warehouse can be queried by joining inventory transactions to the warehouse
// and products. Adjusting entries can therefore be added to Inventory Transaction when a warehouse
// count is performed. Every location where products reside are a warehouse, including store
// stockrooms or with salespeople. We really need to use materialized views (done in a transaction
// block) in order to query warehouse contents over time.

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('warehouse', {
    warehouseId: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    name: Sequelize.STRING(100),
    description: Sequelize.STRING(255),
    addressId: {
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
    tableName: 'warehouse',
    timestamps: true,
  }),
  down: (queryInterface) => queryInterface.dropTable('warehouse'),
};
