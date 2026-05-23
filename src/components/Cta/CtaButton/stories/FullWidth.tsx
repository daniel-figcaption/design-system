import type { StoryObj } from '@storybook/react';
import Component from '../CtaButton';

export const props: React.ComponentProps<typeof Component> = {
  label: 'Save & publish',
  variant: 'secondary',
  icon: 'publish',
  iconPosition: 'after',
  isFullWidth: true,
};

const Story: StoryObj<typeof Component> = {
  args: props,
};

export default Story;
