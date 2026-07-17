"use client";

import { AlertTriangle, Wallet } from "lucide-react";

interface Props {
  budget: number;
  expense: number;
  onEdit: () => void;
}

export default function BudgetCard({
  budget,
  expense,
  onEdit,
}: Props) {
  const percent =
    budget === 0
      ? 0
      : Math.min((expense / budget) * 100, 100);

  const remaining = budget - expense;

  const color =
    percent >= 100
      ? "bg-red-500"
      : percent >= 80
      ? "bg-yellow-500"
      : "bg-emerald-500";

  return (
    <div className="rounded-3xl border bg-white p-6 shadow-sm">

      <div className="flex items-center justify-between">

        <div>

          <h2 className="text-xl font-bold">
            Monthly Budget
          </h2>

          <p className="text-sm text-gray-500">
            Control your spending
          </p>

        </div>

        <button
          onClick={onEdit}
          className="rounded-xl bg-black px-4 py-2 text-white hover:opacity-90"
        >
          Edit Budget
        </button>

      </div>

      <div className="mt-8 flex items-center gap-4">

        <div className="rounded-2xl bg-blue-100 p-4">

          <Wallet
            size={34}
            className="text-blue-700"
          />

        </div>

        <div>

          <h3 className="text-3xl font-bold">

            Rp {budget.toLocaleString()}

          </h3>

          <p className="text-gray-500">

            Monthly Budget

          </p>

        </div>

      </div>

      <div className="mt-8">

        <div className="mb-3 flex justify-between">

          <span>

            Used Budget

          </span>

          <span className="font-bold">

            {percent.toFixed(1)}%

          </span>

        </div>

        <div className="h-4 overflow-hidden rounded-full bg-gray-200">

          <div
            className={`${color} h-full rounded-full transition-all duration-700`}
            style={{
              width: `${percent}%`,
            }}
          />

        </div>

      </div>

      <div className="mt-6 grid grid-cols-2 gap-4">

        <div className="rounded-2xl bg-slate-50 p-4">

          <p className="text-sm text-gray-500">

            Expense

          </p>

          <h3 className="mt-2 text-xl font-bold text-red-600">

            Rp {expense.toLocaleString()}

          </h3>

        </div>

        <div className="rounded-2xl bg-slate-50 p-4">

          <p className="text-sm text-gray-500">

            Remaining

          </p>

          <h3
            className={`mt-2 text-xl font-bold ${
              remaining >= 0
                ? "text-green-600"
                : "text-red-600"
            }`}
          >
            Rp {remaining.toLocaleString()}
          </h3>

        </div>

      </div>

      {percent >= 80 && (

        <div
          className={`mt-6 rounded-2xl p-4 ${
            percent >= 100
              ? "bg-red-100 text-red-700"
              : "bg-yellow-100 text-yellow-700"
          }`}
        >

          <div className="flex items-center gap-3">

            <AlertTriangle size={22} />

            <span className="font-semibold">

              {percent >= 100
                ? "Budget exceeded!"
                : "Warning! Budget usage is above 80%."}

            </span>

          </div>

        </div>

      )}

    </div>
  );
}