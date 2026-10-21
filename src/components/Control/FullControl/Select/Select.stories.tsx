import type { Meta } from '@storybook/react';
import Select from './Select';
import FieldDecorator from '@sb/decorators/FieldDecorator/FieldDecorator';
import createPartialMeta from '@src/components/lib/storybook/createPartialMeta';
import { fullControlSizes } from '../shared/enums';

const meta: Meta<typeof Select> = {
  title: 'Components/Control/Full Control/Select',
  ...createPartialMeta({
    component: Select,
    layout: FieldDecorator,
    fields: {
      options: {
        p1_typeSafeDefaultValue: [],
        p2_valueTypeLabel: ['array', 'object'],
        p3_description: 'The list of options. This can either be an array of simple strings, an array of option objects, or a dictionary.',
        p4_storybookControlType: 'object',
      },
      size: {
        p1_typeSafeDefaultValue: 'base',
        p2_valueTypeLabel: 'string',
        p3_description: 'The size of the select.',
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
        p3_description: 'Extra HTML attributes to apply to the `<select>` element.',
        p4_storybookControlType: 'object',
      },
    },
  }),
};

export default meta;

export { default as Typical } from './stories/Typical';
export { default as ErrorState } from './stories/ErrorState';
export { default as Disabled } from './stories/Disabled';
