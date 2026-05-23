import type { Meta } from '@storybook/react';
import Notice from './Notice';
import "./Notice.scss";

const meta: Meta<typeof Notice> = {
  title: 'Components/Notice',
  component: Notice,
  decorators: [],
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
