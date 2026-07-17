"use client";

import {
  Wallet,
  CalendarDays,
  GraduationCap,
  Plane,
  BookOpen,
  TrendingUp,
  CircleDollarSign,
  ArrowUpRight,
} from "lucide-react";

export default function DashboardPreview() {
  return (
    <section
      id="dashboard"
      className="relative bg-slate-50 py-28"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">

          <span className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700">
            Dashboard Preview
          </span>

          <h2 className="mt-6 text-5xl font-black text-slate-900">
            Everything You Need,
            <br />
            In One Beautiful Dashboard.
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Finance, Planner, Journal, Study,
            Dream Fun and everything else
            organized in one place.
          </p>

        </div>

        {/* Dashboard */}

        <div className="mt-20 overflow-hidden rounded-[40px] border border-slate-200 bg-white shadow-[0_40px_80px_rgba(15,23,42,.08)]">

          <div className="grid lg:grid-cols-[260px_1fr]">

            {/* Sidebar */}

            <aside className="border-r border-slate-200 bg-slate-900 p-8 text-white">

              <div className="flex items-center gap-3">

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500 text-xl font-bold">
                  🌿
                </div>

                <div>

                  <h3 className="font-bold">
                    Flora
                  </h3>

                  <p className="text-sm text-slate-400">
                    Personal OS
                  </p>

                </div>

              </div>

              <nav className="mt-12 space-y-2">

                <SidebarItem
                  icon={<Wallet size={20} />}
                  title="Finance"
                  active
                />

                <SidebarItem
                  icon={<CalendarDays size={20} />}
                  title="Planner"
                />

                <SidebarItem
                  icon={<GraduationCap size={20} />}
                  title="Study"
                />

                <SidebarItem
                  icon={<Plane size={20} />}
                  title="Australia"
                />

                <SidebarItem
                  icon={<BookOpen size={20} />}
                  title="Journal"
                />

              </nav>

            </aside>

            {/* Content */}

            <main className="p-8">

              {/* Top */}

              <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

                <div>

                  <h2 className="text-3xl font-black text-slate-900">
                    Welcome Back 👋
                  </h2>

                  <p className="mt-2 text-slate-500">
                    Here's your life summary today.
                  </p>

                </div>

                <button className="rounded-2xl bg-emerald-600 px-6 py-3 font-semibold text-white transition hover:bg-emerald-700">
                  + Add Transaction
                </button>

              </div>

              {/* Cards */}

              <div className="mt-10 grid gap-6 lg:grid-cols-3">

                <SummaryCard
                  icon={<CircleDollarSign size={24} />}
                  title="Balance"
                  value="Rp 8.500.000"
                  color="green"
                />

                <SummaryCard
                  icon={<TrendingUp size={24} />}
                  title="Income"
                  value="Rp 5.300.000"
                  color="blue"
                />

                <SummaryCard
                  icon={<ArrowUpRight size={24} />}
                  title="Expense"
                  value="Rp 2.100.000"
                  color="red"
                />
                              </div>

              {/* Main Grid */}

              <div className="mt-8 grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">

                {/* Left */}

                <div className="space-y-6">

                  {/* Analytics */}

                  <div className="rounded-3xl border border-slate-200 p-6">

                    <div className="flex items-center justify-between">

                      <div>

                        <h3 className="text-xl font-bold text-slate-900">
                          Monthly Analytics
                        </h3>

                        <p className="mt-1 text-sm text-slate-500">
                          Finance performance
                        </p>

                      </div>

                      <span className="rounded-xl bg-emerald-100 px-3 py-2 text-sm font-semibold text-emerald-700">
                        +18%
                      </span>

                    </div>

                    {/* Fake Chart */}

                    <div className="mt-8 flex h-56 items-end justify-between gap-3">

                      {[45, 80, 65, 120, 92, 150, 180, 160].map(
                        (height, index) => (
                          <div
                            key={index}
                            className="flex-1 rounded-t-2xl bg-gradient-to-t from-emerald-600 to-green-300 transition-all duration-300 hover:scale-y-105"
                            style={{
                              height: `${height}px`,
                            }}
                          />
                        )
                      )}

                    </div>

                  </div>

                  {/* Recent Transactions */}

                  <div className="rounded-3xl border border-slate-200 p-6">

                    <div className="flex items-center justify-between">

                      <h3 className="text-xl font-bold text-slate-900">
                        Recent Transactions
                      </h3>

                      <button className="text-sm font-semibold text-emerald-600">
                        View All
                      </button>

                    </div>

                    <div className="mt-6 space-y-4">

                      <Transaction
                        title="Salary"
                        category="Income"
                        amount="+ Rp4.700.000"
                        positive
                      />

                      <Transaction
                        title="Fuel"
                        category="Transportation"
                        amount="- Rp250.000"
                      />

                      <Transaction
                        title="Emergency Fund"
                        category="Saving"
                        amount="- Rp500.000"
                      />

                      <Transaction
                        title="Australia Fund"
                        category="Dream Fun"
                        amount="- Rp750.000"
                      />

                    </div>

                  </div>

                </div>

                {/* Right */}

                <div className="space-y-6">

                  {/* Dream Progress */}

                  <div className="rounded-3xl bg-gradient-to-br from-emerald-600 to-green-500 p-6 text-white">

                    <p className="text-sm text-white/70">
                      Australia Dream
                    </p>

                    <h2 className="mt-3 text-4xl font-black">
                      72%
                    </h2>

                    <div className="mt-6 h-3 rounded-full bg-white/20">

                      <div className="h-3 w-[72%] rounded-full bg-white" />

                    </div>

                    <p className="mt-4 text-sm text-white/80">
                      Target 2029
                    </p>

                  </div>

                  {/* Today's Tasks */}

                  <div className="rounded-3xl border border-slate-200 p-6">

                    <h3 className="text-xl font-bold text-slate-900">
                      Today's Tasks
                    </h3>

                    <div className="mt-5 space-y-4">

                      <Task text="Save Rp500.000" />

                      <Task text="Study IELTS" />

                      <Task text="Workout" />

                      <Task text="Review Expenses" />

                    </div>

                  </div>

                  {/* Calendar */}

                  <div className="rounded-3xl border border-slate-200 p-6">

                    <h3 className="text-xl font-bold text-slate-900">
                      Upcoming
                    </h3>

                    <div className="mt-5 space-y-4">

                      <Upcoming
                        title="Salary"
                        date="31 July"
                      />

                      <Upcoming
                        title="UT Registration"
                        date="August"
                      />

                      <Upcoming
                        title="Australia Saving"
                        date="Monthly"
                      />

                    </div>

                  </div>

                </div>

              </div>

            </main>

          </div>

        </div>

      </div>

    </section>
  );
}
/* ------------------------------------------------ */
/* Components */
/* ------------------------------------------------ */

