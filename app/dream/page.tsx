"use client";

import { useMemo, useState } from "react";

import Button from "@/components/ui/Button";
import DreamGrid from "@/components/dream/DreamGrid";
import DreamModal from "@/components/dream/DreamModal";
import DreamStats from "@/components/dream/DreamStats";
import DreamToolbar from "@/components/dream/DreamToolbar";
import DreamEmpty from "@/components/dream/DreamEmpty";

import { useDream } from "@/hooks/useDream";
import { Dream, DreamCategory } from "@/types/dream";

export default function DreamPage() {
  const { dreams, addDream, updateDream } = useDream();

  const [open, setOpen] = useState(false);
  const [selectedDream, setSelectedDream] =
    useState<Dream | null>(null);

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<
    DreamCategory | "All"
  >("All");

  const totalSaved = useMemo(
    () =>
      dreams.reduce(
        (sum, dream) => sum + dream.current,
        0
      ),
    [dreams]
  );

  const filteredDreams = useMemo(() => {
    return dreams.filter((dream) => {
      const matchSearch = dream.title
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchCategory =
        category === "All"
          ? true
          : dream.category === category;

      return matchSearch && matchCategory;
    });
  }, [dreams, search, category]);

  function handleSave(
    dream: Omit<Dream, "id">
  ) {
    if (selectedDream) {
      updateDream(selectedDream.id, dream);
    } else {
      addDream(dream);
    }

    setSelectedDream(null);
    setOpen(false);
  }

  function handleSelect(dream: Dream) {
    setSelectedDream(dream);
    setOpen(true);
  }

  function handleAdd() {
    setSelectedDream(null);
    setOpen(true);
  }

  function handleClearFilter() {
    setSearch("");
    setCategory("All");
  }

  const hasFilter =
    search.trim() !== "" ||
    category !== "All";

  return (
    <div className="space-y-8">

      {/* Hero */}

      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 p-8 text-white shadow-xl">

        <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-white/10 blur-3xl" />

        <div className="absolute -bottom-24 left-0 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" />

        <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

          <div>

            <p className="text-sm uppercase tracking-[0.3em] text-blue-100">
              Dream Management
            </p>

            <h1 className="mt-3 text-5xl font-bold">
              💭 Dream Vault
            </h1>

            <p className="mt-4 max-w-xl text-blue-100">
              Turn your dreams into achievable goals.
              Track every milestone and watch your
              progress grow over time.
            </p>

            <div className="mt-8 flex flex-wrap gap-6">

              <div>

                <p className="text-sm text-blue-200">
                  Active Dreams
                </p>

                <h2 className="text-3xl font-bold">
                  {dreams.length}
                </h2>

              </div>

              <div>

                <p className="text-sm text-blue-200">
                  Total Saved
                </p>

                <h2 className="text-3xl font-bold">
                  Rp{" "}
                  {totalSaved.toLocaleString(
                    "id-ID"
                  )}
                </h2>

              </div>

            </div>

          </div>

          <Button
            variant="secondary"
            onClick={handleAdd}
            className="rounded-2xl bg-white px-8 py-4 font-semibold text-slate-900 hover:bg-slate-100"
          >
            + Create Dream
          </Button>

        </div>

      </section>

      <DreamToolbar
        search={search}
        onSearchChange={setSearch}
        category={category}
        onCategoryChange={setCategory}
      />

      <div className="flex items-center justify-between">

        <DreamStats dreams={filteredDreams} />

        <span className="text-sm text-slate-500">
          Showing{" "}
          <strong>
            {filteredDreams.length}
          </strong>{" "}
          of{" "}
          <strong>{dreams.length}</strong>{" "}
          dreams
        </span>

      </div>

      {filteredDreams.length === 0 ? (
        <DreamEmpty
          hasFilter={hasFilter}
          onClearFilter={handleClearFilter}
          onCreateDream={handleAdd}
        />
      ) : (
        <DreamGrid
          dreams={filteredDreams}
          onSelect={handleSelect}
        />
      )}

      <DreamModal
        open={open}
        onClose={() => {
          setOpen(false);
          setSelectedDream(null);
        }}
        onSave={handleSave}
        initialData={selectedDream}
      />

    </div>
  );
}