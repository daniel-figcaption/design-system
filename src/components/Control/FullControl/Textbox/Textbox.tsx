import clsx from "clsx";
import "./Textbox.scss";
import { TBaseFullControl } from "../lib/types";
import defineFullControlComponent from "../lib/defineFullControlComponent";

export type TTextboxComponent = TBaseFullControl<{
  type?: 'text' | 'password' | 'email' | 'url' | 'search';
  size?: 'sm' | 'base' | 'lg';
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
