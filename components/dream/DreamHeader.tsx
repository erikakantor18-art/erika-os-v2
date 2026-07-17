import Badge from "@/components/ui/Badge";

type DreamHeaderProps = {
  title: string;
  country: string;
  targetYear: string;
};

export default function DreamHeader({
  title,
  country,
  targetYear,
}: DreamHeaderProps) {
  return (
    <div className="flex items-center justify-between">

      <div>

        <Badge color="blue">
          Dream Fun
        </Badge>

        <h1 className="mt-4 text-4xl font-black text-slate-900">
          {title}
        </h1>

        <p className="mt-2 text-slate-500">
          {country} • Target {targetYear}
        </p>

      </div>

      <div className="rounded-3xl bg-gradient-to-br from-emerald-500 to-green-600 px-6 py-5 text-white shadow-xl">

        <p className="text-sm opacity-80">
          Current Goal
        </p>

        <h2 className="mt-2 text-3xl font-black">
          Australia 🇦🇺
        </h2>

      </div>

    </div>
  );
}