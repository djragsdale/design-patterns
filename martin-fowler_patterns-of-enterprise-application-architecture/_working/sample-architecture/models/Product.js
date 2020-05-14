// All Products have a SKU
// This SKU is used to communicate between data sources

const model = {
  productID: {
    type: 'integer',
  },
  sku: {
    type: 'varchar',
    length: 25,
  },
  name: {
    type: 'varchar',
    length: 50,
  },
  description: {
    type: 'varchar',
    length: 255,
  },
};

const mockProduct = {
  productID: 1,
  sku: 'abc123-def456',
  name: 'My Fake Product',
  description: 'My Fake Product is the best fake product you could ever have.',
};

const getProduct = (sku) => mockProduct;
const getProducts = () => [mockProduct];

export {
  getProduct,
  getProducts,
};
