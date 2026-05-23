import type { StoryObj } from '@storybook/react';
import Component from '../IconCtaLink';

export const props: React.ComponentProps<typeof Component> = {
  icon: 'home',
  variant: 'bare',
  hiddenLabel: 'Home',
  size: 'sm',
  url: 'https://www.example.com/',
};

const Story: StoryObj<typeof Component> = {
  args: props,
};

export default Story;
