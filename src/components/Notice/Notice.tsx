import clsx from "clsx";
import defineComponent from "../lib/defineComponent";
import { TBaseComponent } from "../lib/types";

type TNoticeComponent = TBaseComponent<{
  isDismissable?: boolean;
  children?: React.ReactNode; // Miscellaneous, but usually TElement<RichText>[]
}>;

const Notice: TNoticeComponent = defineComponent(({
  isDismissable,
  className,
  children,
}) => {
  const allClasses = clsx(
    'c-notice',
    className,
  );

  return (
    <div className={allClasses}>
      <div className="u-container">
        {children}
      </div>
    </div>
  );
});

export default Notice
