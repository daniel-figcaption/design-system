import clsx from "clsx";
import React from "react";
import "./ToggleField.scss";
import { TToggleControl } from "../Controls/lib/types";

export type TProps = {
  label: string | React.ReactNode;
  control: React.ReactElement<React.ComponentProps<TToggleControl>>;
  controlId?: string;
  isRequired?: boolean;
  helpText?: string | React.ReactNode;
  activeErrorMessage?: string;
  className?: string;
};

const ToggleField: React.FC<TProps> = ({
  label,
  control,
  controlId,
  isRequired = false,
  helpText,
  activeErrorMessage,
  className,
}) => {
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
        {control}
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
};

export default ToggleField;
