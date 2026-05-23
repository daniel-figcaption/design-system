import type { Meta } from '@storybook/react';
import Field from './Field';
import FieldDecorator from '@sb/decorators/FieldDecorator/FieldDecorator';

const meta: Meta<typeof Field> = {
  title: 'Components/Field/Field',
  component: Field,
  decorators: [FieldDecorator],
  tags: ['autodocs'],
  args: {
    label: undefined,
    isRequired: false,
    helpText: undefined,
    helpTextPosition: 'after',
    activeErrorMessage: undefined,
    errorMessagePosition: 'after',
    className: undefined,
    children: undefined,
  },
  argTypes: {
    label: {
      control: 'text',
      description: 'The text label to display above the control.',
    },
    children: {
      control: false,
      description: 'The full control element, e.g. a [Textbox](./?path=/docs/components-forms-controls-textbox--docs) component.',
      table: {
        type: {
          summary: null as any,
        },
      },
    },
    helpText: {
      control: 'text',
      description: 'Extra information about this field to display to the user.',
    },
    helpTextPosition: {
      control: 'inline-radio',
      description: 'Whether the help text should display before (above), or after (below) the control.',
      options: ['before', 'after'],
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    isRequired: {
      control: 'boolean',
      description: 'Mandatory fields are marked with an asterisk.',
    },
    activeErrorMessage: {
      control: 'text',
      description: 'A validation message related to the control\'s current error state. This message should help the use identify the problem.',
    },
    errorMessagePosition: {
      control: 'inline-radio',
      description: 'Whether the error message should display before (above), or after (below) the control.',
      options: ['before', 'after'],
      table: {
        type: {
          summary: 'string',
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
export { default as Simple } from './stories/Simple';
export { default as ErrorState } from './stories/ErrorState';
export { default as WithRadios } from './stories/WithRadios';
export { default as WithCheckboxes } from './stories/WithCheckboxes';
export { default as WithSelect } from './stories/WithSelect';
export { default as WithTextarea } from './stories/WithTextarea';
