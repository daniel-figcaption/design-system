import { cloneElement, isValidElement } from 'react';
import Field, { TProps as TFieldProps } from '../Field';

/*
 *  renderWithUniqueId
 *  This renders the Field component while injecting a unique HTML `id`.
 *
 *  This gets injected:
 *     1. As the `controlId` prop to the Field.
 *     2. As the `id` of the control element via extra attributes prop on the control.
 *
 */
const renderWithUniqueId = ({
  control,
  ...args
}: TFieldProps) => {
  const htmlId = `field_${crypto.randomUUID()}`;

  let clonedControl = control;
  if (isValidElement(control)) {
    let props = control.props;
    if ('inputAttributes' in props) {
      props = {
        ...props,
        inputAttributes: {
          ...props.inputAttributes,
          id: htmlId,
        },
      };
    } else if ('selectAttributes' in props) {
      props = {
        ...props,
        selectAttributes: {
          ...props.selectAttributes,
          id: htmlId,
        },
      };
    } else if ('textareaAttributes' in props) {
      props = {
        ...props,
        textareaAttributes: {
          ...props.textareaAttributes,
          id: htmlId,
        },
      };
    }
    clonedControl = cloneElement(control, props);
  }

  return (
    <Field
      {...args}
      control={clonedControl}
      controlId={htmlId}
    />
  );
};

export default renderWithUniqueId;
