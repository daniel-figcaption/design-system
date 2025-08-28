import type { Meta } from '@storybook/react';
import CtaButton from './CtaButton';
import { argTypes as ctaArgTypes, defaultProps as defaultCtaProps } from '../Cta.stories.config';
import CtaDecorator from '@sb/decorators/CtaDecorator/CtaDecorator';

const CTABUTTON_CATEGORY = 'CtaButton Properties';

const meta: Meta<typeof CtaButton> = {
  title: 'Components/Cta/CtaButton',
  component: CtaButton,
  decorators: [CtaDecorator],
  tags: ['autodocs'],
  args: {
    ...defaultCtaProps,
    buttonType: 'button',
    buttonAttributes: {},
  },
  argTypes: {
    ...ctaArgTypes,
    buttonType: {
      control: 'select',
      description: 'The value of the `type` attribute on the `button` element.',
      options: ['button', 'submit', 'reset'],
      table: {
        defaultValue: {
          summary: 'button',
        },
        category: CTABUTTON_CATEGORY,
        type: {
          summary: 'string',
        },
      },
    },
    buttonAttributes: {
      control: 'object',
      description: 'Extra HTML attributes to apply to the `button` element. Use `className` to apply extra classes.',
      table: {
        category: CTABUTTON_CATEGORY,
      },
    },
  }
};

export default meta;

export { default as Typical } from './stories/Typical';
export { default as FullWidth } from './stories/FullWidth';
export { default as MinorAction } from './stories/MinorAction';
export { default as CloseButton } from './stories/CloseButton';
export { default as Disabled } from './stories/Disabled';
