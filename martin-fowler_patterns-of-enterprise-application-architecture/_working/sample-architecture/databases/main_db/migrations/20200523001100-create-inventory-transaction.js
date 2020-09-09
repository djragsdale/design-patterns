// Inventory Transaction is a historical record of products being delivered to warehouses and sent
// from warehouses. If the product is sent from a warehouse, it should include the shipmentId. A
// negative quantity suggests the transaction is outgoing and a positive quantity suggests it is 
// incoming.

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('inventoryTransaction', {
    inventoryTransactionId: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    warehouseId: {
      allowNull: false,
      type: Sequelize.INTEGER,
      references: {
        model: 'warehouse',
        key: 'warehouseId',
      },
    },
    quantity: {
      allowNull: false,
      type: Sequelize.INTEGER, // Signed
    },
    note: Sequelize.STRING(1000),
    createdAt: {
      allowNull: false,
      // TODO: Do I need this defaultValue in order for timestamps to work properly?
      defaultValue: Sequelize.NOW,
      type: Sequelize.DATE,
    },
    updatedAt: {
      allowNull: false,
      defaultValue: Sequelize.NOW,
      type: Sequelize.DATE,
    },
  }, {
    tableName: 'inventoryTransaction',
    timestamps: true,
  }),
  down: (queryInterface) => queryInterface.dropTable('inventoryTransaction'),
};
