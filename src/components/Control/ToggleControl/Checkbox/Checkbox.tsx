import clsx from "clsx";
import "./Checkbox.scss";
import { TBaseToggleControl } from "../lib/types";
import defineToggleControlComponent from "../lib/defineToggleControlComponent";

export type TCheckboxComponent = TBaseToggleControl<{}>;

const Checkbox: TCheckboxComponent = defineToggleControlComponent(({
  hasError = false,
  valueElAttrs: {
    className: inputAttrsClassName,
    ...valueElAttrs
  } = {},
  className,
}) => {
  const allClasses = clsx(
    'c-checkbox',
    {
      'has-error': hasError,
    },
    className,
  );

  const allInputClasses = clsx(
    'c-checkbox__hidden-input',
    inputAttrsClassName,
  );

  return (
    <label className={allClasses}>
      <input 
        className={allInputClasses} 
        type="checkbox"
        {...valueElAttrs}
      />
    </label>
  );
});

export default Checkbox;
