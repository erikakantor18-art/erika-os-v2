import { Budget, Transaction } from "@/types/finance";

const TRANSACTION_KEY = "finance-transactions";
const BUDGET_KEY = "finance-budget";

export function getTransactions(): Transaction[] {
  if (typeof window === "undefined") return [];

  const data = localStorage.getItem(TRANSACTION_KEY);

  return data ? JSON.parse(data) : [];
}

export function saveTransactions(transactions: Transaction[]) {
  localStorage.setItem(
    TRANSACTION_KEY,
    JSON.stringify(transactions)
  );
}
export function replaceTransactions(
  transactions: Transaction[]
) {
  localStorage.setItem(
    TRANSACTION_KEY,
    JSON.stringify(transactions)
  );
}

export function getBudget(): Budget {
  if (typeof window === "undefined") {
    return { monthly: 0 };
  }

  const data = localStorage.getItem(BUDGET_KEY);

  return data ? JSON.parse(data) : { monthly: 0 };
}

export function saveBudget(budget: Budget) {
  localStorage.setItem(
    BUDGET_KEY,
    JSON.stringify(budget)
  );
}