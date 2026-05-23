import clsx from "clsx";
import React from "react";
import "./Accordion.scss";
import AccordionSection from "./AccordionSection/AccordionSection";
import defineComponent from "../lib/defineComponent";
import { OneOrMany } from "@src/lib/types";
import { TBaseComponent } from "../lib/types";
import assertAsType from "../lib/assertAsType";
import useUniqueId from "../lib/hooks/useUniqueId";

export type TAccordionComponent = TBaseComponent<{
  allowMultipleExpanded?: boolean;
  children?: OneOrMany<React.ReactElement>; // TElement<AccordionSection>[]
}>;

const Accordion: TAccordionComponent = defineComponent(({
  allowMultipleExpanded = true,
  className,
  children,
}) => {
  const uniqueId = useUniqueId('accordion');
  const accordionName = allowMultipleExpanded ? undefined : uniqueId;

  const sections = assertAsType(children, AccordionSection);

  const allClasses = clsx(
    'c-accordion', 
    className
  );

  return (
    <ul className={allClasses}>
      {sections.map((child, i) => {
        return (
          <li key={child.key ?? i} className="c-accordion__item">
            {React.cloneElement(child, {
              name: accordionName,
            })}
          </li>
        );
      })}
    </ul>
  );
});

export default Accordion;
