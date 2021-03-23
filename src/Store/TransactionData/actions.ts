import {
  SET_TRANSACTIONS_DATA,
  ADD_TRANSACTIONS,
  REMOVE_TRANSACTION,
  transactionType,
  setTransactionsDataActionType,
  addTransactionActionType,
  removeTransactionActionType,
} from "./types";

export const setTransactionsAction = (
  transactions: transactionType[]
): setTransactionsDataActionType => ({
  type: SET_TRANSACTIONS_DATA,
  transactions,
});

export const addTransactionAction = (
  transaction: transactionType
): addTransactionActionType => ({
  type: ADD_TRANSACTIONS,
  transaction,
});

export const removeTransactionAction = (
  id: string | null
): removeTransactionActionType => ({
  type: REMOVE_TRANSACTION,
  id,
});
