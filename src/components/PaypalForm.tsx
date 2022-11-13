import type { FC } from "react";
import { Trans } from "react-i18next";

export const PaypalForm: FC = () => {
  const handleSubmit = (event: any) => {
    event.preventDefault();

    console.log("event ->", event.target.paypal.value);
  };

  return (
    <form className="card flex flex-col p-8 w-96 mx-auto" onSubmit={handleSubmit}>
      <Trans i18nKey={"titles.paypal"}>Paypal</Trans>
      <input className="input" name="paypal" />
      <button type="submit" className="button">
        <Trans i18nKey={"buttons.save"}>Save</Trans>
      </button>
    </form>
  );
};
