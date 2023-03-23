import { Popover } from "@headlessui/react";
import { FC, ReactNode, useCallback, useState } from "react";
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

const panelData: MultiSelectItem[] = [];

for (let i = 1; i <= 1000; i++) {
  panelData.push({ value: i.toString(), title: `Product ${i}` });
}

export const MultiSelect: FC<Props> = ({ placeholder, defaultValue, data = panelData }) => {
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

  const renderTags = useCallback(() => {
    if (!selectedValues.size) return placeholder;

    const tags: ReactNode[] = [];

    selectedValues.forEach((selectedValue) => {
      const title = data.find(({ value }) => value === selectedValue)?.title;

      if (!title) return;

      tags.push(
        <Tag
          title={title}
          onCrossClick={(e) => {
            e.preventDefault();
            handleClick(selectedValue);
          }}
          key={`tag-${title}-${selectedValue}`}
        />,
      );
    });

    return tags;
  }, [selectedValues, data, placeholder]);

  return (
    <Popover className="relative">
      <Popover.Button className={"input items-center w-full row flex-wrap gap-2"}>
        {renderTags()}
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
