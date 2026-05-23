import defineComponent from "@src/components/lib/defineComponent";
import { TBaseComponent } from "@src/components/lib/types";
import clsx from "clsx";
import { SyntheticEvent, useState } from "react";

export type TAccordionSectionComponent = TBaseComponent<{
  heading: string;
  isDefaultOpen?: boolean;
  name?: string;
  children?: React.ReactNode; // Miscellaneous, but usually TElement<RichText>[]
}>;

const AccordionSection: TAccordionSectionComponent = defineComponent(({
  heading,
  isDefaultOpen = false,
  name,
  className,
  children,
}) => {
  const allClasses = clsx(
    'c-accordion__details',
    className,
  );

  const [isOpen, setIsOpen] = useState<boolean>(isDefaultOpen);

  const handleToggle = (e: SyntheticEvent<HTMLDetailsElement>) => {
    setIsOpen(e.currentTarget.open);
  };

  return (
    <details className={allClasses} name={name} open={isOpen} onToggle={handleToggle}>
      <summary className="c-accordion__summary">
        {heading}
      </summary>
      <div className="c-accordion__panel">
        {children}
      </div>
    </details>
  );
});

export default AccordionSection;
