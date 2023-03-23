import type { IVisibility } from "./components";

export interface IProduct extends IVisibility {
  id: number;
  title: string;
  warehouse_count: number | null;
  sale?: number;
  category_id: number;
  price: string;
  images: string[];
}
