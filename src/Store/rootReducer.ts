import { combineReducers } from "redux";
import { TransactionReducer } from "./TransactionData/reducers";

export const rootReducer = combineReducers({
  TransactionStore: TransactionReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
