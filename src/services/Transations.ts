/**
 * Data Model Interfaces
 */
import {
  Transaction,
  Transactions,
  BaseTransaction,
} from "../entities/Transaction.interface";

/**
 * In-Memory Store - TODO Temp until db
 */

let transactions: Transactions = {
  1: {
    amount: 1000,
    fromId: "1",
    toId: "2",
    id: 1,
  },
  2: {
    amount: 500,
    fromId: "2",
    toId: "1",
    id: 2,
  },
  3: {
    amount: 1000.5,
    fromId: "1",
    toId: "3",
    id: 3,
  },
};

/**
 * Service Methods
 */

export const findAll = async (): Promise<Transaction[]> =>
  Object.values(transactions);

export const find = async (id: number): Promise<Transaction> =>
  transactions[id];

export const create = async (
  newTransaction: BaseTransaction
): Promise<Transaction> => {
  const id = new Date().valueOf();

  transactions[id] = {
    id,
    ...newTransaction,
  };

  return transactions[id];
};

export const update = async (
  id: number,
  transactionUpdate: BaseTransaction
): Promise<Transaction | null> => {
  const transaction = await find(id);

  if (!transaction) {
    return null;
  }

  transactions[id] = { ...transaction, ...transactionUpdate };

  return transactions[id];
};

export const remove = async (id: number): Promise<null | void> => {
  const transaction = await find(id);

  if (!transaction) {
    return null;
  }

  delete transactions[id];
};
