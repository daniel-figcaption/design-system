import { cloneElement, isValidElement } from 'react';
import ToggleField, { TProps as TToggleFieldProps } from '../ToggleField';

/*
 *  renderWithUniqueId
 *  This renders the ToggleField component while injecting a unique HTML `id`.
 *
 *  This gets injected:
 *     1. As the `controlId` prop to the ToggleField.
 *     2. As the `id` of the `<input>` element via `inputAttributes` on the control.
 *
 */
const renderWithUniqueId = ({
  control,
  ...args
}: TToggleFieldProps) => {
  const htmlId = `field_${crypto.randomUUID()}`;

  let clonedControl = control;
  if (isValidElement(control)) {
    clonedControl = cloneElement(control, {
      ...control.props,
      inputAttributes: {
        ...control.props.inputAttributes,
        id: htmlId,
      },
    });
  }

  return (
    <ToggleField
      {...args}
      control={clonedControl}
      controlId={htmlId}
    />
  );
};

export default renderWithUniqueId;