type SidebarItemProps = {
  icon: React.ReactNode;
  title: string;
  active?: boolean;
};

function SidebarItem({
  icon,
  title,
  active = false,
}: SidebarItemProps) {
  return (
    <button
      className={`flex w-full items-center gap-4 rounded-2xl px-4 py-3 transition-all ${
        active
          ? "bg-emerald-500 text-white shadow-lg"
          : "text-slate-300 hover:bg-white/10 hover:text-white"
      }`}
    >
      {icon}
      <span className="font-medium">{title}</span>
    </button>
  );
}

type SummaryCardProps = {
  icon: React.ReactNode;
  title: string;
  value: string;
  color: "green" | "blue" | "red";
};

function SummaryCard({
  icon,
  title,
  value,
  color,
}: SummaryCardProps) {
  const colors = {
    green: "bg-emerald-100 text-emerald-700",
    blue: "bg-sky-100 text-sky-700",
    red: "bg-rose-100 text-rose-700",
  };

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

      <div
        className={`inline-flex rounded-2xl p-3 ${colors[color]}`}
      >
        {icon}
      </div>

      <p className="mt-5 text-sm text-slate-500">
        {title}
      </p>

      <h3 className="mt-2 text-3xl font-black text-slate-900">
        {value}
      </h3>

    </div>
  );
}

type TransactionProps = {
  title: string;
  category: string;
  amount: string;
  positive?: boolean;
};

function Transaction({
  title,
  category,
  amount,
  positive = false,
}: TransactionProps) {
  return (
    <div className="flex items-center justify-between rounded-2xl border border-slate-100 p-4 transition hover:bg-slate-50">

      <div>

        <h4 className="font-semibold text-slate-900">
          {title}
        </h4>

        <p className="text-sm text-slate-500">
          {category}
        </p>

      </div>

      <span
        className={`font-bold ${
          positive
            ? "text-emerald-600"
            : "text-slate-700"
        }`}
      >
        {amount}
      </span>

    </div>
  );
}

function Task({
  text,
}: {
  text: string;
}) {
  return (
    <div className="flex items-center gap-3">

      <div className="h-5 w-5 rounded-md border-2 border-emerald-500 transition hover:bg-emerald-500" />

      <span className="text-slate-700">
        {text}
      </span>

    </div>
  );
}

function Upcoming({
  title,
  date,
}: {
  title: string;
  date: string;
}) {
  return (
    <div className="flex items-center justify-between rounded-2xl bg-slate-50 p-4">

      <div>

        <h4 className="font-semibold text-slate-900">
          {title}
        </h4>

        <p className="text-sm text-slate-500">
          {date}
        </p>

      </div>

      <CalendarDays
        size={22}
        className="text-emerald-600"
      />

    </div>
  );
}