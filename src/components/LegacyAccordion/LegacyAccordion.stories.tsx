import type { Meta } from '@storybook/react';
import LegacyAccordion from './LegacyAccordion';
import SectionDecorator from '@sb/decorators/SectionDecorator/SectionDecorator';
import createPartialMeta from '../lib/storybook/createPartialMeta';

const meta: Meta<typeof LegacyAccordion> = {
  title: 'Components/Accordion/LegacyAccordion',
  ...createPartialMeta({
    component: LegacyAccordion,
    layout: SectionDecorator,
    fields: {
      children: {
        p1_typeSafeDefaultValue: null,
        p2_valueTypeLabel: 'ReactNode',
        p3_description: 'A set of `AccordionSection` elements.',
        p4_storybookControlType: 'NOT_SHOWN',
      },
      allowMultipleExpanded: {
        p1_typeSafeDefaultValue: true,
        p2_valueTypeLabel: 'boolean',
        p3_description: 'Whether or not multiple sections should be able to be open simultaenously.',
        p4_storybookControlType: 'boolean',
      },
    },
  }),
};

export default meta;

export { default as Typical } from './stories/Typical';
