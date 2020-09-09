// Shipment is the item that is in transit. Relates to Products, Manifest, and Inventory
// Transaction.

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('shipment', {
    shipmentId: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    sku: Sequelize.STRING(25),
    inventoryTransactionId: {
      allowNull: false,
      type: Sequelize.INTEGER,
      references: {
        model: 'inventoryTransaction',
        key: 'inventoryTransactionId',
      },
    },
    manifestId: {
      allowNull: false,
      type: Sequelize.INTEGER,
      references: {
        model: 'manifest',
        key: 'manifestId',
      },
    },
    destinationAddressId: {
      allowNull: false,
      type: Sequelize.INTEGER,
      references: {
        model: 'address',
        key: 'addressId',
      },
    },
    deliveryConfirmedAt: Sequelize.DATE,
    deliveryConfirmedBy: Sequelize.STRING(100),
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
  }, {
    tableName: 'shipment',
    timestamps: true,
  }),
  down: (queryInterface) => queryInterface.dropTable('shipment'),
};
