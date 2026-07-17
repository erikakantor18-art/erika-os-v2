"use client";

import {
  TrendingUp,
  TrendingDown,
  Wallet,
} from "lucide-react";

interface Props {
  income: number;
  expense: number;
  balance: number;
}

export default function CashFlow({
  income,
  expense,
  balance,
}: Props) {
  return (
    <div className="rounded-3xl border bg-white p-6 shadow-sm">

      <h2 className="mb-8 text-xl font-bold">
        Cash Flow
      </h2>

      <div className="space-y-5">

        <div className="flex items-center justify-between rounded-2xl bg-green-50 p-5">

          <div className="flex items-center gap-4">

            <div className="rounded-xl bg-green-100 p-3">
              <TrendingUp className="text-green-600"/>
            </div>

            <div>

              <p className="text-sm text-gray-500">
                Total Income
              </p>

              <h3 className="font-bold text-green-600">
                Rp {income.toLocaleString()}
              </h3>

            </div>

          </div>

        </div>

        <div className="flex items-center justify-between rounded-2xl bg-red-50 p-5">

          <div className="flex items-center gap-4">

            <div className="rounded-xl bg-red-100 p-3">
              <TrendingDown className="text-red-600"/>
            </div>

            <div>

              <p className="text-sm text-gray-500">
                Total Expense
              </p>

              <h3 className="font-bold text-red-600">
                Rp {expense.toLocaleString()}
              </h3>

            </div>

          </div>

        </div>

        <div className="flex items-center justify-between rounded-2xl bg-blue-50 p-5">

          <div className="flex items-center gap-4">

            <div className="rounded-xl bg-blue-100 p-3">
              <Wallet className="text-blue-600"/>
            </div>

            <div>

              <p className="text-sm text-gray-500">
                Net Balance
              </p>

              <h3
                className={`font-bold ${
                  balance >= 0
                    ? "text-blue-600"
                    : "text-red-600"
                }`}
              >
                Rp {balance.toLocaleString()}
              </h3>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}