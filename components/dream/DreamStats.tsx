"use client";

import StatCard from "@/components/StatCard";
import { Dream } from "@/types/dream";

interface Props {
  dreams: Dream[];
}

export default function DreamStats({
  dreams,
}: Props) {
  const totalTarget = dreams.reduce(
    (sum, dream) => sum + dream.target,
    0
  );

  const totalCurrent = dreams.reduce(
    (sum, dream) => sum + dream.current,
    0
  );

  const totalRemaining =
    totalTarget - totalCurrent;

  const progress =
    totalTarget === 0
      ? 0
      : (totalCurrent / totalTarget) * 100;

  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">

      <StatCard
        title="Dreams"
        value={dreams.length.toString()}
        icon="🌟"
        subtitle="Active Dreams"
      />

      <StatCard
        title="Saved"
        value={`Rp ${totalCurrent.toLocaleString("id-ID")}`}
        icon="💰"
        subtitle="Current Savings"
      />

      <StatCard
        title="Remaining"
        value={`Rp ${totalRemaining.toLocaleString("id-ID")}`}
        icon="🎯"
        subtitle="Need to Save"
      />

      <StatCard
        title="Overall Progress"
        value={`${progress.toFixed(1)}%`}
        icon="📈"
        subtitle="Across All Dreams"
      />

    </div>
  );
}