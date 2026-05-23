import type { Meta } from '@storybook/react';
import MiniForm from './MiniForm';
import FieldDecorator from '@sb/decorators/FieldDecorator/FieldDecorator';

const meta: Meta<typeof MiniForm> = {
  title: 'Components/MiniForm',
  component: MiniForm,
  decorators: [FieldDecorator],
  tags: ['autodocs'],
  args: {
    control: undefined,
    hiddenControlLabel: undefined,
    cta: undefined,
    className: undefined,
  },
  argTypes: {
    control: {
      control: false,
      description: 'The control to enter information, usually a [Textbox](./?path=/docs/components-forms-controls-textbox--docs) component.',
    },
    hiddenControlLabel: {
      control: 'text',
      description: 'The text label for the control to display to screen readers.',
    },
    cta: {
      control: false,
      description: 'The submit button, usually a [CtaButton](./?path=/docs/components-iconcta-iconctabutton--docs) or [IconCtaButton](./?path=/docs/components-iconcta-iconctabutton--docs) component.',
    },
    className: {
      control: 'text',
      description: 'Extra CSS classes to apply to the outer element.',
    },
  },
};

export default meta;

export { default as Typical } from './stories/Typical';
export { default as IconCta } from './stories/IconCta';
export { default as SubscribeForm } from './stories/SubscribeForm';
