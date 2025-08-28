import clsx from "clsx";
import "./Radio.scss";

export type TProps = {
  hasError?: boolean;
  inputAttributes?: React.InputHTMLAttributes<HTMLInputElement>;
  className?: string;
};

const Radio: React.FC<TProps> = ({
  hasError = false,
  inputAttributes: {
    className: inputAttrsClassName,
    ...inputAttributes
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
        {...inputAttributes}
      />
    </label>
  );
};

export default Radio;
