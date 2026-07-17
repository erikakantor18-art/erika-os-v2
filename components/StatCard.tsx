"use client";

import { ArrowUpRight } from "lucide-react";

interface Props {
  title: string;
  value: string;
  icon: string;
  subtitle?: string;
}

export default function StatCard({
  title,
  value,
  icon,
  subtitle,
}: Props) {
  return (
    <div className="group rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

      <div className="flex items-start justify-between">

        <div>

          <p className="text-sm text-gray-500">
            {title}
          </p>

          <h2 className="mt-2 text-3xl font-bold">
            {value}
          </h2>

          {subtitle && (
            <p className="mt-2 text-sm text-gray-400">
              {subtitle}
            </p>
          )}

        </div>

        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-100 to-purple-100 text-3xl transition group-hover:scale-110">

          {icon}

        </div>

      </div>

      <div className="mt-6 flex items-center text-sm text-green-600">

        <ArrowUpRight
          size={16}
          className="mr-1"
        />

        Flora OS

      </div>

    </div>
  );
}