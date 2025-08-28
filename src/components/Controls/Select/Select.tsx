import React from "react";
import Icon from "../../Icon/Icon";
import clsx from "clsx";
import "./Select.scss";
import { TRawOptions } from "./lib/types";
import toOptionItemArray from "./lib/toOptionItemArray";

export type TProps = {
  options: TRawOptions,
  size?: 'sm' | 'base' | 'lg';
  hasError?: boolean;
  selectAttributes?: React.SelectHTMLAttributes<HTMLSelectElement>;
  className?: string;
};

const Select: React.FC<TProps> = ({
  options: rawOptions,
  size = 'base',
  hasError = false,
  selectAttributes: { 
    className: selectAttrsClassName, 
    value,
    ...selectAttributes
  } = {},
  className
}) => {
  const allClasses = clsx(
    'c-select',
    {
      'c-select--sm': size === 'sm',
      'c-select--lg': size === 'lg',
      'has-error': hasError,
    },
    className,
  );

  const allSelectClasses = clsx(
    'c-select__select',
    selectAttrsClassName,
  );

  const optionItems = toOptionItemArray(rawOptions);

  return (
    <span className={allClasses}>
      <select
        className={allSelectClasses}
        defaultValue={value}
        {...selectAttributes} 
      >
        {optionItems.map(({ optionLabel, optionValue }) => (
          <option key={optionValue} value={optionValue}>
            {optionLabel}
          </option>
        ))}
      </select>
      <Icon className="c-select__icon" iconName="chevron-down" />
    </span>
  );
};

export default Select;
