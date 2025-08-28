import type { Meta } from '@storybook/react';
import Textarea from './Textarea';
import FieldDecorator from '@sb/decorators/FieldDecorator/FieldDecorator';

const meta: Meta<typeof Textarea> = {
  title: 'Components/Forms/Controls/Textarea',
  component: Textarea,
  decorators: [FieldDecorator],
  tags: ['autodocs'],
  args: {
    rows: 3,
    size: 'base',
    value: undefined,
    hasError: false,
    textareaAttributes: {},
    className: undefined,
  },
  argTypes: {
    rows: {
      control: { 
        type: 'number', 
        min: 1,
        max: 16,
        step: 1, 
      },
      description: 'The height in terms of the number of rows of text to show.',
      table: {
        defaultValue: {
          summary: '3',
        },
        type: {
          summary: 'number',
        },
      },
    },
    size: {
      control: 'select',
      description: 'The size of the textarea, in terms of font size, spacing.',
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
    value: {
      control: 'text',
      description: 'The initial value of the `<textarea>` on page load.',
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
    textareaAttributes: {
      control: 'object',
      description: 'Extra HTML attributes to apply to the `<textarea>` element.',
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
