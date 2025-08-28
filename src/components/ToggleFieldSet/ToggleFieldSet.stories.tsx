import type { Meta } from '@storybook/react';
import ToggleFieldSet from './ToggleFieldSet';
import ToggleField from '../ToggleField/ToggleField';
import Radio from '../ToggleControls/Radio/Radio';
import FieldDecorator from '@sb/decorators/FieldDecorator/FieldDecorator';

const meta: Meta<typeof ToggleFieldSet> = {
  title: 'Components/Forms/ToggleFieldSet',
  component: ToggleFieldSet,
  decorators: [FieldDecorator],
  tags: ['autodocs'],
  args: {
    fields: [],
    layout: 'stacked',
    className: undefined,
  },
  argTypes: {
    fields: {
      control: false,
      description: 'An array of [ToggleField](./?path=/docs/components-forms-togglefield--docs) components.',
      table: {
        type: {
          summary: 'array',
        },
      },
    },
    layout: {
      control: 'inline-radio',
      description: 'Whether the items should appear stacked, or displayed in a horizontal row (useful for shorter lists).',
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    className: {
      control: 'text',
      description: 'Extra CSS classes to apply to the outer element.',
    },
  },
};

export default meta;

export { default as RowLayout } from './stories/RowLayout';
export { default as LongAnswers } from './stories/LongAnswers';
export { default as WithCheckboxes } from './stories/WithCheckboxes';
