"use client";

import { useEffect, useMemo, useState } from "react";

import {
  Transaction,
  Budget,
} from "@/types/finance";

import {
  getTransactions,
  saveTransactions,
  replaceTransactions,
  getBudget,
  saveBudget,
} from "@/lib/financeStorage";

export function useFinance() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [budget, setBudgetState] = useState<Budget>({
    monthly: 0,
  });

  useEffect(() => {
    setTransactions(getTransactions());
    setBudgetState(getBudget());
  }, []);

  const income = useMemo(
    () =>
      transactions
        .filter((t) => t.type === "income")
        .reduce((sum, t) => sum + t.amount, 0),
    [transactions]
  );

  const expense = useMemo(
    () =>
      transactions
        .filter((t) => t.type === "expense")
        .reduce((sum, t) => sum + t.amount, 0),
    [transactions]
  );

  const balance = income - expense;

  function addTransaction(
    data: Omit<Transaction, "id">
  ) {
    const newItem: Transaction = {
      id: Date.now(),
      ...data,
    };

    const updated = [newItem, ...transactions];

    setTransactions(updated);
    saveTransactions(updated);
  }

  function updateTransaction(
    id: number,
    data: Omit<Transaction, "id">
  ) {
    const updated = transactions.map((item) =>
      item.id === id
        ? {
            id,
            ...data,
          }
        : item
    );

    setTransactions(updated);
    saveTransactions(updated);
  }

  function deleteTransaction(id: number) {
    const updated = transactions.filter(
      (item) => item.id !== id
    );

    setTransactions(updated);
    saveTransactions(updated);
  }
  function importTransactions(
  data: Transaction[]
) {
  setTransactions(data);

  replaceTransactions(data);
}

  function setBudget(monthly: number) {
    const newBudget = {
      monthly,
    };

    setBudgetState(newBudget);

    saveBudget(newBudget);
  }

  return {
  transactions,

  income,
  expense,
  balance,

  budget,

  addTransaction,
  updateTransaction,
  deleteTransaction,

  importTransactions,

  setBudget,
};
}