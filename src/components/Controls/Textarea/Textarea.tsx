import clsx from "clsx";
import "./Textarea.scss";

export type TProps = {
  rows?: number;
  size?: 'sm' | 'base' | 'lg';
  value?: string;
  hasError?: boolean;
  textareaAttributes?: React.TextareaHTMLAttributes<HTMLTextAreaElement>;
  className?: string;
};

const Textarea: React.FC<TProps> = ({
  rows = 3,
  size = 'base',
  value,
  hasError = false,
  textareaAttributes: {
    className: textareaAttrsClassName,
    ...textareaAttributes
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
      {...textareaAttributes} 
    />
  );
};

export default Textarea;
