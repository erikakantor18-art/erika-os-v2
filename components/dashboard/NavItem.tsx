"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

type NavItemProps = {
  href: string;
  icon: React.ReactNode;
  label: string;
  active?: boolean;
};

export default function NavItem({
  href,
  icon,
  label,
  active = false,
}: NavItemProps) {
  return (
    <Link
      href={href}
      className={cn(
        "flex items-center gap-3 rounded-2xl px-4 py-3 transition-all duration-300",
        active
          ? "bg-emerald-500 text-white shadow-lg"
          : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
      )}
    >
      {icon}

      <span className="font-medium">
        {label}
      </span>
    </Link>
  );
}