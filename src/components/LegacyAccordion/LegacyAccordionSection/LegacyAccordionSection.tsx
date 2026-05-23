import defineComponent from "@src/components/lib/defineComponent";
import useUniqueId from "@src/components/lib/hooks/useUniqueId";
import { TBaseComponent } from "@src/components/lib/types";
import clsx from "clsx";
import React from "react";

export type TLegacyAccordionSectionComponent = TBaseComponent<{
  heading: string;
  isExpanded?: boolean;
  onToggleClick?: () => void;
  children?: React.ReactNode; // Miscellaneous, but usually TElement<RichText>[]
}>;

const LegacyAccordionSection: TLegacyAccordionSectionComponent = defineComponent(({
  heading,
  isExpanded = false,
  onToggleClick,
  className,
  children,
}) => {
  const allClasses = clsx(
    'c-legacy-accordion__section',
    className,
  );

  const toggleButtonId = useUniqueId('toggle');
  const panelId = useUniqueId('panel');

  return (
    <section className={allClasses}>
      <h2 className="c-legacy-accordion__heading">
        <button 
          className="c-legacy-accordion__toggle-button" 
          type="button" 
          id={toggleButtonId}
          aria-expanded={isExpanded}
          aria-controls={panelId}
          onClick={onToggleClick}
        >
          {heading}
        </button>
      </h2>
      <div 
        className="c-legacy-accordion__panel" 
        id={panelId}
        role="region"
        aria-labelledby={toggleButtonId}
        hidden={!isExpanded}
      >
        {children}
      </div>
    </section>
  );
});

export default LegacyAccordionSection;
