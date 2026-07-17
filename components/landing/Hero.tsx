"use client";

import Link from "next/link";
import {
  ArrowRight,
  Wallet,
  Target,
  GraduationCap,
  Plane,
  Sparkles,
  TrendingUp,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-emerald-700 via-green-600 to-teal-500 text-white">

      {/* Background Glow */}

      <div className="absolute inset-0">

        <div className="absolute -left-40 -top-40 h-[420px] w-[420px] rounded-full bg-white/10 blur-3xl" />

        <div className="absolute right-0 top-20 h-[360px] w-[360px] rounded-full bg-cyan-300/20 blur-3xl" />

        <div className="absolute bottom-0 left-1/2 h-[280px] w-[280px] -translate-x-1/2 rounded-full bg-emerald-300/20 blur-3xl" />

      </div>

      {/* Container */}

      <div className="relative mx-auto flex min-h-[720px] max-w-7xl items-center px-6 py-20 lg:px-8">

        <div className="grid w-full items-center gap-20 lg:grid-cols-[1fr_560px]">

          {/* LEFT */}

          <div>

            {/* Badge */}

            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur">

              <Sparkles size={16} />

              <span className="text-sm font-medium">

                Personal Life Operating System

              </span>

            </div>

            {/* Title */}

            <h1 className="mt-8 text-5xl font-black leading-[1.05] tracking-tight lg:text-7xl">

              Organize

              <br />

              Every Part

              <br />

              Of Your Life.

            </h1>

            {/* Description */}

            <p className="mt-8 max-w-xl text-lg leading-8 text-green-50">

              Flora helps you organize your finance,

              planner, journal, study, and Dream Fun

              in one modern dashboard.

            </p>

            {/* Buttons */}

            <div className="mt-10 flex flex-wrap gap-4">

              <Link
                href="/login"
                className="flex items-center gap-2 rounded-2xl bg-white px-8 py-4 font-bold text-green-700 transition-all duration-300 hover:scale-105"
              >
                Get Started

                <ArrowRight size={18} />

              </Link>

              <Link
                href="#dashboard"
                className="rounded-2xl border border-white/20 bg-white/10 px-8 py-4 font-semibold backdrop-blur transition hover:bg-white/20"
              >
                Live Preview
              </Link>

            </div>

            {/* Stats */}

            <div className="mt-14 grid grid-cols-3 gap-8">

              <HeroStat
                number="15+"
                title="Modules"
              />

              <HeroStat
                number="100%"
                title="Personal"
              />

              <HeroStat
                number="∞"
                title="Grow"
              />

            </div>

          </div>

          {/* RIGHT */}

          <div className="relative">

            {/* Floating Card */}

            <div className="absolute -left-10 top-12 hidden rounded-3xl bg-white p-5 text-slate-900 shadow-2xl xl:block">

              <Plane
                className="text-green-600"
                size={28}
              />

              <p className="mt-3 text-sm text-slate-500">

                Australia Goal

              </p>

              <h3 className="mt-1 text-3xl font-black">

                72%

              </h3>

              <div className="mt-4 h-2 w-36 rounded-full bg-slate-200">

                <div className="h-2 w-[72%] rounded-full bg-green-500" />

              </div>

            </div>

            {/* Dashboard */}

            <div className="rounded-[36px] border border-white/20 bg-white/10 p-8 shadow-[0_40px_80px_rgba(0,0,0,.25)] backdrop-blur-xl">

              <div className="flex items-center justify-between">

                <div>

                  <p className="text-sm text-white/70">

                    Available Balance

                  </p>

                  <h2 className="mt-2 text-5xl font-black">

                    Rp 8.500.000

                  </h2>

                </div>

                <div className="rounded-2xl bg-white/15 p-4">

                  <Wallet size={32} />

                </div>

              </div>
                            {/* Summary Cards */}

              <div className="mt-10 grid grid-cols-2 gap-4">

                <MiniCard
                  icon={<TrendingUp size={20} />}
                  title="Income"
                  value="Rp 5.3M"
                  color="green"
                />

                <MiniCard
                  icon={<Target size={20} />}
                  title="Dream Fun"
                  value="72%"
                  color="yellow"
                />

                <MiniCard
                  icon={<GraduationCap size={20} />}
                  title="Study"
                  value="84%"
                  color="blue"
                />

                <MiniCard
                  icon={<Plane size={20} />}
                  title="Australia"
                  value="2029"
                  color="purple"
                />

              </div>

              {/* Monthly Progress */}

              <div className="mt-10">

                <div className="mb-3 flex items-center justify-between">

                  <span className="text-sm text-white/70">

                    Monthly Progress

                  </span>

                  <span className="font-semibold">

                    78%

                  </span>

                </div>

                <div className="h-3 rounded-full bg-white/20">

                  <div className="h-3 w-[78%] rounded-full bg-white transition-all duration-700" />

                </div>

              </div>

              {/* Bottom */}

              <div className="mt-10 rounded-3xl bg-white/10 p-5">

                <div className="flex items-center justify-between">

                  <div>

                    <p className="text-sm text-white/70">

                      Next Goal

                    </p>

                    <h3 className="mt-1 text-2xl font-black">

                      Australia 2029 🇦🇺

                    </h3>

                  </div>

                  <div className="rounded-2xl bg-white/15 px-4 py-2">

                    On Track

                  </div>

                </div>

                <div className="mt-6 h-2 rounded-full bg-white/20">

                  <div className="h-2 w-[72%] rounded-full bg-gradient-to-r from-lime-300 to-green-300" />

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>

  );
}

            /* ----------------------------- */
            /* Components */
            /* ----------------------------- */

            type HeroStatProps = {
              number: string;
              title: string;
            };

            function HeroStat({
              number,
              title,
            }: HeroStatProps) {
              return (
                <div>

                  <h3 className="text-3xl font-black">

                    {number}

                  </h3>

                  <p className="mt-2 text-green-100">

                    {title}

                  </p>

                </div>
              );
            }

            type MiniCardProps = {
              icon: React.ReactNode;
              title: string;
              value: string;
              color:
                | "green"
                | "yellow"
                | "blue"
                | "purple";
            };

            function MiniCard({
              icon,
              title,
              value,
              color,
            }: MiniCardProps) {

              const colors = {
                green: "bg-emerald-400/20",
                yellow: "bg-yellow-400/20",
                blue: "bg-sky-400/20",
                purple: "bg-violet-400/20",
              };
                return (
                <div className="rounded-2xl bg-white/10 p-5 transition-all duration-300 hover:-translate-y-1 hover:bg-white/20">

                  <div
                    className={`inline-flex rounded-xl ${colors[color]} p-3`}
                  >
                    {icon}
                  </div>

                  <p className="mt-4 text-sm text-white/70">
                    {title}
                  </p>

                  <h3 className="mt-2 text-2xl font-bold">
                    {value}
                  </h3>

                </div>
              );
            }