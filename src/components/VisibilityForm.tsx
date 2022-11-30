import type { FC } from "react";
import { Trans } from "react-i18next";
import { Form, IForm } from "./Form";
import { Toggle } from "./Toggle";

type Props = Omit<IForm, "children" | "name">;

export const VisibilityForm: FC<Props> = (props) => {
  return (
    <Form className="card flex flex-col p-8" name="visibility" {...props}>
      <strong>
        <h2 className="text-xl">Visibility</h2>
      </strong>
      <span className="items-center flex gap-4">
        <Toggle labelKey="texts.visible" name="visible" />
      </span>
      <div className="flex flex-row gap-4">
        <span className="flex flex-col flex-1">
          <label htmlFor="visible_from">
            <Trans i18nKey={"visible_from"}>Visible from</Trans>
          </label>
          <input type="date" className="input" name="visible_from" />
        </span>
        <span className="flex flex-col flex-1">
          <label htmlFor="visible_until">
            <Trans i18nKey={"visible_until"}>Visible until</Trans>
          </label>
          <input type="date" className="input" name="visible_until" />
        </span>
      </div>
      <div className="col">
        <label htmlFor="warehouse_count">
          <Trans i18nKey={"texts.warehouse_count"}>Warehouse count</Trans>
        </label>
        <input type="number" name="warehouse_count" className="input" />
      </div>
    </Form>
  );
};
