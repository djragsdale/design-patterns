import inquirer from 'inquirer';

const entities = [
  'Address',
  // 'CreditCard',
  'Customer',
  'CustomerUser',
  // 'Discount',
  // 'InventoryTransaction',
  'Invoice',
  'InvoiceAccount',
  // 'Job',
  // 'Manifest',
  'Order',
  'OrderProduct',
  'Payment',
  'PaymentMethod',
  'PaymentType',
  'Product',
  // 'Shipment',
  'ShoppingCart',
  'ShoppingCartProduct',
  'User',
  // 'UserPermission',
  'Warehouse',
];

export default {
  async run() {
    const { selectedEntity } = await inquirer.prompt([{
      type: 'rawlist',
      name: 'selectedEntity',
      message: 'For which entity would you like a dataview?',
      choices: entities,
    }]);

    await this.IntentManager.callIntent(`${selectedEntity}Intent`);
  },
};
