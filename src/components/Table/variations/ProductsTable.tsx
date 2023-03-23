import type { FC } from "react";
import type { IProduct } from "@my-types/products";
import type { TTableColumn } from "@my-types/components";
import { Table } from "@components/Table";
import { parseDate } from "src/utils/parseDate";

const products: IProduct[] = [
  {
    id: 1,
    title: "Produkt č. 1",
    warehouse_count: 5,
    category_id: 1,
    images: [],
    price: "119.00",
    available_from: "2022-06-20T06:11:54",
    available_to: "2022-06-24T06:11:54",
  },
  {
    id: 2,
    title: "Produkt č. 2",
    warehouse_count: 5,
    category_id: 1,
    images: [],
    price: "99.99",
    available_from: "2022-06-20T06:11:54",
    available_to: "2022-06-24T06:11:54",
  },
];

const columns: TTableColumn<IProduct> = [
  {
    title: "ID",
    renderer: ({ id }) => id,
  },
  {
    title: "Názov",
    renderer: ({ title }) => title,
  },
  {
    title: "Cena",
    renderer: ({ price }) => price + " €",
  },
  {
    title: "Zobraziť od",
    renderer: ({ available_from }) => available_from && parseDate(available_from),
  },
  {
    title: "Zobraziť do",
    renderer: ({ available_to }) => available_to && parseDate(available_to),
  },
];

const handleRowClick = (item: IProduct) => {
  window.location.href = `/products/detail?id=${item.id}`;
};

export const ProductsTable: FC = ({}) => {
  return (
    <div className="card p-0">
      <Table
        data={products}
        columns={columns}
        className="p-8 w-full rounded-none"
        onRowClick={handleRowClick}
      />
    </div>
  );
};
