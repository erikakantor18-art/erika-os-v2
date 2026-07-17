"use client";

import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-white py-24 lg:py-32">
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute -left-40 top-0 h-96 w-96 rounded-full bg-green-300/20 blur-3xl" />
        <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-emerald-300/20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        <div className="overflow-hidden rounded-[40px] bg-gradient-to-br from-green-700 via-emerald-600 to-teal-500 p-10 text-white shadow-[0_30px_80px_rgba(0,0,0,.18)] lg:p-16">

          <div className="mx-auto max-w-3xl text-center">

            {/* Badge */}

            <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 backdrop-blur">
              <Sparkles size={16} />
              <span className="text-sm font-medium">
                Your Life. One Dashboard.
              </span>
            </div>

            {/* Heading */}

            <h2 className="mt-8 text-4xl font-black leading-tight lg:text-6xl">
              Ready To Build
              <br />
              Your Dream Future?
            </h2>

            {/* Description */}

            <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-green-100">
              Start organizing your finances, planner, study,
              journal and Dream Fun in one beautiful workspace.
            </p>

            {/* Buttons */}

            <div className="mt-12 flex flex-col justify-center gap-4 sm:flex-row">

              <Link
                href="/login"
                className="inline-flex items-center justify-center gap-3 rounded-2xl bg-white px-8 py-4 font-bold text-green-700 transition-all duration-300 hover:scale-105"
              >
                Start For Free
                <ArrowRight size={20} />
              </Link>

              <Link
                href="#features"
                className="inline-flex items-center justify-center rounded-2xl border border-white/20 bg-white/10 px-8 py-4 font-semibold backdrop-blur transition hover:bg-white/20"
              >
                Explore Features
              </Link>

            </div>

            {/* Stats */}

            <div className="mt-16 grid grid-cols-1 gap-8 text-center sm:grid-cols-3">

              <div>
                <h3 className="text-4xl font-black">
                  15+
                </h3>

                <p className="mt-2 text-green-100">
                  Smart Features
                </p>
              </div>

              <div>
                <h3 className="text-4xl font-black">
                  100%
                </h3>

                <p className="mt-2 text-green-100">
                  Personal Dashboard
                </p>
              </div>

              <div>
                <h3 className="text-4xl font-black">
                  ∞
                </h3>

                <p className="mt-2 text-green-100">
                  Grow With You
                </p>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}