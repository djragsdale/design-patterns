// A PaymentMethod belongs to a customer
// Each PaymentMethod is assigned a PaymentType
// Since each PaymentMethod has different attributes, these are all stored in separate tables
// This model knows about each PaymentMethod, and can be used generically to process payment
// methods without the user caring out what payment methods are provided.
// There is no paymentMethod table, or if there is it is merely an association table of
// payment type to the respective tables
