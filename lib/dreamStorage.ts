import { Dream } from "@/types/dream";

const KEY = "flora-dreams";

export function getDreams(): Dream[] {
  if (typeof window === "undefined") {
    return [];
  }

  try {
    const data = localStorage.getItem(KEY);

    if (!data) {
      return [];
    }

    const dreams: Dream[] = JSON.parse(data);

    return dreams;
  } catch (error) {
    console.error("Failed to load dreams:", error);
    return [];
  }
}

export function saveDreams(dreams: Dream[]) {
  if (typeof window === "undefined") {
    return;
  }

  try {
    localStorage.setItem(
      KEY,
      JSON.stringify(dreams)
    );
  } catch (error) {
    console.error("Failed to save dreams:", error);
  }
}

export function clearDreams() {
  if (typeof window === "undefined") {
    return;
  }

  localStorage.removeItem(KEY);
}