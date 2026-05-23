import type { StoryObj } from '@storybook/react';
import Component from '../IconCtaLink';

export const props: React.ComponentProps<typeof Component> = {
  icon: 'instagram',
  variant: 'secondary',
  hiddenLabel: 'Our Facebook page',
  iconRelativeSize: 'sm',
  url: 'https://www.example.com/',
  openInNewTab: true,
};

const Story: StoryObj<typeof Component> = {
  args: props,
};

export default Story;
