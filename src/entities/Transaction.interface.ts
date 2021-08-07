export interface BaseTransaction {
  fromId: string;
  toId: string;
  amount: number;
}

export interface Transaction extends BaseTransaction {
  id: number;
}

/**
 * A bunch of elements of type Transaction
 */
export interface Transactions {
  [key: number]: Transaction;
}
