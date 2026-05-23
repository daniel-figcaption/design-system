import type { Meta } from '@storybook/react';
import LegacyAccordion from './LegacyAccordion';
import SectionDecorator from '@sb/decorators/SectionDecorator/SectionDecorator';

const meta: Meta<typeof LegacyAccordion> = {
  title: 'Components/Accordion/LegacyAccordion',
  component: LegacyAccordion,
  decorators: [SectionDecorator],
  tags: ['autodocs'],
  args: {
    className: undefined,
  },
  argTypes: {
    className: {
      control: 'text',
      description: 'Extra CSS classes to apply to the outer element.',
    },
  },
};

export default meta;

export { default as Typical } from './stories/Typical';
