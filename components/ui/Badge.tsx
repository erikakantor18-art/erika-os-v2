"use client";

import { ReactNode } from "react";

type BadgeColor =
  | "blue"
  | "green"
  | "emerald"
  | "lime"
  | "teal"
  | "cyan"
  | "sky"
  | "indigo"
  | "violet"
  | "purple"
  | "pink"
  | "rose"
  | "orange"
  | "amber"
  | "yellow"
  | "red"
  | "gray"
  | "slate";

interface Props {
  children: ReactNode;
  color?: BadgeColor;
  className?: string;
}

export default function Badge({
  children,
  color = "blue",
  className = "",
}: Props) {
  const styles: Record<BadgeColor, string> = {
    blue: "bg-blue-100 text-blue-700",
    green: "bg-green-100 text-green-700",
    emerald: "bg-emerald-100 text-emerald-700",
    lime: "bg-lime-100 text-lime-700",
    teal: "bg-teal-100 text-teal-700",
    cyan: "bg-cyan-100 text-cyan-700",
    sky: "bg-sky-100 text-sky-700",
    indigo: "bg-indigo-100 text-indigo-700",
    violet: "bg-violet-100 text-violet-700",
    purple: "bg-purple-100 text-purple-700",
    pink: "bg-pink-100 text-pink-700",
    rose: "bg-rose-100 text-rose-700",
    orange: "bg-orange-100 text-orange-700",
    amber: "bg-amber-100 text-amber-700",
    yellow: "bg-yellow-100 text-yellow-700",
    red: "bg-red-100 text-red-700",
    gray: "bg-gray-100 text-gray-700",
    slate: "bg-slate-100 text-slate-700",
  };

  return (
    <span
      className={`
        inline-flex
        items-center
        justify-center
        rounded-full
        px-3
        py-1
        text-xs
        font-semibold
        whitespace-nowrap
        ${styles[color]}
        ${className}
      `}
    >
      {children}
    </span>
  );
}