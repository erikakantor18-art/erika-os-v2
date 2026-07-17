"use client";

import { useEffect, useState } from "react";

import { Dream } from "@/types/dream";

import {
  getDreams,
  saveDreams,
} from "@/lib/dreamStorage";

export function useDream() {
  const [dreams, setDreams] = useState<Dream[]>([]);

  useEffect(() => {
    setDreams(getDreams());
  }, []);

  function addDream(
    dream: Omit<Dream, "id">
  ) {
    const newDream: Dream = {
      id: Date.now(),
      ...dream,
    };

    const updated = [
      ...dreams,
      newDream,
    ];

    setDreams(updated);

    saveDreams(updated);
  }

  function updateDream(
    id: number,
    dream: Omit<Dream, "id">
  ) {
    const updated = dreams.map((item) =>
      item.id === id
        ? {
            id,
            ...dream,
          }
        : item
    );

    setDreams(updated);

    saveDreams(updated);
  }

  function deleteDream(id: number) {
    const updated = dreams.filter(
      (item) => item.id !== id
    );

    setDreams(updated);

    saveDreams(updated);
  }

  function updateSaving(
    id: number,
    amount: number
  ) {
    const updated = dreams.map((item) => {
      if (item.id !== id) return item;

      return {
        ...item,
        current: item.current + amount,
      };
    });

    setDreams(updated);

    saveDreams(updated);
  }

  return {
    dreams,

    addDream,

    updateDream,

    deleteDream,

    updateSaving,
  };
}