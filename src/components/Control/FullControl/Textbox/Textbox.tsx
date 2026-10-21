import clsx from "clsx";
import "./Textbox.scss";
import { TBaseFullControl, TFullControlSize } from "../shared/types";
import defineFullControlComponent from "../shared/defineFullControlComponent";
import { TTextboxType } from "./lib/types";

export type TTextboxComponent = TBaseFullControl<{
  type?: TTextboxType;
  size?: TFullControlSize;
}, HTMLInputElement>;

const Textbox: TTextboxComponent = defineFullControlComponent(({
  type = 'text',
  size = 'base',
  hasError = false,
  valueElAttrs: {
    className: inputAttrsClassName,
    value,
    ...valueElAttrs
  } = {},
  className,
}) => {
  const allClasses = clsx(
    'c-textbox',
    {
      'c-textbox--sm': size === 'sm',
      'c-textbox--lg': size === 'lg',
      'has-error': hasError,
    },
    inputAttrsClassName,
    className,
  );

  return (
    <input 
      className={allClasses} 
      type={type} 
      defaultValue={value}
      {...valueElAttrs} 
    />
  );
});

export default Textbox;
