import clsx from "clsx";
import "./CtaSet.scss";
import { TBaseComponent } from "../lib/types";
import React from "react";
import { OneOrMany } from "@src/lib/types";
import defineComponent from "../lib/defineComponent";
import assertAsBase from "../lib/assertAsBase";
import CtaBrand from "../Cta/CtaBrand";

export type TCtaSetComponent = TBaseComponent<{
  children?: OneOrMany<React.ReactElement>; // TElement<TBaseCta>[]
}>;

const CtaSet: TCtaSetComponent = defineComponent(({
  className,
  children,
}) => {
  const ctas = assertAsBase(children, CtaBrand);
  
  const allClasses = clsx(
    'c-cta-set',
    className,
  );

  return (
    <ul className={allClasses}>
      {ctas.map((cta, i) => (
        <li key={i} className="c-cta-set__item">
          {cta}
        </li>
      ))}
    </ul>
  );
});

export default CtaSet;
