import type { StoryObj } from '@storybook/react';
import Component from '../CtaLink';

export const props: React.ComponentProps<typeof Component> = {
  label: 'test@example.com',
  variant: 'link',
  icon: 'envelope',
  url: 'mailto:test@example.com',
};

const Story: StoryObj<typeof Component> = {
  args: props,
};

export default Story;
