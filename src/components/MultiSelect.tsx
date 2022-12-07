import { Popover } from "@headlessui/react";
import { FC, useState } from "react";
import { Tag } from "./Tag";

interface MultiSelectItem {
  value: string;
  title: string;
  disabled?: boolean;
  hidden?: boolean;
}

interface Props {
  placeholder?: string;
  defaultValue?: Set<string>;
  data?: MultiSelectItem[];
}

const panelData: MultiSelectItem[] = [
  // {
  //   value: "1",
  //   title: "Product 1",
  // },
  // {
  //   value: "2",
  //   title: "Product 2",
  // },
  // {
  //   value: "3",
  //   title: "Product 3",
  // },
];

for (let i = 0; i < 1000; i++) {
  panelData.push({ value: i.toString(), title: `Product ${i}` });
}

export const MultiSelect: FC<Props> = ({ placeholder, defaultValue, data = panelData }) => {
  // export const MultiSelect: FC = ({}) => {
  const [selectedValues, setSelectedValues] = useState<Set<string>>(new Set(defaultValue));

  const handleClick = (value: string) => {
    setSelectedValues((prev) => {
      if (prev.has(value)) {
        const filteredSet = new Set(prev);

        filteredSet.delete(value);

        return filteredSet;
      } else {
        return new Set(prev).add(value);
      }
    });
  };

  return (
    <Popover className="relative">
      <Popover.Button className={"input items-center w-full row flex-wrap gap-2"}>
        {selectedValues.size > 0
          ? data.map(({ value, title }) =>
              selectedValues.has(value) ? (
                <Tag
                  title={title}
                  onClick={(e) => {
                    e.preventDefault();
                    handleClick(value);
                  }}
                  key={`tag-${title}-${value}`}
                />
              ) : null,
            )
          : placeholder}
      </Popover.Button>
      <Popover.Panel className="absolute z-10 max-h-60 col card gap-0 overflow-scroll">
        {data.map(({ value, title }, index) => (
          <span
            key={`${value}-${index}`}
            className={`cursor-pointer p-4 hover:bg-hover transition-all duration-300
            hover:rounded-3xl ${selectedValues.has(value) ? "rounded-xl bg-hover" : ""}
            `}
            onClick={() => {
              handleClick(value);
            }}
          >
            {title}
          </span>
        ))}
      </Popover.Panel>
    </Popover>
  );
};
