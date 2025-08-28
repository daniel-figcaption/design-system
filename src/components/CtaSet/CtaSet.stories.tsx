import type { Meta } from '@storybook/react';
import CtaSet from './CtaSet';

const meta: Meta<typeof CtaSet> = {
  title: 'Components/CtaSet',
  component: CtaSet,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    ctas: [],
    className: undefined,
  },
  argTypes: {
    ctas: {
      control: false,
      description: 'An array of [CtaLink](./?path=/docs/components-cta-ctalink--docs) or [CtaButton](./?path=/docs/components-cta-ctabutton--docs) components.',
      table: {
        type: {
          summary: 'array',
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

export { default as Typical } from './stories/Typical';
export { default as SocialMediaLinks } from './stories/SocialMediaLinks';
