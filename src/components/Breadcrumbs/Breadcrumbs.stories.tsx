import type { Meta } from '@storybook/react';
import Breadcrumbs from './Breadcrumbs';
import SectionDecorator from '@sb/decorators/SectionDecorator/SectionDecorator';
import createPartialMeta from '../lib/storybook/createPartialMeta';

const meta: Meta<typeof Breadcrumbs> = {
  title: 'Components/Breadcrumbs',
  ...createPartialMeta({
    component: Breadcrumbs,
    layout: SectionDecorator,
    fields: {
      items: {
        p1_typeSafeDefaultValue: [],
        p2_valueTypeLabel: 'array',
        p3_description: 'The list of breadcrumb item objects.',
        p4_storybookControlType: 'object',
      },
      ariaLabel: {
        p1_typeSafeDefaultValue: 'Breadcrumbs',
        p2_valueTypeLabel: 'string',
        p3_description: 'The screen reader label for this component.',
        p4_storybookControlType: 'text',
      },
    },
  }),
};

export default meta;

export { default as Typical } from './stories/Typical';
export { default as Long } from './stories/Long';
