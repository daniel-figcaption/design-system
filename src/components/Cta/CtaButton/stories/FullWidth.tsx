import type { StoryObj } from '@storybook/react';
import Component, { TProps } from '../CtaButton';

export const props: TProps = {
  label: 'Save & publish',
  variant: 'secondary',
  icon: 'publish',
  iconPosition: 'after',
  iconRelativeSize: 'lg',
  isFullWidth: true,
};

const Story: StoryObj<typeof Component> = {
  args: props,
};

export default Story;
