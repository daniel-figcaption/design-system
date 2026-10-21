import type { Meta } from '@storybook/react';
import DropdownMenu from './DropdownMenu';
import createPartialMeta from '../lib/storybook/createPartialMeta';

const meta: Meta<typeof DropdownMenu> = {
  title: 'Components/DropdownMenu',
  ...createPartialMeta({
    component: DropdownMenu,
    layout: 'centered',
    fields: {
      links: {
        p1_typeSafeDefaultValue: [],
        p2_valueTypeLabel: 'array',
        p3_description: 'An array of link objects.',
        p4_storybookControlType: 'object',
      }
    },
  }),
};

export default meta;

export { default as Typical } from './stories/Typical';
