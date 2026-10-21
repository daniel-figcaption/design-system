import type { Meta } from '@storybook/react';
import Textbox from './Textbox';
import FieldDecorator from '@sb/decorators/FieldDecorator/FieldDecorator';
import createPartialMeta from '@src/components/lib/storybook/createPartialMeta';
import { textboxTypes } from './lib/enums';
import { fullControlSizes } from '../shared/enums';

const meta: Meta<typeof Textbox> = {
  title: 'Components/Control/Full Control/Textbox',
  ...createPartialMeta({
    component: Textbox,
    layout: FieldDecorator,
    fields: {
      type: {
        p1_typeSafeDefaultValue: 'text',
        p2_valueTypeLabel: 'string',
        p3_description: 'The value of the `type` attribute on the `<input>` element.',
        p4_storybookControlType: 'select',
        p5_controlOptions: textboxTypes,
      },
      size: {
        p1_typeSafeDefaultValue: 'base',
        p2_valueTypeLabel: 'string',
        p3_description: 'The size of the textbox.',
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
        p3_description: 'Extra HTML attributes to apply to the `<input>` element.',
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
