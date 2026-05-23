import type { StoryObj } from '@storybook/react';
import Component from '../IconCtaButton';

export const props: React.ComponentProps<typeof Component> = {
  icon: 'plus',
  variant: 'primary-outlined',
  hiddenLabel: 'Expand',
  iconRelativeSize: 'xl',
};

const Story: StoryObj<typeof Component> = {
  args: props,
};

export default Story;
