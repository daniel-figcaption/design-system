import type { Meta } from '@storybook/react';
import Radio from './Radio';

const meta: Meta<typeof Radio> = {
  title: 'Components/Control/Toggle Control/Radio',
  component: Radio,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    hasError: false,
    valueElAttrs: {},
    className: undefined,
  },
  argTypes: {
    hasError: {
      control: 'boolean',
      description: 'Whether or not the component is actively in an error state.',
      table: {
        type: {
          summary: 'boolean',
        },
      },
    },
    valueElAttrs: {
      control: 'object',
      description: 'Extra HTML attributes to apply to the `<input>` element.',
      table: {
        type: {
          summary: 'object',
        },
      }
    },
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
export { default as ErrorState } from './stories/ErrorState';
export { default as Disabled } from './stories/Disabled';
