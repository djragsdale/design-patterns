import inquirer from 'inquirer';

import { getCustomers } from '../../../../models/Customer.js';

const displayCustomerShort = (customer) => `| ${customer.name} | ${customer.description} |`;
const displayCustomerLong = (customer) => Object.entries(customer).map(([key, val]) => `${key}: ${val}\n`).join('');

let individualCustomerAction;
const selectCustomer = async (customers) => {
  const { selectedCustomerId } = await inquirer.prompt([{
    type: 'list',
    name: 'selectedCustomerId',
    message: 'Which customer?',
    choices: [
      {
        value: '-1',
        short: 'Back',
        name: 'Go Back',
      },
      ...customers.map((customer) => ({
        value: customer.customerId,
        short: customer.name,
        name: displayCustomerShort(customer),
      })),
    ],
  }]);

  if (selectedCustomerId < 1) {
    return null;
  }

  await individualCustomerAction(customers.find((customer) => (
    customer.customerId === selectedCustomerId
  )));

  return selectCustomer(customers);
};

individualCustomerAction = async (customer) => {
  const { customerAction } = await inquirer.prompt([{
    type: 'list',
    name: 'customerAction',
    message: 'What would you like to do?',
    choices: [
      {
        name: 'View',
      },
      {
        name: 'Edit',
      },
      {
        name: 'Go Back',
      },
    ],
  }]);

  if (customerAction === 'View') {
    console.log(displayCustomerLong(customer));

    await individualCustomerAction(customer);
  } else if (customerAction === 'Go Back') {
    return null;
  }
};

export default {
  async setup() {
    this.state.customers = await getCustomers();
  },
  async run() {
    // console.log('found customers', this.state.customers.map(displayCustomer));

    await selectCustomer(this.state.customers);
  },

};
