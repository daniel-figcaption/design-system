import type { Meta } from '@storybook/react';
import ToggleField from './ToggleField';
import FieldDecorator from '@sb/decorators/FieldDecorator/FieldDecorator';
import createPartialMeta from '../lib/storybook/createPartialMeta';
import checkboxMeta from '../Control/ToggleControl/Checkbox/Checkbox.stories';
import radioMeta from '../Control/ToggleControl/Radio/Radio.stories';

const meta: Meta<typeof ToggleField> = {
  title: 'Components/Field/ToggleField',
  ...createPartialMeta({
    component: ToggleField,
    layout: FieldDecorator,
    fields: {
      label: {
        p1_typeSafeDefaultValue: '',
        p2_valueTypeLabel: ['string', 'ReactNode'],
        p3_description: 'The label to display above the control. This can either be a simple string, or rich text HTML for formatting (e.g. `<strong>`).',
        p4_storybookControlType: 'text',
      },
      children: {
        p1_typeSafeDefaultValue: null,
        p2_valueTypeLabel: 'ReactNode',
        p3_description: `The toggle element, normally a [${checkboxMeta.title}] or [${radioMeta.title}] element.`,
        p4_storybookControlType: 'NOT_SHOWN',
      },
      helpText: {
        p1_typeSafeDefaultValue: '',
        p2_valueTypeLabel: ['string', 'ReactNode'],
        p3_description: 'Extra info about this field. This can either be a simple string, or rich text HTML for formatting (e.g. `<strong>`).',
        p4_storybookControlType: 'text',
      },
      isRequired: {
        p1_typeSafeDefaultValue: false,
        p2_valueTypeLabel: 'boolean',
        p3_description: 'Mandatory fields are marked with an asterisk.',
        p4_storybookControlType: 'boolean',
      },
      activeErrorMessage: {
        p1_typeSafeDefaultValue: undefined,
        p2_valueTypeLabel: 'string',
        p3_description: 'A validation message related to the control\'s current error state. This message should help the use identify the problem.',
        p4_storybookControlType: 'text',
      },
    },
  }),
};

export default meta;

export { default as Typical } from './stories/Typical';
export { default as LabelFormatting } from './stories/LabelFormatting';
export { default as Simple } from './stories/Simple';
export { default as RadioToggle } from './stories/RadioToggle';
export { default as ErrorState } from './stories/ErrorState';
export { default as LongLabel } from './stories/LongLabel';
