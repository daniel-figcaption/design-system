import type { Meta } from '@storybook/react';
import Field from './Field';
import FieldDecorator from '@sb/decorators/FieldDecorator/FieldDecorator';
import createPartialMeta from '../lib/storybook/createPartialMeta';
import textboxMeta from '../Control/FullControl/Textbox/Textbox.stories';
import { fieldErrorMessagePositions, fieldHelpTextPositions } from './lib/enums';
import toggleFieldSetMeta from '../ToggleFieldSet/ToggleFieldSet.stories';

const meta: Meta<typeof Field> = {
  title: 'Components/Field/Field',
  ...createPartialMeta({
    component: Field,
    layout: FieldDecorator,
    fields: {
      label: {
        p1_typeSafeDefaultValue: '',
        p2_valueTypeLabel: 'string',
        p3_description: 'The text label to display above the control.',
        p4_storybookControlType: 'text',
      },
      children: {
        p1_typeSafeDefaultValue: null,
        p2_valueTypeLabel: 'ReactNode',
        p3_description: `The field core element. The element must be either of type \`FullControl\` (e.g. a [${textboxMeta.title}]), or a [${toggleFieldSetMeta.title}] element.`,
        p4_storybookControlType: 'NOT_SHOWN',
      },
      isRequired: {
        p1_typeSafeDefaultValue: false,
        p2_valueTypeLabel: 'boolean',
        p3_description: 'Mandatory fields are marked with an asterisk.',
        p4_storybookControlType: 'boolean',
      },
      helpText: {
        p1_typeSafeDefaultValue: undefined,
        p2_valueTypeLabel: 'string',
        p3_description: 'Extra information about this field to display to the user.',
        p4_storybookControlType: 'text',
      },
      helpTextPosition: {
        p1_typeSafeDefaultValue: 'after',
        p2_valueTypeLabel: 'string',
        p3_description: 'Whether the help text should display before (above), or after (below) the control.',
        p4_storybookControlType: 'inline-radio',
        p5_controlOptions: fieldHelpTextPositions,
      },
      activeErrorMessage: {
        p1_typeSafeDefaultValue: undefined,
        p2_valueTypeLabel: 'string',
        p3_description: 'A validation message related to the control\'s current error state. This message should help the use identify the problem.',
        p4_storybookControlType: 'text',
      },
      errorMessagePosition: {
        p1_typeSafeDefaultValue: 'after',
        p2_valueTypeLabel: 'string',
        p3_description: 'Whether the error message should display before (above), or after (below) the control.',
        p4_storybookControlType: 'inline-radio',
        p5_controlOptions: fieldErrorMessagePositions,
      },
    },
  }),
};

export default meta;

export { default as Typical } from './stories/Typical';
export { default as Simple } from './stories/Simple';
export { default as ErrorState } from './stories/ErrorState';
export { default as WithRadios } from './stories/WithRadios';
export { default as WithCheckboxes } from './stories/WithCheckboxes';
export { default as WithSelect } from './stories/WithSelect';
export { default as WithTextarea } from './stories/WithTextarea';
