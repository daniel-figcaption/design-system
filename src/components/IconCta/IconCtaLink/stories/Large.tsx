import type { StoryObj } from '@storybook/react';
import Component from '../IconCtaLink';

export const props: React.ComponentProps<typeof Component> = {
  icon: 'user',
  variant: 'bare',
  size: 'lg',
  hiddenLabel: 'Account settings',
  url: 'https://www.example.com/',
};

const Story: StoryObj<typeof Component> = {
  args: props,
};

export default Story;
