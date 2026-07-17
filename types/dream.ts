export type DreamCategory =
  | "Australia"
  | "Tablet"
  | "House"
  | "Car"
  | "Travel"
  | "Study"
  | "Camera"
  | "Wedding";

export interface Dream {
  id: number;

  title: string;

  description: string;

  category: DreamCategory;

  target: number;

  current: number;

  deadline: string;
}