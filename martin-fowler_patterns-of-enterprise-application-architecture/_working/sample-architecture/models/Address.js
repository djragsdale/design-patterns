// An Address can be referenced by multiple other models
// E.g. If a shipping address and payment address are the same, they reference the same entity
// Some addresses could reasonably be archived/warehoused down the road. Storage for addresses
// may be distributed, with things like Customer addresses in fast storage while shipping addresses
// over 1 year old go into slow storage.

import addressDBModel from './Address_db_model.js';
import convertSequelizeModelToPojo from '../util/convertSequelizeModelToPojo.js';

export default class Address {
  constructor({
    addressId,
    isActive,
    line1,
    line2,
    city,
    state,
    postal,
    country,
    createdAt,
    updatedAt,
  }) {
    this.addressId = addressId;
    this.isActive = isActive; // (deactivated instead of deleted)
    this.line1 = line1;
    this.line2 = line2;
    this.city = city;
    this.state = state;
    this.postal = postal;
    this.country = country;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}

const getAddress = async (addressId) => {
  const address = await addressDBModel.findOne({
    where: {
      addressId,
    },
  }) || {};

  return new Address(convertSequelizeModelToPojo(address));
};

const getAddresses = async () => {
  const addresses = await addressDBModel.findAll();
  return convertSequelizeModelToPojo(addresses).map((pojo) => new Address(pojo));
};

export {
  getAddress,
  getAddresses,
};
