"use client";

import { ReactNode } from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

interface Props {
  title: string;
  children: ReactNode;
}

export default function DashboardLayout({
  title,
  children,
}: Props) {
  return (
    <div className="flex min-h-screen bg-slate-100">

      <Sidebar />

      <main className="flex-1 overflow-y-auto">

        <div className="mx-auto max-w-7xl p-8">

          <Topbar title={title} />

          {children}

        </div>

      </main>

    </div>
  );
}