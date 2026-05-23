import type { StoryObj } from '@storybook/react';
import Component from '../IconCtaButton';

export const props: React.ComponentProps<typeof Component> = {
  icon: 'play',
  variant: 'primary',
  hiddenLabel: 'Play',
  iconNudgeX: 'right',
};

const Story: StoryObj<typeof Component> = {
  args: props,
};

export default Story;
