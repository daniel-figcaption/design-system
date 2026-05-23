import type { Meta } from '@storybook/react';
import Select from './Select';
import FieldDecorator from '@sb/decorators/FieldDecorator/FieldDecorator';

const meta: Meta<typeof Select> = {
  title: 'Components/Control/Full Control/Select',
  component: Select,
  decorators: [FieldDecorator],
  tags: ['autodocs'],
  args: {
    options: {},
    size: 'base',
    hasError: false,
    valueElAttrs: {},
    className: undefined,
  },
  argTypes: {
    options: {
      control: 'object',
      description: 'The list of options.',
      table: {
        type: {
          summary: 'object | array',
        },
      },
    },
    size: {
      control: 'select',
      description: 'The size of the select.',
      options: ['sm', 'base', 'lg'],
      table: {
        defaultValue: {
          summary: 'base',
        },
        type: {
          summary: 'string',
        },
      },
    },
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
      description: 'Extra HTML attributes to apply to the `<select>` element.',
      table: {
        type: {
          summary: 'object',
        },
      },
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
