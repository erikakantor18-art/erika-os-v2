"use client";

import {
  Wallet,
  CalendarDays,
  BookOpen,
  Plane,
  GraduationCap,
  BarChart3,
  ArrowUpRight,
} from "lucide-react";

export default function Features() {
  return (
    <section
      id="features"
      className="bg-white py-28"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">

          <span className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700">
            Everything In One Place
          </span>

          <h2 className="mt-6 text-5xl font-black text-slate-900">
            Built For Every
            <br />
            Part Of Your Life.
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Flora combines finance, productivity,
            study, journal and life goals inside
            one modern operating system.
          </p>

        </div>

        {/* Bento Grid */}

        <div className="mt-20 grid auto-rows-[260px] gap-6 lg:grid-cols-3">

          {/* Finance */}

          <FeatureCard
            large
            icon={<Wallet size={30} />}
            title="Finance"
            description="Track income, expenses, emergency fund and monthly budgeting effortlessly."
            gradient="from-emerald-500 to-green-600"
          >

            <div className="mt-8 space-y-4">

              <div className="rounded-2xl bg-white/20 p-4 backdrop-blur">

                <p className="text-sm text-white/80">
                  Balance
                </p>

                <h3 className="mt-2 text-3xl font-black">
                  Rp8.500.000
                </h3>

              </div>

              <div className="flex gap-3">

                {[40,65,55,90,80,120].map((h,i)=>(
                  <div
                    key={i}
                    className="flex-1 rounded-full bg-white/40"
                    style={{height:h}}
                  />
                ))}

              </div>

            </div>

          </FeatureCard>

          {/* Planner */}

          <FeatureCard
            icon={<CalendarDays size={28} />}
            title="Planner"
            description="Manage schedules, reminders and daily routines."
            gradient="from-sky-500 to-cyan-500"
          >

            <div className="mt-6 space-y-3">

              <Task checked text="Workout" />

              <Task checked text="Study IELTS" />

              <Task text="Review Budget" />

            </div>

          </FeatureCard>

          {/* Journal */}

          <FeatureCard
            icon={<BookOpen size={28} />}
            title="Journal"
            description="Capture your thoughts and memories every day."
            gradient="from-violet-500 to-fuchsia-500"
          >

            <div className="mt-6 rounded-2xl bg-white/20 p-5 backdrop-blur">

              Today I learned that consistency
              beats motivation...

            </div>

          </FeatureCard>
                    {/* Dream Fun */}

          <FeatureCard
            icon={<Plane size={28} />}
            title="Dream Fun"
            description="Visualize your dreams and keep your long-term goals on track."
            gradient="from-amber-500 to-orange-500"
          >
            <div className="mt-8">

              <div className="flex items-center justify-between text-white/90">

                <span>Australia 2029</span>

                <span className="font-bold">72%</span>

              </div>

              <div className="mt-3 h-3 rounded-full bg-white/20">
                <div className="h-3 w-[72%] rounded-full bg-white" />
              </div>

            </div>

          </FeatureCard>

          {/* Study */}

          <FeatureCard
            icon={<GraduationCap size={28} />}
            title="Study"
            description="Track your courses, certifications and daily learning progress."
            gradient="from-indigo-500 to-blue-600"
          >
            <div className="mt-6 space-y-4">

              <ProgressItem
                title="IELTS"
                value={80}
              />

              <ProgressItem
                title="React"
                value={65}
              />

              <ProgressItem
                title="English"
                value={75}
              />

            </div>

          </FeatureCard>

          {/* Analytics */}

          <FeatureCard
            large
            icon={<BarChart3 size={30} />}
            title="Analytics"
            description="Understand your habits with beautiful charts and insights."
            gradient="from-slate-800 to-slate-950"
          >

            <div className="mt-8 flex h-40 items-end gap-3">

              {[45,70,90,65,120,80,150,110].map((h,i)=>(
                <div
                  key={i}
                  className="flex-1 rounded-t-2xl bg-white/70"
                  style={{height:h}}
                />
              ))}

            </div>

          </FeatureCard>

        </div>

      </div>

    </section>

  );
}

/* ------------------------------------------------ */
/* Components */
/* ------------------------------------------------ */

type FeatureCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  gradient: string;
  large?: boolean;
  children: React.ReactNode;
};

function FeatureCard({
  icon,
  title,
  description,
  gradient,
  large = false,
  children,
}: FeatureCardProps) {
  return (
    <div
      className={`group overflow-hidden rounded-[32px] bg-gradient-to-br ${gradient} p-8 text-white shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${
        large ? "lg:col-span-2" : ""
      }`}
    >

      <div className="flex items-center justify-between">

        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/20 backdrop-blur">

          {icon}

        </div>

        <ArrowUpRight className="transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />

      </div>

      <h3 className="mt-8 text-3xl font-black">
        {title}
      </h3>

      <p className="mt-3 max-w-sm leading-7 text-white/80">
        {description}
      </p>

      {children}

    </div>
  );
}

function Task({
  checked = false,
  text,
}: {
  checked?: boolean;
  text: string;
}) {
  return (
    <div className="flex items-center gap-3">

      <div
        className={`flex h-6 w-6 items-center justify-center rounded-lg ${
          checked
            ? "bg-white text-emerald-600"
            : "border-2 border-white"
        }`}
      >
        {checked && "✓"}
      </div>

      <span>{text}</span>

    </div>
  );
}

function ProgressItem({
  title,
  value,
}: {
  title: string;
  value: number;
}) {
  return (
    <div>

      <div className="mb-2 flex items-center justify-between">

        <span>{title}</span>

        <span>{value}%</span>

      </div>

      <div className="h-2 rounded-full bg-white/20">

        <div
          className="h-2 rounded-full bg-white"
          style={{
            width: `${value}%`,
          }}
        />

      </div>

    </div>
  );
}