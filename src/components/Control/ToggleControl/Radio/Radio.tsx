import clsx from "clsx";
import "./Radio.scss";
import { TBaseToggleControl } from "../lib/types";
import defineToggleControlComponent from "../lib/defineToggleControlComponent";

export type TRadioComponent = TBaseToggleControl<{}>;

const Radio: TRadioComponent = defineToggleControlComponent(({
  hasError = false,
  valueElAttrs: {
    className: inputAttrsClassName,
    ...valueElAttrs
  } = {},
  className,
}) => {
  const allClasses = clsx(
    'c-radio',
    {
      'has-error': hasError,
    },
    className,
  );

  const allInputClasses = clsx(
    'c-radio__hidden-input',
    inputAttrsClassName,
  );

  return (
    <label className={allClasses}>
      <input 
        className={allInputClasses} 
        type="radio"
        {...valueElAttrs}
      />
    </label>
  );
});

export default Radio;
