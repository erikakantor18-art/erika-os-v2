"use client";

import { Target } from "lucide-react";
import { SavingGoal } from "@/types/finance";

interface Props {
  goals: SavingGoal[];
}

export default function SavingGoals({
  goals,
}: Props) {
  return (
    <div className="rounded-3xl border bg-white p-6 shadow-sm">

      <div className="mb-8 flex items-center gap-3">

        <Target className="text-blue-600" />

        <h2 className="text-xl font-bold">

          Saving Goals

        </h2>

      </div>

      <div className="space-y-6">

        {goals.map((goal) => {

          const percent =
            (goal.current /
              goal.target) *
            100;

          return (

            <div key={goal.id}>

              <div className="mb-2 flex justify-between">

                <span className="font-semibold">

                  {goal.title}

                </span>

                <span>

                  {percent.toFixed(0)}%

                </span>

              </div>

              <div className="h-3 overflow-hidden rounded-full bg-gray-200">

                <div
                  className="h-full rounded-full bg-green-500 transition-all duration-700"
                  style={{
                    width: `${percent}%`,
                  }}
                />

              </div>

              <div className="mt-2 flex justify-between text-sm text-gray-500">

                <span>

                  Rp {goal.current.toLocaleString()}

                </span>

                <span>

                  Rp {goal.target.toLocaleString()}

                </span>

              </div>

            </div>

          );

        })}

      </div>

    </div>
  );
}