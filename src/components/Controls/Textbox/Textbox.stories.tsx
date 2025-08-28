import type { Meta } from '@storybook/react';
import Textbox from './Textbox';
import FieldDecorator from '@sb/decorators/FieldDecorator/FieldDecorator';

const meta: Meta<typeof Textbox> = {
  title: 'Components/Forms/Controls/Textbox',
  component: Textbox,
  decorators: [FieldDecorator],
  tags: ['autodocs'],
  args: {
    type: 'text',
    size: 'base',
    hasError: false,
    inputAttributes: {},
  },
  argTypes: {
    type: {
      control: 'select',
      description: 'The value of the `type` attribute on the `<input>` element.',
      options: ['text', 'password', 'email', 'url', 'search'],
      table: {
        defaultValue: {
          summary: 'text',
        },
        type: {
          summary: 'string',
        },
      },
    },
    size: {
      control: 'select',
      description: 'The size of the textbox.',
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
    inputAttributes: {
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
export { default as WithPlaceholderText } from './stories/WithPlaceholderText';
