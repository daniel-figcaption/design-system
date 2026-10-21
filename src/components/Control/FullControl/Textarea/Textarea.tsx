import clsx from "clsx";
import "./Textarea.scss";
import { TBaseFullControl, TFullControlSize } from "../shared/types";
import defineFullControlComponent from "../shared/defineFullControlComponent";

export type TTextareaComponent = TBaseFullControl<{
  rows?: number;
  size?: TFullControlSize;
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
