import type { FC, MouseEventHandler, ReactElement } from "react";

interface Props {
  title: string;
  onClick?: MouseEventHandler<HTMLSpanElement>;
}

export const Tag: FC<Props> = ({ title, onClick }) => {
  return (
    <span className="px-2 bg-black rounded-full text-white text-sm" onClick={onClick}>
      {title}
    </span>
  );
};
