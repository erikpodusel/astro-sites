import type { ITable } from "@my-types/components";
import type { FC } from "react";

export const Table: FC<ITable> = ({
  data,
  columns,
  className,
  rowClass,
  headerClass,
  dataClass,
  onRowClick,
}) => {
  return (
    <table className={className + " overflow-hidden"}>
      <tbody>
        <tr className={rowClass}>
          {columns.map(({ title }) => (
            <th className={"p-4 " + headerClass} key={title}>
              {title}
            </th>
          ))}
        </tr>
        {data.map((item, index) => (
          <tr
            className={`${rowClass} ${
              onRowClick ? "cursor-pointer hover:bg-hover" : ""
            } transition-colors duration-300`}
            onClick={() => onRowClick?.(item)}
            key={`row-${index}`}
          >
            {columns.map(({ renderer }, index) => (
              <td className={"p-4 text-center " + dataClass} key={`col-${index}`}>
                {renderer?.(item)}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
