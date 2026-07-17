import Link from "next/link";
import { Leaf } from "lucide-react";

type LogoProps = {
  dark?: boolean;
};

export default function Logo({
  dark = false,
}: LogoProps) {
  return (
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
            dark
              ? "text-slate-900"
              : "text-white"
          }`}
        >
          Flora
        </h2>

        <p
          className={`text-xs ${
            dark
              ? "text-slate-500"
              : "text-white/70"
          }`}
        >
          Personal OS
        </p>

      </div>

    </Link>
  );
}