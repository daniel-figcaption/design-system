import type { Meta } from '@storybook/react';
import IconCtaButton from './IconCtaButton';
import { argTypes as iconCtaArgTypes, defaultProps as defaultIconCtaProps } from '../IconCta.stories.config';
import CtaDecorator from '@sb/decorators/CtaDecorator/CtaDecorator';

const CTABUTTON_CATEGORY = 'Button Properties';

const meta: Meta<typeof IconCtaButton> = {
  title: 'Components/IconCta/IconCtaButton',
  component: IconCtaButton,
  decorators: [CtaDecorator],
  tags: ['autodocs'],
  args: {
    ...defaultIconCtaProps,
    buttonType: 'button',
    buttonAttributes: {},
  },
  argTypes: {
    ...iconCtaArgTypes,
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

export { default as Primary } from './stories/Primary';
export { default as Secondary } from './stories/Secondary';
export { default as Expand } from './stories/Expand';
export { default as CloseButton } from './stories/CloseButton';
export { default as BurgerMenu } from './stories/BurgerMenu';
