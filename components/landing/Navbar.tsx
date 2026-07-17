"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X, Leaf } from "lucide-react";

const menus = [
  {
    name: "Features",
    href: "#features",
  },
  {
    name: "Dashboard",
    href: "#dashboard",
  },
  {
    name: "Pricing",
    href: "#pricing",
  },
  {
    name: "About",
    href: "#about",
  },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">

      <div className="mx-auto max-w-7xl px-6 py-5">

        <div
          className={`flex items-center justify-between rounded-2xl border px-6 py-4 transition-all duration-300 ${
            scrolled
              ? "border-white/20 bg-white/75 shadow-xl backdrop-blur-xl"
              : "border-transparent bg-transparent"
          }`}
        >

          {/* Logo */}

          <Link
            href="/"
            className="flex items-center gap-3"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-green-600 text-white shadow-lg">

              <Leaf size={20} />

            </div>

            <div>

              <h2
                className={`text-lg font-black ${
                  scrolled
                    ? "text-slate-900"
                    : "text-white"
                }`}
              >
                Flora
              </h2>

              <p
                className={`text-xs ${
                  scrolled
                    ? "text-slate-500"
                    : "text-white/70"
                }`}
              >
                Personal OS
              </p>

            </div>

          </Link>

          {/* Desktop Menu */}

          <nav className="hidden items-center gap-8 lg:flex">

            {menus.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`font-medium transition ${
                  scrolled
                    ? "text-slate-600 hover:text-emerald-600"
                    : "text-white/80 hover:text-white"
                }`}
              >
                {item.name}
              </a>
            ))}

          </nav>

          {/* Right */}

          <div className="hidden items-center gap-3 lg:flex">

            <Link
              href="/login"
              className={`rounded-xl px-5 py-2 font-semibold transition ${
                scrolled
                  ? "text-slate-700 hover:bg-slate-100"
                  : "text-white hover:bg-white/10"
              }`}
            >
              Login
            </Link>

            <Link
              href="/register"
              className="rounded-xl bg-gradient-to-r from-emerald-500 to-green-600 px-5 py-2 font-semibold text-white shadow-lg transition hover:scale-105"
            >
              Get Started
            </Link>

          </div>

          {/* Mobile */}

          <button
            onClick={() => setOpen(!open)}
            className={`lg:hidden ${
              scrolled
                ? "text-slate-900"
                : "text-white"
            }`}
          >
            {open ? (
              <X size={28} />
            ) : (
              <Menu size={28} />
            )}
          </button>

        </div>

        {/* Mobile Menu */}

        {open && (

          <div className="mt-4 rounded-3xl bg-white p-6 shadow-2xl lg:hidden">

            <div className="space-y-4">

              {menus.map((item) => (

                <a
                  key={item.name}
                  href={item.href}
                  className="block rounded-xl px-4 py-3 font-medium text-slate-700 transition hover:bg-slate-100"
                >
                  {item.name}
                </a>

              ))}

              <div className="pt-4">

                <Link
                  href="/register"
                  className="block rounded-xl bg-emerald-600 py-3 text-center font-semibold text-white"
                >
                  Get Started
                </Link>

              </div>

            </div>

          </div>

        )}

      </div>

    </header>
  );
}