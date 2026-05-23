import FullControlBrand from "@src/components/Control/FullControl/FullControlBrand";
import useControlWithId from "@src/components/Control/lib/hooks/useControlWithId";
import assertAsOneOfBase from "@src/components/lib/assertAsOneOfBase";
import withClassName from "@src/components/lib/withClassName";
import React from "react";

type TProps = {
  control: React.ReactElement; // TElement<TBaseFullControl>
  allClasses: string;
  ariaDescribedBy: string | undefined;
  label: string;
  requiredFlagEl: React.ReactElement | undefined;
  preContent: React.ReactElement;
  postContent: React.ReactElement;
};

const _FieldWithControl: React.FC<TProps> = ({
  control: controlJsx,
  allClasses,
  ariaDescribedBy,
  label,
  requiredFlagEl,
  preContent,
  postContent,
}) => {
  const control = assertAsOneOfBase(controlJsx, FullControlBrand);
  const [controlWithId, controlId] = useControlWithId(control);

  return (
    <div className={allClasses}>
      <label className="c-field__label" htmlFor={controlId}>
        {label}
        {requiredFlagEl}
      </label>

      {preContent}
      <div className="c-field__core">
        {controlWithId && React.cloneElement(withClassName(controlWithId, 'c-field__control'), {
          valueElAttrs: {
            ...(controlWithId.props.valueElAttrs || {}) as any,
            "aria-describedby": ariaDescribedBy,
          },
        })}
      </div>
      {postContent}
    </div>
  );
};

export default _FieldWithControl;
