"use client";

interface Props {
  value: number;
  max?: number;
  color?: string;
  showLabel?: boolean;
  size?: "sm" | "md" | "lg";
}

export default function Progress({
  value,
  max = 100,
  color = "#3B82F6",
  showLabel = false,
  size = "md",
}: Props) {
  const percentage =
    max <= 0 ? 0 : Math.min((value / max) * 100, 100);

  const heights = {
    sm: "h-2",
    md: "h-3",
    lg: "h-5",
  };

  return (
    <div className="w-full">

      <div
        className={`w-full rounded-full bg-gray-200 ${heights[size]}`}
      >

        <div
          className={`rounded-full transition-all duration-700 ${heights[size]}`}
          style={{
            width: `${percentage}%`,
            background: color,
          }}
        />

      </div>

      {showLabel && (
        <p className="mt-2 text-right text-sm text-gray-500">
          {percentage.toFixed(1)}%
        </p>
      )}

    </div>
  );
}