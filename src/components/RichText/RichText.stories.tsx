import RichText from './RichText';
import SectionDecorator from '@sb/decorators/SectionDecorator/SectionDecorator';
import createPartialMeta from '../lib/storybook/createPartialMeta';
import type { Meta } from '@storybook/react';

const meta: Meta<typeof RichText> = {
  title: 'Components/RichText',
  ...createPartialMeta({
    component: RichText,
    layout: SectionDecorator,
    fields: {
      children: {
        p1_typeSafeDefaultValue: null,
        p2_valueTypeLabel: 'ReactNode',
        p3_description: 'The rich text HTML content.',
        p4_storybookControlType: 'NOT_SHOWN',
      },
    },
  }),
};

export default meta;

export { default as Typical } from './stories/Typical';
