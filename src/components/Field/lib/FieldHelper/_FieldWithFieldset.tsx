import assertAsOneOfType from "@src/components/lib/assertAsOneOfType";
import withClassName from "@src/components/lib/withClassName";
import ToggleFieldSet from "@src/components/ToggleFieldSet/ToggleFieldSet";
import React from "react";

type TProps = {
  fieldset: React.ReactElement; // TElement<TToggleFieldSet>
  allClasses: string;
  ariaDescribedBy: string | undefined;
  label: string;
  isRequired: boolean;
  requiredFlagEl: React.ReactElement | undefined;
  preContent: React.ReactElement;
  postContent: React.ReactElement;
};

const _FieldWithFieldset: React.FC<TProps> = ({
  fieldset: fieldsetJsx,
  allClasses,
  ariaDescribedBy,
  label,
  isRequired,
  requiredFlagEl,
  preContent,
  postContent,
}) => {
  const fieldset = assertAsOneOfType(fieldsetJsx, ToggleFieldSet); 

  return (
    <fieldset className={allClasses} aria-describedby={ariaDescribedBy}>
      <legend className="visually-hidden">
        {label} {isRequired && '(is required)'}
      </legend>
      <div className="c-field__label" aria-hidden="true">
        {label}
        {requiredFlagEl}
      </div>

      {preContent}
      <div className="c-field__core">
        {withClassName(fieldset, 'c-field__field-set')}
      </div>
      {postContent}
    </fieldset>
  );
};

export default _FieldWithFieldset;
