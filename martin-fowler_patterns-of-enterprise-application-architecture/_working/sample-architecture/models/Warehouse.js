// A warehouse stores inventory
// Calculating warehouse stock for each product SKU will get time consuming over time so these
// calculations will probably be scheduled as batch jobs, augmented by audits
// Audits and materialized calculations are out of scope but may change over time.

import warehouseModel from './Warehouse_db_model.js';
import convertSequelizeModelToPojo from '../util/convertSequelizeModelToPojo.js';

class Warehouse {
  constructor({
    warehouseId,
    name,
    description,
    createdAt,
    updatedAt,
  }) {
    this.warehouseId = warehouseId;
    this.name = name;
    this.description = description;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}

const getWarehouses = async () => {
  const warehouses = await warehouseModel.findAll();
  return convertSequelizeModelToPojo(warehouses).map((pojo) => new Warehouse(pojo));
};

export {
  getWarehouses,
  Warehouse,
};
