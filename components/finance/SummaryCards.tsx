"use client";

import {
  Wallet,
  ArrowUpRight,
  ArrowDownRight,
} from "lucide-react";

interface Props {
  income: number;
  expense: number;
  balance: number;
}

export default function SummaryCards({
  income,
  expense,
  balance,
}: Props) {
  return (
    <div className="grid gap-5 md:grid-cols-3">

      <div className="rounded-3xl bg-gradient-to-br from-green-500 to-emerald-600 p-6 text-white shadow">

        <div className="flex items-center justify-between">

          <div>

            <p className="text-sm opacity-80">
              Income
            </p>

            <h2 className="mt-2 text-3xl font-bold">
              Rp {income.toLocaleString()}
            </h2>

          </div>

          <ArrowUpRight size={40} />

        </div>

      </div>

      <div className="rounded-3xl bg-gradient-to-br from-red-500 to-rose-600 p-6 text-white shadow">

        <div className="flex items-center justify-between">

          <div>

            <p className="text-sm opacity-80">
              Expense
            </p>

            <h2 className="mt-2 text-3xl font-bold">
              Rp {expense.toLocaleString()}
            </h2>

          </div>

          <ArrowDownRight size={40} />

        </div>

      </div>

      <div className="rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-700 p-6 text-white shadow">

        <div className="flex items-center justify-between">

          <div>

            <p className="text-sm opacity-80">
              Balance
            </p>

            <h2 className="mt-2 text-3xl font-bold">
              Rp {balance.toLocaleString()}
            </h2>

          </div>

          <Wallet size={40} />

        </div>

      </div>

    </div>
  );
}