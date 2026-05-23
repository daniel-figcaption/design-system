import type { StoryObj } from '@storybook/react';
import Component from '../CtaLink';

export const props: React.ComponentProps<typeof Component> = {
  label: 'Visit the website',
  variant: 'link',
  icon: 'external',
  iconPosition: 'after',
  iconRelativeSize: 'sm',
  url: 'https://www.example.com/',
  openInNewTab: true,
};

const Story: StoryObj<typeof Component> = {
  args: props,
};

export default Story;
