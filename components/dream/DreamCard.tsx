"use client";

import Card from "@/components/ui/Card";
import Progress from "@/components/ui/Progress";
import Badge from "@/components/ui/Badge";

import { Dream } from "@/types/dream";
import { getDreamCategory } from "@/lib/dreamCategory";

import {
  CalendarDays,
  Wallet,
  TrendingUp,
} from "lucide-react";

interface Props {
  dream: Dream;
  onClick?: () => void;
}

export default function DreamCard({
  dream,
  onClick,
}: Props) {
  const category = getDreamCategory(
    dream.category
  );

  const progress =
    dream.target === 0
      ? 0
      : (dream.current / dream.target) * 100;

  const remaining = Math.max(
    0,
    dream.target - dream.current
  );

  const today = new Date();

  const deadline = new Date(dream.deadline);

  const daysLeft = Math.max(
    0,
    Math.ceil(
      (deadline.getTime() -
        today.getTime()) /
        (1000 * 60 * 60 * 24)
    )
  );

  let badgeColor: "green" | "yellow" | "red" =
    "green";

  let badgeText = "On Track";

  if (progress < 30) {
    badgeColor = "red";
    badgeText = "Need Focus";
  } else if (progress < 70) {
    badgeColor = "yellow";
    badgeText = "In Progress";
  }

  return (
    <Card
      onClick={onClick}
      className="group cursor-pointer overflow-hidden rounded-3xl border border-slate-200 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
    >
      {/* Gradient */}

      <div
        className={`h-2 w-full bg-gradient-to-r ${category.gradient}`}
      />

      <div className="p-6">

        {/* Header */}

        <div className="flex items-start justify-between">

          <div className="flex items-center gap-4">

            <div
              className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${category.gradient} text-4xl text-white shadow-lg`}
            >
              {category.icon}
            </div>

            <div>

              <h2 className="text-xl font-bold">
                {dream.title}
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                {dream.description ||
                  "No description"}
              </p>

            </div>

          </div>

          <Badge color={badgeColor}>
            {badgeText}
          </Badge>

        </div>

        {/* Progress */}

        <div className="mt-8">

          <div className="mb-2 flex justify-between">

            <span className="text-sm text-slate-500">
              Progress
            </span>

            <span className="font-bold text-blue-600">
              {progress.toFixed(1)}%
            </span>

          </div>

          <Progress
            value={dream.current}
            max={dream.target}
            color={category.color}
          />

        </div>

        {/* Amount */}

        <div className="mt-6 rounded-2xl bg-slate-50 p-4">

          <div className="flex justify-between">

            <div>

              <p className="text-xs text-slate-500">
                Current
              </p>

              <h3 className="font-bold">
                Rp{" "}
                {dream.current.toLocaleString(
                  "id-ID"
                )}
              </h3>

            </div>

            <div className="text-right">

              <p className="text-xs text-slate-500">
                Target
              </p>

              <h3 className="font-bold">
                Rp{" "}
                {dream.target.toLocaleString(
                  "id-ID"
                )}
              </h3>

            </div>

          </div>

        </div>

        {/* Footer */}

        <div className="mt-6 grid grid-cols-3 gap-3">

          <div className="rounded-xl bg-slate-50 p-3 text-center">

            <Wallet
              size={18}
              className="mx-auto mb-2 text-green-600"
            />

            <p className="text-xs text-slate-500">
              Remaining
            </p>

            <p className="mt-1 text-sm font-bold">
              Rp{" "}
              {remaining.toLocaleString(
                "id-ID"
              )}
            </p>

          </div>

          <div className="rounded-xl bg-slate-50 p-3 text-center">

            <CalendarDays
              size={18}
              className="mx-auto mb-2 text-orange-500"
            />

            <p className="text-xs text-slate-500">
              Deadline
            </p>

            <p className="mt-1 text-sm font-bold">
              {daysLeft} Days
            </p>

          </div>

          <div className="rounded-xl bg-slate-50 p-3 text-center">

            <TrendingUp
              size={18}
              className="mx-auto mb-2 text-blue-600"
            />

            <p className="text-xs text-slate-500">
              Status
            </p>

            <p className="mt-1 text-sm font-bold">
              {badgeText}
            </p>

          </div>

        </div>

      </div>
    </Card>
  );
}