export enum Operations {
  GET = "GET",
  UPDATE = "UPDATE",
  DELETE = "DELETE",
  ADD = "ADD",
}

export interface BaseTransaction {
  fromId: string;
  toId: string;
  amount: number;
}

export interface Transaction extends BaseTransaction {
  id: number;
}
