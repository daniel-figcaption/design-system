import clsx from "clsx";
import "./IconCtaSet.scss";
import { TBaseComponent } from "../lib/types";
import { OneOrMany } from "@src/lib/types";
import React from "react";
import defineComponent from "../lib/defineComponent";
import assertAsBase from "../lib/assertAsBase";
import IconCtaBrand from "../IconCta/IconCtaBrand";

export type TCtaSetComponent = TBaseComponent<{
  children?: OneOrMany<React.ReactElement>; // TElement<TBaseIconCta>[]
}>;

const IconCtaSet: TCtaSetComponent = defineComponent(({
  className,
  children,
}) => {
  const ctas = assertAsBase(children, IconCtaBrand);
  
  const allClasses = clsx(
    'c-icon-cta-set',
    className,
  );

  return (
    <ul className={allClasses}>
      {ctas.map((cta, i) => (
        <li key={i} className="c-icon-cta-set__item">
          {cta}
        </li>
      ))}
    </ul>
  );
});

export default IconCtaSet;
