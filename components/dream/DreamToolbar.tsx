"use client";

import { DreamCategory } from "@/types/dream";
import { DREAM_CATEGORIES } from "@/lib/dreamCategory";

interface Props {
  search: string;
  onSearchChange: (value: string) => void;

  category: DreamCategory | "All";
  onCategoryChange: (
    value: DreamCategory | "All"
  ) => void;
}

export default function DreamToolbar({
  search,
  onSearchChange,
  category,
  onCategoryChange,
}: Props) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">

      <div className="grid gap-4 md:grid-cols-2">

        <input
          type="text"
          placeholder="🔍 Search your dreams..."
          value={search}
          onChange={(e) =>
            onSearchChange(e.target.value)
          }
          className="rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
        />

        <select
          value={category}
          onChange={(e) =>
            onCategoryChange(
              e.target.value as
                | DreamCategory
                | "All"
            )
          }
          className="rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
        >
          <option value="All">
            📂 All Categories
          </option>

          {Object.entries(
            DREAM_CATEGORIES
          ).map(([key, item]) => (
            <option
              key={key}
              value={key}
            >
              {item.icon} {item.label}
            </option>
          ))}
        </select>

      </div>

    </div>
  );
}