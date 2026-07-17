"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";

interface Props {
  open: boolean;
  currentBudget: number;
  onClose: () => void;
  onSave: (budget: number) => void;
}

export default function BudgetModal({
  open,
  currentBudget,
  onClose,
  onSave,
}: Props) {
  const [budget, setBudget] = useState("");

  useEffect(() => {
    setBudget(currentBudget.toString());
  }, [currentBudget]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">

      <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-xl">

        <div className="mb-6 flex items-center justify-between">

          <h2 className="text-2xl font-bold">
            Monthly Budget
          </h2>

          <button onClick={onClose}>
            <X />
          </button>

        </div>

        <div className="space-y-5">

          <input
            type="number"
            value={budget}
            onChange={(e) =>
              setBudget(e.target.value)
            }
            className="w-full rounded-xl border px-4 py-3"
            placeholder="5000000"
          />

          <button
            onClick={() => {
              onSave(Number(budget));
              onClose();
            }}
            className="w-full rounded-xl bg-black py-3 font-semibold text-white transition hover:opacity-90"
          >
            Save Budget
          </button>

        </div>

      </div>

    </div>
  );
}