"use client";

import {
  Wallet,
  CalendarDays,
  GraduationCap,
  Plane,
  BookOpen,
  HeartHandshake,
  Sparkles,
} from "lucide-react";

const modules = [
  {
    icon: Wallet,
    title: "Finance",
    desc: "Budget & Savings",
  },
  {
    icon: CalendarDays,
    title: "Planner",
    desc: "Daily Schedule",
  },
  {
    icon: GraduationCap,
    title: "Study",
    desc: "Learning Progress",
  },
  {
    icon: Plane,
    title: "Dream Fun",
    desc: "Future Goals",
  },
  {
    icon: BookOpen,
    title: "Journal",
    desc: "Daily Reflection",
  },
  {
    icon: HeartHandshake,
    title: "Habits",
    desc: "Healthy Routine",
  },
];

export default function Ecosystem() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white py-32">

      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">

          <span className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700">
            Flora Ecosystem
          </span>

          <h2 className="mt-6 text-5xl font-black text-slate-900">

            One App.
            <br />
            Every Part Of Your Life.

          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">

            Every module works together to help you
            organize your present and build your future.

          </p>

        </div>

        {/* Center */}

        <div className="relative mx-auto mt-24 max-w-5xl">

          {/* Center Circle */}

          <div className="absolute left-1/2 top-1/2 z-20 flex h-44 w-44 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-green-600 text-white shadow-[0_30px_80px_rgba(34,197,94,.35)]">

            <div className="text-center">

              <Sparkles className="mx-auto mb-3" size={34} />

              <h3 className="text-3xl font-black">
                Flora
              </h3>

              <p className="text-sm text-white/80">
                Personal OS
              </p>

            </div>

          </div>

          {/* Grid */}

          <div className="grid grid-cols-2 gap-8 lg:grid-cols-3">

            {modules.map((item) => {

              const Icon = item.icon;

              return (

                <div
                  key={item.title}
                  className="group relative rounded-[32px] border border-slate-200 bg-white p-8 text-center shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
                >

                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-green-600 text-white">

                    <Icon size={30} />

                  </div>

                  <h3 className="mt-6 text-2xl font-bold text-slate-900">

                    {item.title}

                  </h3>

                  <p className="mt-2 text-slate-500">

                    {item.desc}

                  </p>

                </div>

              );

            })}

          </div>

        </div>

      </div>

    </section>
  );
}