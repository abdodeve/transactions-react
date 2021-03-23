// import React from "react";
import data from "../dummy-data/transactions-data.json";
import { transactionType } from "./../Store/TransactionData/types";

export const readJson = () => {
  return data.transactions;
};

export const debits = (transactionStore: transactionType[]) => {
  let total = 0;
  for (let el of transactionStore) {
    if (el.type == "débit") {
      total += Number(el.amount);
    }
  }
  return total.toFixed(2);
};

export const credits = (transactionStore: transactionType[]) => {
  let total = 0;
  for (let el of transactionStore) {
    if (el.type == "crédit") {
      total += Number(el.amount);
    }
  }
  return total.toFixed(2);
};

export const total = (transactionStore: transactionType[]) => {
  let total =
    Number(debits(transactionStore)) + Number(credits(transactionStore));
  return total.toFixed(2);
};
