import type { Meta } from '@storybook/react';
import Radio from './Radio';
import createPartialMeta from '@src/components/lib/storybook/createPartialMeta';

const meta: Meta<typeof Radio> = {
  title: 'Components/Control/Toggle Control/Radio',
  ...createPartialMeta({
    component: Radio,
    layout: 'centered',
    fields: {
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
