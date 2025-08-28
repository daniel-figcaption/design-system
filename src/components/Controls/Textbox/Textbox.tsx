import clsx from "clsx";
import "./Textbox.scss";

export type TProps = {
  type?: 'text' | 'password' | 'email' | 'url' | 'search';
  size?: 'sm' | 'base' | 'lg';
  hasError?: boolean;
  inputAttributes?: React.InputHTMLAttributes<HTMLInputElement>;
  className?: string;
};

const Textbox: React.FC<TProps> = ({
  type = 'text',
  size = 'base',
  hasError = false,
  inputAttributes: {
    className: inputAttrsClassName,
    value,
    ...inputAttributes
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
      {...inputAttributes} 
    />
  );
};

export default Textbox;
