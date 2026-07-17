"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import {
  LayoutDashboard,
  Wallet,
  CalendarDays,
  GraduationCap,
  Plane,
  BookOpen,
  Settings,
  ChevronLeft,
  ChevronRight,
  Leaf,
} from "lucide-react";

const menus = [
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    label: "Finance",
    href: "/finance",
    icon: Wallet,
  },
  {
    label: "Planner",
    href: "/planner",
    icon: CalendarDays,
  },
  {
    label: "Study",
    href: "/study",
    icon: GraduationCap,
  },
  {
    label: "Dream Fun",
    href: "/dream",
    icon: Plane,
  },
  {
    label: "Journal",
    href: "/journal",
    icon: BookOpen,
  },
  {
    label: "Settings",
    href: "/settings",
    icon: Settings,
  },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside
      className={`sticky top-0 flex h-screen flex-col border-r border-slate-200 bg-white transition-all duration-300 ${
        collapsed ? "w-24" : "w-72"
      }`}
    >
      {/* ================= HEADER ================= */}

      <div className="flex items-center justify-between border-b border-slate-100 p-6">
        {!collapsed && (
          <div>
            <div className="flex items-center gap-2">
              <Leaf className="text-emerald-600" size={30} />

              <h1 className="text-3xl font-black">
                Flora
              </h1>
            </div>

            <p className="mt-1 text-sm text-slate-500">
              Personal Life OS
            </p>
          </div>
        )}

        <button
          onClick={() => setCollapsed(!collapsed)}
          className="rounded-xl border border-slate-200 p-2 transition hover:bg-slate-100"
        >
          {collapsed ? (
            <ChevronRight size={18} />
          ) : (
            <ChevronLeft size={18} />
          )}
        </button>
      </div>

      {/* ================= MENU ================= */}

      <nav className="flex-1 space-y-2 p-4">

        {menus.map((item) => {
          const Icon = item.icon;

          const active =
            pathname === item.href ||
            pathname.startsWith(item.href + "/");

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`group flex items-center gap-4 rounded-2xl px-4 py-4 transition-all duration-200 ${
                active
                  ? "bg-blue-600 text-white shadow-lg"
                  : "text-slate-600 hover:bg-slate-100 hover:text-black"
              }`}
            >
              <Icon size={22} />

              {!collapsed && (
                <span className="font-medium">
                  {item.label}
                </span>
              )}
            </Link>
          );
        })}
      </nav>

      {/* ================= FOOTER ================= */}

      <div className="border-t border-slate-100 p-5">
        {!collapsed ? (
          <div className="rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 p-5 text-white">

            <h3 className="font-bold">
              🌿 Flora Pro
            </h3>

            <p className="mt-2 text-sm text-blue-100">
              Build your future every day.
            </p>

            <button className="mt-5 w-full rounded-xl bg-white py-2 font-semibold text-blue-700 transition hover:bg-blue-50">
              Upgrade
            </button>

          </div>
        ) : (
          <div className="flex justify-center text-3xl">
            🚀
          </div>
        )}
      </div>
    </aside>
  );
}