import clsx from "clsx";
import React from "react";
import "./ToggleField.scss";
import useControlWithId from "../Control/lib/hooks/useControlWithId";
import { TBaseComponent } from "../lib/types";
import defineComponent from "../lib/defineComponent";
import ToggleControlBrand from "../Control/ToggleControl/ToggleControlBrand";
import assertAsOneOfBase from "../lib/assertAsOneOfBase";

export type TToggleFieldComponent = TBaseComponent<{
  label: string | React.ReactElement;
  isRequired?: boolean;
  helpText?: string | React.ReactElement;
  activeErrorMessage?: string;
  children: React.ReactElement; // TElement<TBaseToggleControl>
}>;

const ToggleField: TToggleFieldComponent = defineComponent(({
  label,
  isRequired = false,
  helpText,
  activeErrorMessage,
  className,
  children
}) => {
  const control = assertAsOneOfBase(children, ToggleControlBrand);
  const [controlWithId, controlId] = useControlWithId(control);

  const allClasses = clsx(
    'c-toggle-field',
    {
      'c-toggle-field--required': isRequired,
      'has-error': activeErrorMessage,
    },
    className,
  );

  return (
    <div className={allClasses}>
      <div className="c-toggle-field__control-wrap">
        {controlWithId}
      </div>
      <div className="c-toggle-field__text-wrap">
        <label className="c-toggle-field__label" htmlFor={controlId}>
          {label}
          {isRequired && (
            <span className="c-toggle-field__required-flag">
              <span className="visually-hidden">(is required)</span>
            </span>
          )}
        </label>
        {activeErrorMessage && (
          <p className="c-toggle-field__error-message">
            {activeErrorMessage}
          </p>
        )}
        {helpText && (
          <p className="c-toggle-field__help-text">
            {helpText}
          </p>
        )}
      </div>
    </div>
  );
});

export default ToggleField;
