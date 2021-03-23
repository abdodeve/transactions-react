export const SET_TRANSACTIONS_DATA = "SET_TRANSACTIONS";
export const ADD_TRANSACTIONS = "ADD_TRANSACTION";
export const REMOVE_TRANSACTION = "REMOVE_TRANSACTION";

export type transactionType = {
  id: string | null;
  datetime: string | null;
  amount: string | null;
  type: string | null;
  mode: string | null;
  commentaire: string | null;
};

export interface setTransactionsDataActionType {
  type: typeof SET_TRANSACTIONS_DATA;
  transactions: transactionType[];
}

export interface addTransactionActionType {
  type: typeof ADD_TRANSACTIONS;
  transaction: transactionType;
}

export interface removeTransactionActionType {
  type: typeof REMOVE_TRANSACTION;
  id: string | null;
}

export type Actions =
  | setTransactionsDataActionType
  | addTransactionActionType
  | removeTransactionActionType;
