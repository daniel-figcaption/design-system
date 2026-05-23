import clsx from "clsx";
import React from "react";
import "./RichText.scss";
import { TBaseComponent } from "../lib/types";
import defineComponent from "../lib/defineComponent";

export type TRichTextComponent = TBaseComponent<{
  children?: React.ReactNode;
}>;

const RichText: TRichTextComponent = defineComponent(({
  className,
  children,
}) => {
  const allClasses = clsx(
    'c-rich-text',
    className,
  );

  return (
    <div className={allClasses}>
      {children}
    </div>
  )
});

export default RichText;
