import type { StoryObj } from '@storybook/react';
import Component from '../IconCtaButton';

export const props: React.ComponentProps<typeof Component> = {
  icon: 'x',
  variant: 'bare',
  hiddenLabel: 'Close',
  size: 'lg',
  iconRelativeSize: 'lg',
};

const Story: StoryObj<typeof Component> = {
  args: props,
};

export default Story;
