import type { FC, MouseEventHandler, ReactElement } from "react";

interface Props {
  title: string;
  onClick?: MouseEventHandler<HTMLSpanElement>;
  onCrossClick?: MouseEventHandler<HTMLSpanElement>;
}

export const Tag: FC<Props> = ({ title, onClick, onCrossClick }) => {
  return (
    <span
      className="px-2 bg-black rounded-md text-white text-sm items-center cursor-default row"
      onClick={onClick}
    >
      {title}
      {onCrossClick ? (
        <span className={"pl-2 leading-none cursor-pointer h-full"} onClick={onCrossClick}>
          x
        </span>
      ) : null}
    </span>
  );
};
