import type { StoryObj } from '@storybook/react';
import Component from '../IconCtaLink';

export const props: React.ComponentProps<typeof Component> = {
  icon: 'envelope',
  variant: 'primary-outlined',
  hiddenLabel: 'Email me',
  url: 'me@example.com',
};

const Story: StoryObj<typeof Component> = {
  args: props,
};

export default Story;
