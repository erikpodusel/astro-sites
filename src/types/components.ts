import type { ReactNode } from "react";

export interface ITable {
  apiUrl?: string;
  columns: TTableColumn<any>;
  data: any[];
  className?: string;
  headerClass?: string;
  rowClass?: string;
  dataClass?: string;
  onRowClick?: (item: any) => void;
}

export type TTableColumn<T> = Array<{
  title: string;
  renderer: (item: T) => ReactNode;
}>;
