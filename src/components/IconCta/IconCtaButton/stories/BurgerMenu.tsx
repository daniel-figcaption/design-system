import type { StoryObj } from '@storybook/react';
import Component from '../IconCtaButton';

export const props: React.ComponentProps<typeof Component> = {
  icon: 'burger-menu',
  variant: 'bare',
  hiddenLabel: 'Menu',
  size: 'xl',
};

const Story: StoryObj<typeof Component> = {
  args: props,
};

export default Story;
