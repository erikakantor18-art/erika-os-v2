export type TransactionType = "income" | "expense";

export interface Transaction {
  id: number;
  title: string;
  amount: number;
  category: string;
  type: TransactionType;
  date: string;
}

export interface Budget {
  monthly: number;
}

export interface SavingGoal {
  id: number;
  title: string;
  target: number;
  current: number;
}
export interface TransactionForm {
  title: string;
  amount: string;
  category: string;
  type: TransactionType;
  date: string;
}