import type { IVisibility } from "./components";

export interface ICollection extends IVisibility {
  id: number;
  title: string;
  product_ids: number[];
  images: string[];
}
