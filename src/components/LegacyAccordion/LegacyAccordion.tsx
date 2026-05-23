import clsx from "clsx";
import React, { useCallback, useEffect, useState } from "react";
import "./LegacyAccordion.scss";
import LegacyAccordionSection from "./LegacyAccordionSection/LegacyAccordionSection";
import defineComponent from "../lib/defineComponent";
import { OneOrMany } from "@src/lib/types";
import { TBaseComponent } from "../lib/types";
import assertAsType from "../lib/assertAsType";

export type TLegacyAccordionComponent = TBaseComponent<{
  allowMultipleExpanded?: boolean;
  children?: OneOrMany<React.ReactElement>; // TElement<LegacyAccordionSection>[]
}>;

const LegacyAccordion: TLegacyAccordionComponent = defineComponent(({
  allowMultipleExpanded = true,
  className,
  children,
}) => {
  const sections = assertAsType(children, LegacyAccordionSection);

  const allClasses = clsx(
    'c-legacy-accordion', 
    className
  );

  // Initial state derived once from children
  const [expandedIndexes, setExpandedIndexes] = useState<number[]>(() => {
    const indexes: number[] = [];

    sections.forEach((child, index) => {
      if (child.props.isExpanded) {
        indexes.push(index);
      }
    });

    return allowMultipleExpanded ? indexes : indexes.slice(0, 1);
  });

  // Reconcile state if allowMultipleExpanded changes
  useEffect(() => {
    if (!allowMultipleExpanded && expandedIndexes.length > 1) {
      setExpandedIndexes(([first]) => (first !== undefined ? [first] : []));
    }
  }, [allowMultipleExpanded, expandedIndexes]);

  const handleToggleClick = useCallback(
    (index: number) => {
      setExpandedIndexes((prev) => {
        const isExpanded = prev.includes(index);

        if (allowMultipleExpanded) {
          return isExpanded
            ? prev.filter((i) => i !== index)
            : [...prev, index];
        }

        return isExpanded ? [] : [index];
      });
    },
    [allowMultipleExpanded]
  );

  return (
    <ul className={allClasses}>
      {sections.map((child, i) => {
        return (
          <li key={child.key ?? i} className="c-legacy-accordion__item">
            {React.cloneElement(child, {
              isExpanded: expandedIndexes.includes(i),
              onToggleClick: () => handleToggleClick(i),
            })}
          </li>
        );
      })}
    </ul>
  );
});

export default LegacyAccordion;
