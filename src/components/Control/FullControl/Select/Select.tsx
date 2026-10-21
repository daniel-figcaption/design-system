import Icon from "../../../Icon/Icon";
import clsx from "clsx";
import "./Select.scss";
import { TRawOptions } from "./lib/types";
import toOptionItemArray from "./lib/toOptionItemArray";
import { TBaseFullControl, TFullControlSize } from "../shared/types";
import defineFullControlComponent from "../shared/defineFullControlComponent";

export type TSelectComponent = TBaseFullControl<{
  options: TRawOptions,
  size?: TFullControlSize;
}, HTMLSelectElement>;

const Select: TSelectComponent = defineFullControlComponent(({
  options: rawOptions,
  size = 'base',
  hasError = false,
  valueElAttrs: { 
    className: selectAttrsClassName,
    value,
    ...valueElAttrs
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
        {...valueElAttrs} 
      >
        {optionItems.map(({ optionLabel, optionValue }) => (
          <option key={optionValue} value={optionValue}>
            {optionLabel}
          </option>
        ))}
      </select>
    </span>
  );
});

export default Select;
