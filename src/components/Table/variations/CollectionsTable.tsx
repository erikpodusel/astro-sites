import type { ICollection } from "@my-types/collections";
import type { TTableColumn } from "@my-types/components";
import { parseDate } from "src/utils/parseDate";
import { Table } from "..";

const collections: ICollection[] = [
  {
    id: 1,
    title: "Kolekcia č. 1",
    images: [],
    available_from: "2022-06-20T06:11:54",
    available_to: "2022-06-24T06:11:54",
    product_ids: [],
  },
  {
    id: 2,
    title: "Kolekcia č. 2",
    images: [],
    available_from: "2022-06-20T06:11:54",
    available_to: "2022-06-24T06:11:54",
    product_ids: [],
  },
];

const columns: TTableColumn<ICollection> = [
  {
    title: "ID",
    renderer: ({ id }) => id,
  },
  {
    title: "Názov",
    renderer: ({ title }) => title,
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

const handleRowClick = (item: ICollection) => {
  window.location.href = `/collections/detail?id=${item.id}`;
};

export const CollectionsTable = () => {
  return (
    <div className="card p-0">
      <Table
        data={collections}
        columns={columns}
        className="p-8 w-full rounded-none"
        onRowClick={handleRowClick}
      />
    </div>
  );
};
