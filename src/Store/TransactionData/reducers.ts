import {
  SET_TRANSACTIONS_DATA,
  ADD_TRANSACTIONS,
  REMOVE_TRANSACTION,
  transactionType,
  Actions,
} from "./types";

const initialState: transactionType[] = [];

export const TransactionReducer = (state = initialState, action: Actions) => {
  switch (action.type) {
    case SET_TRANSACTIONS_DATA:
      return [...state, ...action.transactions];
    case ADD_TRANSACTIONS:
      return [action.transaction, ...state];
    case REMOVE_TRANSACTION:
      return state.filter((el) => el.id !== action.id);
    default:
      return state;
  }
};
