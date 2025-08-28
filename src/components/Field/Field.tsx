import clsx from "clsx";
import React from "react";
import "./Field.scss";
import { TControl } from "../Controls/lib/types";

export type TProps = {
  label: string;
  control: React.ReactElement<React.ComponentProps<TControl>>;
  controlId?: string;
  isRequired?: boolean;
  helpText?: string;
  helpTextPosition?: 'before' | 'after';
  activeErrorMessage?: string;
  errorMessagePosition?: 'before' | 'after';
  className?: string;
};

const Field: React.FC<TProps> = ({
  label,
  control,
  controlId,
  isRequired = false,
  helpText,
  helpTextPosition = 'after',
  activeErrorMessage,
  errorMessagePosition = 'after',
  className,
}) => {
  const allClasses = clsx(
    'c-field',
    {
      'c-field--required': isRequired,
      'has-error': activeErrorMessage,
    },
    className,
  );

  const HelpText = () => (
    <p className="c-field__help-text">
      {helpText}
    </p>
  );

  const ErrorMessage = () => (
    <p className="c-field__error-message">
      {activeErrorMessage}
    </p>
  );

  return (
    <div className={allClasses}>
      <label className="c-field__label" htmlFor={controlId}>
        {label}
        {isRequired && (
          <span className="c-field__required-flag">
            <span className="visually-hidden">(is required)</span>
          </span>
        )}
      </label>
      {helpText && helpTextPosition === 'before' && (
        <HelpText />
      )}
      {activeErrorMessage && errorMessagePosition === 'before' && (
        <ErrorMessage />
      )}
      <div className="c-field__control-wrap">
        {control}
      </div>
      {activeErrorMessage && errorMessagePosition === 'after' && (
        <ErrorMessage />
      )}
      {helpText && helpTextPosition === 'after' && (
        <HelpText />
      )}
    </div>
  );
};

export default Field;
