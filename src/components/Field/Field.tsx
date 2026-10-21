import clsx from "clsx";
import "./Field.scss";
import useUniqueId from "../lib/hooks/useUniqueId";
import { _FieldWithControl, _FieldWithFieldset } from "./lib/FieldHelper";
import { TBaseComponent } from "../lib/types";
import defineComponent from "../lib/defineComponent";
import isElementOfType from "../lib/isElementOfType";
import ToggleFieldSet from "../ToggleFieldSet/ToggleFieldSet";
import assertAsOneOfBase from "../lib/assertAsOneOfBase";
import FullControlBrand from "../Control/FullControl/FullControlBrand";
import isElementOfBase from "../lib/isElementOfBase";
import { TFieldErrorMessagePositions, TFieldHelpTextPositions } from "./lib/types";

export type TFieldComponent = TBaseComponent<{
  label: string;
  children: React.ReactElement; // TElement<TBaseFullControl | TToggleFieldSetComponent>
  isRequired?: boolean;
  helpText?: string;
  helpTextPosition?: TFieldHelpTextPositions;
  activeErrorMessage?: string;
  errorMessagePosition?: TFieldErrorMessagePositions;
}>;

const Field: TFieldComponent = defineComponent(({
  label,
  children,
  isRequired = false,
  helpText,
  helpTextPosition = 'after',
  activeErrorMessage,
  errorMessagePosition = 'after',
  className,
}) => {
  const core = assertAsOneOfBase(children);

  const allClasses = clsx(
    'c-field',
    {
      'c-field--required': isRequired,
      'has-error': activeErrorMessage,
    },
    className,
  );

  const helpTextId = useUniqueId('help');
  const errorMessageId = useUniqueId('error');

  const ariaDescribedBy = clsx({
    [helpTextId]: helpText,
    [errorMessageId]: activeErrorMessage,
  }) || undefined;

  const requiredFlagEl = isRequired ? (
    <span className="c-field__required-flag">
      <span className="u-visually-hidden">(is required)</span>
    </span>
  ) : undefined;

  const helpTextContent = helpText ? (
    <p className="c-field__help-text" id={helpTextId}>
      {helpText}
    </p>
  ) : undefined;

  const errorMessageContent = activeErrorMessage ? (
    <p className="c-field__error-message" id={errorMessageId}>
      {activeErrorMessage}
    </p>
  ) : undefined;

  const preContent = (
    <>
      {helpTextPosition === 'before' && helpTextContent}
      {errorMessagePosition === 'before' && errorMessageContent}
    </>
  );

  const postContent = (
    <>
      {helpTextPosition === 'after' && helpTextContent}
      {errorMessagePosition === 'after' && errorMessageContent}
    </>
  );

  if (isElementOfBase(core, FullControlBrand)) {
    return (
      <_FieldWithControl
        control={core}
        allClasses={allClasses}
        ariaDescribedBy={ariaDescribedBy}
        label={label}
        requiredFlagEl={requiredFlagEl}
        preContent={preContent}
        postContent={postContent}
      />
    );
  } else if (isElementOfType(core, ToggleFieldSet)) {
    return (
      <_FieldWithFieldset
        fieldset={core}
        allClasses={allClasses}
        ariaDescribedBy={ariaDescribedBy}
        label={label}
        isRequired={isRequired}
        requiredFlagEl={requiredFlagEl}
        preContent={preContent}
        postContent={postContent}
      />
    );
  }
});

export default Field;
