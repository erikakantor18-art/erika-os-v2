"use client";

import { useMemo, useState } from "react";

import DashboardLayout from "@/components/layout/DashboardLayout";
import PageHeader from "@/components/common/PageHeader";
import { exportTransactionsToExcel } from "@/lib/exportExcel";
import SummaryCards from "@/components/finance/SummaryCards";
import ExportButtons from "@/components/finance/ExportButtons";
import SearchFilter from "@/components/finance/SearchFilter";
import TransactionTable from "@/components/finance/TransactionTable";
import TransactionModal from "@/components/finance/TransactionModal";
import BudgetCard from "@/components/finance/BudgetCard";
import SavingGoals from "@/components/finance/SavingGoals";
import Charts from "@/components/finance/Charts";
import AnalyticsCard from "@/components/finance/AnalyticsCard";
import CashFlow from "@/components/finance/CashFlow";
import Achievement from "@/components/finance/Achievement";
import FinancialHealth from "@/components/finance/FinancialHealth";
import BudgetModal from "@/components/finance/BudgetModal";
import { useFinance } from "@/hooks/useFinance";

import {
  SavingGoal,
  Transaction,
  TransactionForm,
} from "@/types/finance";

export default function FinancePage() {
  const {
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
} = useFinance();

  const categories = [
    "Food",
    "Transport",
    "Shopping",
    "Entertainment",
    "Bills",
    "Education",
    "Health",
    "Salary",
    "Investment",
    "Other",
  ];

  const [search, setSearch] = useState("");

  const [filter, setFilter] = useState("All");

  const [openModal, setOpenModal] = useState(false);
  const [openBudgetModal, setOpenBudgetModal] =
  useState(false);
  const [editId, setEditId] = useState<number | null>(null);

  const [form, setForm] = useState<TransactionForm>({
    title: "",
    amount: "",
    category: categories[0],
    type: "expense",
    date: new Date().toISOString().slice(0, 10),
  });

  const [goals] = useState<SavingGoal[]>([
    {
      id: 1,
      title: "Australia Fund",
      target: 50000000,
      current: 8000000,
    },
    {
      id: 2,
      title: "Emergency Fund",
      target: 15000000,
      current: 4000000,
    },
    {
      id: 3,
      title: "New Tablet",
      target: 9000000,
      current: 2500000,
    },
  ]);

  const filteredTransactions = useMemo(() => {
    return transactions.filter((item) => {
      const matchSearch =
        item.title.toLowerCase().includes(search.toLowerCase()) ||
        item.category.toLowerCase().includes(search.toLowerCase());

      const matchFilter =
        filter === "All" ? true : item.category === filter;

      return matchSearch && matchFilter;
    });
  }, [transactions, search, filter]);

  const expenseChart = useMemo(() => {
    const result: Record<string, number> = {};

    transactions
      .filter((item) => item.type === "expense")
      .forEach((item) => {
        result[item.category] =
          (result[item.category] || 0) + item.amount;
      });

    return Object.entries(result).map(([name, value]) => ({
      name,
      value,
    }));
  }, [transactions]);

  function resetForm() {
    setEditId(null);

    setForm({
      title: "",
      amount: "",
      category: categories[0],
      type: "expense",
      date: new Date().toISOString().slice(0, 10),
    });
  }

  function openAddModal() {
    resetForm();
    setOpenModal(true);
  }

  function closeModal() {
    resetForm();
    setOpenModal(false);
  }

  function editTransaction(item: Transaction) {
    setEditId(item.id);

    setForm({
      title: item.title,
      amount: item.amount.toString(),
      category: item.category,
      type: item.type,
      date: item.date,
    });

    setOpenModal(true);
  }

  function saveTransaction() {
    if (!form.title.trim()) return;

    const data = {
      title: form.title,
      amount: Number(form.amount),
      category: form.category,
      type: form.type,
      date: form.date,
    };

    if (editId !== null) {
      updateTransaction(editId, data);
    } else {
      addTransaction(data);
    }

    closeModal();
  }

  function exportExcel() {
  exportTransactionsToExcel(
    filteredTransactions
  );
}

  function exportJSON() {
    const blob = new Blob(
      [JSON.stringify(transactions, null, 2)],
      {
        type: "application/json",
      }
    );

    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");

    a.href = url;

    a.download = "finance-backup.json";

    a.click();

    URL.revokeObjectURL(url);
  }

  function importJSON(
  e: React.ChangeEvent<HTMLInputElement>
) {
  const file = e.target.files?.[0];

  if (!file) return;

  const reader = new FileReader();

  reader.onload = () => {
    try {
      const data = JSON.parse(
        reader.result as string
      ) as Transaction[];

      importTransactions(data);

      alert("Restore berhasil.");
    } catch {
      alert("Format JSON tidak valid.");
    }
  };

  reader.readAsText(file);
}
    return (
    <DashboardLayout title="Finance">

      <PageHeader
        title="Finance Dashboard"
        subtitle="Manage your income, expenses and savings."
        buttonText="+ Add Transaction"
        onClick={openAddModal}
      />

      <div className="mt-8 space-y-8">

        <SummaryCards
          income={income}
          expense={expense}
          balance={balance}
        />

        <ExportButtons
          exportExcel={exportExcel}
          exportJSON={exportJSON}
          importJSON={importJSON}
        />

        <SearchFilter
          search={search}
          setSearch={setSearch}
          filter={filter}
          setFilter={setFilter}
          categories={[
            "All",
            ...categories,
          ]}
        />

        <TransactionTable
          transactions={filteredTransactions}
          onEdit={editTransaction}
          onDelete={deleteTransaction}
        />

        <div className="grid gap-6 lg:grid-cols-2">

          <BudgetCard
            budget={budget.monthly}
            expense={expense}
            onEdit={() =>
            setOpenBudgetModal(true)
            } 
          />

          <SavingGoals
            goals={goals}
          />

        </div>

        <Charts
          expenseChart={expenseChart}
          income={income}
          expense={expense}
        />

        <AnalyticsCard
          transactions={transactions.length}
          income={income}
          expense={expense}
        />

        <div className="grid gap-6 lg:grid-cols-2">

          <CashFlow
            income={income}
            expense={expense}
            balance={balance}
          />

          <Achievement
            income={income}
            expense={expense}
            transactions={
              transactions.length
            }
          />

        </div>

        <FinancialHealth
          income={income}
          expense={expense}
          balance={balance}
        />

      </div>

      <TransactionModal
        open={openModal}
        editId={editId}
        form={form}
        categories={categories}
        setForm={setForm}
        onClose={closeModal}
        onSubmit={saveTransaction}
      />
      <BudgetModal
        open={openBudgetModal}
        currentBudget={budget.monthly}
        onClose={() =>
          setOpenBudgetModal(false)
        }
        onSave={setBudget}
      />

    </DashboardLayout>
  );
}