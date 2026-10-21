import type { Meta } from '@storybook/react';
import Textarea from './Textarea';
import FieldDecorator from '@sb/decorators/FieldDecorator/FieldDecorator';
import createPartialMeta from '@src/components/lib/storybook/createPartialMeta';
import { fullControlSizes } from '../shared/enums';

const meta: Meta<typeof Textarea> = {
  title: 'Components/Control/Full Control/Textarea',
  ...createPartialMeta({
    component: Textarea,
    layout: FieldDecorator,
    fields: {
      rows: {
        p1_typeSafeDefaultValue: 3,
        p2_valueTypeLabel: 'number',
        p3_description: 'The height in terms of the number of rows of text to show.',
        p4_storybookControlType: 'number',
        p5_controlNumberSettings: {
          min: 1,
          max: 16,
          step: 1, 
        },
      },
      size: {
        p1_typeSafeDefaultValue: 'base',
        p2_valueTypeLabel: 'string',
        p3_description: 'The size of the textarea, in terms of font size, spacing.',
        p4_storybookControlType: 'select',
        p5_controlOptions: fullControlSizes,
      },
      hasError: {
        p1_typeSafeDefaultValue: false,
        p2_valueTypeLabel: 'boolean',
        p3_description: 'Whether or not the component is actively in an error state.',
        p4_storybookControlType: 'boolean',
      },
      valueElAttrs: {
        p1_typeSafeDefaultValue: undefined,
        p2_valueTypeLabel: 'object',
        p3_description: 'Extra HTML attributes to apply to the `<textarea>` element.',
        p4_storybookControlType: 'object',
      },
    },
  }),
};

export default meta;

export { default as Typical } from './stories/Typical';
export { default as ErrorState } from './stories/ErrorState';
export { default as Disabled } from './stories/Disabled';
export { default as WithPlaceholderText } from './stories/WithPlaceholderText';
