import clsx from "clsx";
import "./Textarea.scss";
import { TBaseFullControl } from "../lib/types";
import defineFullControlComponent from "../lib/defineFullControlComponent";

export type TTextareaComponent = TBaseFullControl<{
  rows?: number;
  size?: 'sm' | 'base' | 'lg';
}, HTMLTextAreaElement>;

const Textarea: TTextareaComponent = defineFullControlComponent(({
  rows = 3,
  size = 'base',
  hasError = false,
  valueElAttrs: {
    className: textareaAttrsClassName,
    value,
    ...valueElAttrs
  } = {},
  className,
}) => {
  const allClasses = clsx(
    'c-textarea',
    {
      'c-textarea--sm': size === 'sm',
      'c-textarea--lg': size === 'lg',
      'has-error': hasError,
    },
    textareaAttrsClassName,
    className,
  );

  return (
    <textarea 
      className={allClasses} 
      rows={rows}
      defaultValue={value}
      {...valueElAttrs} 
    />
  );
});

export default Textarea;
