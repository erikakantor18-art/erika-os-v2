import { DreamCategory } from "@/types/dream";

export interface DreamCategoryConfig {
  label: string;
  icon: string;
  color: "blue" | "emerald" | "purple" | "orange" | "red";
  gradient: string;
}

export const DREAM_CATEGORIES: Record<
  DreamCategory,
  DreamCategoryConfig
> = {
  Australia: {
    label: "Australia",
    icon: "🇦🇺",
    color: "emerald",
    gradient: "from-emerald-500 to-green-600",
  },

  Tablet: {
    label: "Tablet",
    icon: "💻",
    color: "blue",
    gradient: "from-blue-500 to-cyan-500",
  },

  House: {
    label: "House",
    icon: "🏡",
    color: "orange",
    gradient: "from-orange-500 to-yellow-500",
  },

  Car: {
    label: "Car",
    icon: "🚗",
    color: "red",
    gradient: "from-red-500 to-rose-500",
  },

  Travel: {
    label: "Travel",
    icon: "✈️",
    color: "blue",
    gradient: "from-sky-500 to-cyan-500",
  },

  Study: {
    label: "Study",
    icon: "🎓",
    color: "purple",
    gradient: "from-violet-500 to-purple-600",
  },

  Camera: {
    label: "Camera",
    icon: "📷",
    color: "blue",
    gradient: "from-slate-500 to-slate-700",
  },

  Wedding: {
    label: "Wedding",
    icon: "❤️",
    color: "red",
    gradient: "from-pink-500 to-rose-500",
  },
};

export function getDreamCategory(
  category: DreamCategory
) {
  return DREAM_CATEGORIES[category];
}