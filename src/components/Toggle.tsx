import { FC, ReactNode, useState } from "react";
import { Trans } from "react-i18next";

interface Props {
  labelKey: string;
  name: string;
  checked?: boolean;
}

export const Toggle: FC<Props> = ({ labelKey, checked = false, name }) => {
  const [enabled, setEnabled] = useState(checked);

  return (
    <div className="flex items-center">
      <input type="checkbox" className={"hidden"} defaultChecked={enabled} name={name} />
      <button
        type="button"
        className={`${
          enabled ? "bg-primary" : "bg-gray-200"
        } relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none`}
        role="switch"
        onClick={() => {
          setEnabled((prev) => !prev);
        }}
      >
        <span
          aria-hidden="true"
          className={`${
            enabled ? "translate-x-5" : "translate-x-0"
          } pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200`}
        ></span>
      </button>
      <label className="ml-3" id="annual-billing-label">
        <span className="text-sm font-medium text-gray-900">
          <Trans i18nKey={labelKey}></Trans>
        </span>
      </label>
    </div>
  );
};
