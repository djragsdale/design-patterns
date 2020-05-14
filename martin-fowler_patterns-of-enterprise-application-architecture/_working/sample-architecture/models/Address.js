// An Address can be referenced by multiple other models
// E.g. If a shipping address and payment address are the same, they reference the same entity
// Some addresses could reasonably be archived/warehoused down the road. Storage for addresses
// may be distributed, with things like Customer addresses in fast storage while shipping addresses
// over 1 year old go into slow storage.
