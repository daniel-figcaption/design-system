import clsx from "clsx";
import './ToggleFieldSet.scss';
import { TBaseComponent } from "../lib/types";
import { OneOrMany } from "@src/lib/types";
import React from "react";
import defineComponent from "../lib/defineComponent";
import ToggleField from "../ToggleField/ToggleField";
import assertAsType from "../lib/assertAsType";
import { TToggleFieldSetLayout } from "./lib/types";

export type TToggleFieldSetComponent = TBaseComponent<{
  layout?: TToggleFieldSetLayout;
  children: OneOrMany<React.ReactElement>; // TElement<TToggleField>[]
}>;

const ToggleFieldSet: TToggleFieldSetComponent = defineComponent(({
  layout = 'stacked',
  className,
  children
}) => {
  const fields = assertAsType(children, ToggleField);

  const allClasses = clsx(
    'c-toggle-field-set',
    {
      'c-toggle-field-set--row': layout === 'row',
    },
    className,
  );

  return (
    <ul className={allClasses}>
      {fields.map((field, i) => (
        <li key={i} className="c-toggle-field-set__item">
          {field}
        </li>
      ))}
    </ul>
  )
});

export default ToggleFieldSet;
