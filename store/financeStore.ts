import { create } from "zustand";

type Transaction = {
  id: number;
  title: string;
  category: string;
  amount: number;
  date: string;
};

type FinanceStore = {
  balance: number;

  savings: number;

  australiaFund: number;

  transactions: Transaction[];

  addTransaction: (transaction: Transaction) => void;

  totalExpense: () => number;

  totalIncome: () => number;
};

export const useFinanceStore =
  create<FinanceStore>((set, get) => ({
    balance: 5000000,

    savings: 2300000,

    australiaFund: 1500000,

    transactions: [
      {
        id: 1,
        title: "Coffee",
        category: "Food",
        amount: -30000,
        date: "Today",
      },
      {
        id: 2,
        title: "Fuel",
        category: "Transport",
        amount: -100000,
        date: "Today",
      },
      {
        id: 3,
        title: "Salary",
        category: "Income",
        amount: 4700000,
        date: "Yesterday",
      },
    ],

    addTransaction: (transaction) =>
      set((state) => ({
        transactions: [
          transaction,
          ...state.transactions,
        ],
      })),

    totalExpense: () =>
      get()
        .transactions.filter((t) => t.amount < 0)
        .reduce(
          (sum, item) => sum + Math.abs(item.amount),
          0
        ),

    totalIncome: () =>
      get()
        .transactions.filter((t) => t.amount > 0)
        .reduce(
          (sum, item) => sum + item.amount,
          0
        ),
  }));