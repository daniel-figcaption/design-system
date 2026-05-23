import type { StoryObj } from '@storybook/react';
import Component from '../CtaLink';

export const props: React.ComponentProps<typeof Component> = {
  label: 'Find out more',
  variant: 'secondary',
  url: 'https://www.example.com/',
};

const Story: StoryObj<typeof Component> = {
  args: props,
};

export default Story;
