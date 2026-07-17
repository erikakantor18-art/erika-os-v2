"use client";

import {
  Wallet,
  GraduationCap,
  Plane,
  Trophy,
} from "lucide-react";

const timeline = [
  {
    year: "2026",
    title: "Start Building Your Future",
    description:
      "Begin saving, organize your finances and build healthy habits.",
    icon: Wallet,
    color: "from-emerald-500 to-green-600",
  },
  {
    year: "2027",
    title: "Grow Every Day",
    description:
      "Learn new skills, improve productivity and stay consistent.",
    icon: GraduationCap,
    color: "from-sky-500 to-indigo-500",
  },
  {
    year: "2028",
    title: "Reach Bigger Milestones",
    description:
      "Complete major goals and prepare for your next chapter.",
    icon: Trophy,
    color: "from-orange-500 to-amber-500",
  },
  {
    year: "2029",
    title: "Dream Comes True",
    description:
      "Turn long-term dreams into reality with years of consistency.",
    icon: Plane,
    color: "from-violet-500 to-fuchsia-500",
  },
];

export default function Journey() {
  return (
    <section
      id="journey"
      className="relative overflow-hidden bg-white py-32"
    >
      <div className="mx-auto max-w-6xl px-6">

        <div className="mx-auto max-w-3xl text-center">

          <span className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700">

            Your Journey

          </span>

          <h2 className="mt-6 text-5xl font-black text-slate-900">

            Small Steps.
            <br />
            Big Future.

          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">

            Every small action today becomes
            a life-changing achievement tomorrow.

          </p>

        </div>

        <div className="relative mt-24">

          {/* Line */}

          <div className="absolute left-7 top-0 h-full w-[3px] rounded-full bg-gradient-to-b from-emerald-500 via-sky-500 to-violet-500" />

          <div className="space-y-20">

            {timeline.map((item) => {

              const Icon = item.icon;

              return (

                <div
                  key={item.year}
                  className="relative flex gap-8"
                >

                  {/* Circle */}

                  <div
                    className={`relative z-10 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br ${item.color} shadow-xl`}
                  >

                    <Icon
                      size={24}
                      className="text-white"
                    />

                  </div>

                  {/* Content */}

                  <div className="flex-1 rounded-[30px] border border-slate-200 bg-white p-8 shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">

                    <span className="text-sm font-bold text-emerald-600">

                      {item.year}

                    </span>

                    <h3 className="mt-3 text-3xl font-black text-slate-900">

                      {item.title}

                    </h3>

                    <p className="mt-4 max-w-2xl leading-8 text-slate-600">

                      {item.description}

                    </p>

                  </div>

                </div>

              );

            })}

          </div>

        </div>

      </div>

    </section>

  );
}