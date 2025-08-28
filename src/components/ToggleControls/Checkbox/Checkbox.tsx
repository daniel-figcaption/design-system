import clsx from "clsx";
import "./Checkbox.scss";

export type TProps = {
  hasError?: boolean;
  inputAttributes?: React.InputHTMLAttributes<HTMLInputElement>;
  className?: string;
};

const Checkbox: React.FC<TProps> = ({
  hasError = false,
  inputAttributes: {
    className: inputAttrsClassName,
    ...inputAttributes
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
        {...inputAttributes}
      />
    </label>
  );
};

export default Checkbox;
