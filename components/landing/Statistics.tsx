"use client";

import {
  Wallet,
  Target,
  GraduationCap,
  Plane,
} from "lucide-react";

const stats = [
  {
    icon: Wallet,
    value: "Rp 20M+",
    title: "Money Tracked",
    description: "Manage your income, expenses and savings with confidence.",
    gradient: "from-emerald-500 to-green-600",
  },
  {
    icon: Target,
    value: "150+",
    title: "Goals Completed",
    description: "Track dreams, milestones and achievements in one place.",
    gradient: "from-orange-500 to-amber-500",
  },
  {
    icon: GraduationCap,
    value: "500+",
    title: "Study Sessions",
    description: "Build consistent learning habits every single day.",
    gradient: "from-sky-500 to-indigo-500",
  },
  {
    icon: Plane,
    value: "2029",
    title: "Australia Dream",
    description: "Stay focused on your long-term journey and future plans.",
    gradient: "from-violet-500 to-fuchsia-500",
  },
];

export default function Statistics() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-28">

      {/* Glow */}

      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-emerald-500/20 blur-[140px]" />

      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-green-500/20 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        <div className="mx-auto max-w-3xl text-center">

          <span className="rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-emerald-300">

            Your Life. Measured.

          </span>

          <h2 className="mt-6 text-5xl font-black text-white">

            Every Progress
            <br />
            Counts.

          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-400">

            Flora gives you a complete overview of your
            finances, study, productivity and life goals.

          </p>

        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {stats.map((stat) => {

            const Icon = stat.icon;

            return (

              <div
                key={stat.title}
                className="group rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur transition-all duration-500 hover:-translate-y-2 hover:border-emerald-400/40 hover:bg-white/10"
              >

                <div
                  className={`inline-flex rounded-2xl bg-gradient-to-br ${stat.gradient} p-4 shadow-xl`}
                >

                  <Icon size={28} className="text-white" />

                </div>

                <h3 className="mt-8 text-4xl font-black text-white">

                  {stat.value}

                </h3>

                <p className="mt-3 text-xl font-semibold text-white">

                  {stat.title}

                </p>

                <p className="mt-4 leading-7 text-slate-400">

                  {stat.description}

                </p>

              </div>

            );

          })}

        </div>

      </div>

    </section>
  );
}