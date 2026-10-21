import clsx from "clsx";
import "./Notice.scss";
import defineComponent from "../lib/defineComponent";
import { TBaseComponent } from "../lib/types";
import IconCtaButton from "../IconCta/IconCtaButton/IconCtaButton";
import useUniqueId from "../lib/hooks/useUniqueId";
import { useState } from "react";
import { TNoticePriority } from "./lib/types";

type TNoticeComponent = TBaseComponent<{
  priority: TNoticePriority;
  children?: React.ReactNode; // Miscellaneous, but usually TElement<RichText>[]
  title?: string;
  isDismissable?: boolean;
  isContainerized?: boolean;
}>;

const Notice: TNoticeComponent = defineComponent(({
  priority,
  children = '',
  title,
  isDismissable = true,
  isContainerized = false,
  className,
}) => {
  const allClasses = clsx(
    'c-notice',
    {
      'c-notice--containerized': isContainerized,
    },
    className,
  );

  const titleId = useUniqueId('notice-title');

  const [isDismissed, setIsDismissed] = useState(false);
  const handleCloseClick = () => {
    setIsDismissed(true);
  };

  let role;
  switch (priority) {
    case 'normal': role = 'status'; break;
    case 'urgent': role = 'alert'; break;
  }

  return (
    <div 
      className={allClasses} 
      role={role} 
      aria-labelledby={title ? titleId : undefined}
      hidden={isDismissed}
    >
      {isDismissable && (
        <p className="c-notice__button-wrap">
          <IconCtaButton
            variant="bare"
            icon="x"
            hiddenLabel="Close"
            onClick={handleCloseClick}
          />
        </p>
      )}
      <div className="c-notice__content">
        {title && (
          <p className="c-notice__title" id={titleId}>{title}</p>
        )}
        <div className="c-notice__message">
          {children}
        </div>
      </div>
    </div>
  );
});

export default Notice
