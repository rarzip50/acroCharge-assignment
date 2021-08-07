export interface Customer {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  gender: string;
  country: string;
  city: string;
  street: string;
  phone: string;
  totalPrice: number;
  currency: string;
  creditCardType: string;
  creditCardNumber: string;
}

/**
 * A bunch of elements of type Customer
 */
export interface Customers {
  [key: number]: Customer;
}
