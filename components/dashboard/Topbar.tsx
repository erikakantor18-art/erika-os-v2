"use client";

import {
  Bell,
  Search,
  Settings,
  Sun,
} from "lucide-react";

export default function Topbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/80 backdrop-blur-xl">

      <div className="flex h-20 items-center justify-between px-8">

        {/* Search */}

        <div className="relative">

          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <input
            placeholder="Search..."
            className="w-80 rounded-2xl border border-slate-200 bg-slate-50 py-3 pl-11 pr-4 outline-none transition focus:border-blue-500 focus:bg-white"
          />

        </div>

        {/* Right */}

        <div className="flex items-center gap-4">

          <button className="rounded-2xl border border-slate-200 p-3 hover:bg-slate-100">
            <Sun size={20} />
          </button>

          <button className="relative rounded-2xl border border-slate-200 p-3 hover:bg-slate-100">

            <Bell size={20} />

            <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500" />

          </button>

          <button className="rounded-2xl border border-slate-200 p-3 hover:bg-slate-100">
            <Settings size={20} />
          </button>

          <div className="flex items-center gap-3 rounded-2xl bg-slate-100 px-3 py-2">

            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 font-bold text-white">
              E
            </div>

            <div>

              <p className="font-semibold">
                Erika Garcia
              </p>

              <p className="text-xs text-slate-500">
                Premium
              </p>

            </div>

          </div>

        </div>

      </div>

    </header>
  );
}