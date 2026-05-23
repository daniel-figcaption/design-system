import type { Meta } from '@storybook/react';
import ToggleField from './ToggleField';
import FieldDecorator from '@sb/decorators/FieldDecorator/FieldDecorator';

const meta: Meta<typeof ToggleField> = {
  title: 'Components/Field/ToggleField',
  component: ToggleField,
  decorators: [FieldDecorator],
  tags: ['autodocs'],
  args: {
    label: undefined,
    children: undefined,
    helpText: undefined,
    isRequired: false,
    activeErrorMessage: undefined,
  },
  argTypes: {
    label: {
      control: 'text',
      description: 'The label to display above the control. This can be either plain text, or contain simple HTML formatting (e.g. **bold** text).',
      table: {
        type: {
          summary: 'string | HTML',
        },
      },
    },
    children: {
      control: false,
      description: 'The toggle element, e.g. a [Checkbox](./?path=/docs/components-forms-toggle-controls-checkbox--docs) component.',
      table: {
        type: {
          summary: null as any,
        },
      },
    },
    helpText: {
      control: 'text',
      description: 'Extra info about this field. This can be either plain text, or contain simple HTML formatting (e.g. **bold** text).',
      table: {
        type: {
          summary: 'string | HTML',
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
export { default as LabelFormatting } from './stories/LabelFormatting';
export { default as Simple } from './stories/Simple';
export { default as RadioToggle } from './stories/RadioToggle';
export { default as ErrorState } from './stories/ErrorState';
export { default as LongLabel } from './stories/LongLabel';
