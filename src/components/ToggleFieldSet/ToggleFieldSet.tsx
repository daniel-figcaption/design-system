import clsx from "clsx";
import React from "react";
import ToggleField from "../ToggleField/ToggleField";
import './ToggleFieldSet.scss';

export type TProps = {
  fields: React.ReactElement<React.ComponentProps<typeof ToggleField>>[];
  layout?: 'stacked' | 'row';
  className?: string;
};

const ToggleFieldSet: React.FC<TProps> = ({
  fields,
  layout = 'stacked',
  className,
}) => {
  const allClasses = clsx(
    'o-toggle-field-set',
    {
      'o-toggle-field-set--row': layout === 'row',
    },
    className,
  );

  return (
    <ul className={allClasses}>
      {fields.map((field, i) => (
        <li key={i} className="o-toggle-field-set__item">
          {field}
        </li>
      ))}
    </ul>
  )
};

export default ToggleFieldSet;
