import type { Meta } from '@storybook/react';
import CtaSet from './IconCtaSet';

const meta: Meta<typeof CtaSet> = {
  title: 'Components/IconCtaSet',
  component: CtaSet,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    children: [],
    className: undefined,
  },
  argTypes: {
    children: {
      control: false,
      description: 'An array of [IconCtaLink](./?path=/docs/components-iconcta-iconctalink--docs) or [IconCtaButton](./?path=/docs/components-iconcta-iconctabutton--docs) components.',
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
export { default as NavIcons } from './stories/NavIcons';
