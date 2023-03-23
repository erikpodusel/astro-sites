import type { Method } from "axios";
import type { FC, ReactNode } from "react";
import { Trans } from "react-i18next";
import { isValueDefined } from "src/utils/isValueDefined";

export interface IForm {
  children: ReactNode;
  apiUrl?: string;
  method?: Method;
  className?: string;
  name: string;
}

export const Form: FC<IForm> = ({ children, className, name }) => {
  const handleSubmit = (event: any) => {
    event.preventDefault();

    const form = document.getElementById(name);

    const data = new FormData(form as HTMLFormElement);

    let dataObject = {};

    for (const [key, value] of data) {
      if (!isValueDefined(value)) continue;

      dataObject = { ...dataObject, [key]: value };
    }

    console.log("dataObject ->", dataObject);
  };

  return (
    <form className={className} onSubmit={handleSubmit} id={name}>
      {children}
      <button type="submit" className="button">
        <Trans i18nKey={"buttons.save"}>Save</Trans>
      </button>
    </form>
  );
};
