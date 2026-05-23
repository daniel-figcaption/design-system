import type { Meta } from '@storybook/react';
import RichText from './RichText';
import SectionDecorator from '@sb/decorators/SectionDecorator/SectionDecorator';

const meta: Meta<typeof RichText> = {
  title: 'Components/RichText',
  component: RichText,
  decorators: [SectionDecorator],
  tags: ['autodocs'],
  args: {
    className: undefined,
  },
  argTypes: {
    className: {
      control: 'text',
      description: 'Extra CSS classes to apply to the outer element.',
      table: {
        type: {
          summary: 'string',
        },
      },
    },
  },
};

export default meta;

export { default as Typical } from './stories/Typical';
