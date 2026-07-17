"use client";

import { Search } from "lucide-react";

interface Props {
  search: string;
  setSearch: (value: string) => void;

  filter: string;
  setFilter: (value: string) => void;

  categories: string[];
}

export default function SearchFilter({
  search,
  setSearch,
  filter,
  setFilter,
  categories,
}: Props) {
  return (
    <div className="rounded-3xl border bg-white p-5">

      <div className="flex flex-col gap-4 md:flex-row md:justify-between">

        <div className="relative w-full md:w-96">

          <Search
            size={18}
            className="absolute left-3 top-3 text-gray-400"
          />

          <input
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
            placeholder="Search transaction..."
            className="w-full rounded-xl border py-3 pl-10 pr-3"
          />

        </div>

        <select
          value={filter}
          onChange={(e) =>
            setFilter(e.target.value)
          }
          className="rounded-xl border px-4 py-3"
        >

          <option>All</option>

          <option>income</option>

          <option>expense</option>

          {categories.map((item) => (
            <option key={item}>
              {item}
            </option>
          ))}

        </select>

      </div>

    </div>
  );
}