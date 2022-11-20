export interface IProduct {
  id: number;
  title: string;
  warehouse_count: number | null;
  sale?: number;
  category_id: number;
  price: string;
  images: string[];
  available?: boolean;
  available_from?: string;
  available_to?: string;
}
