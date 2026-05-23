import type { StoryObj } from '@storybook/react';
import Component from '../IconCtaButton';

export const props: React.ComponentProps<typeof Component> = {
  icon: 'pencil',
  variant: 'secondary',
  hiddenLabel: 'Edit',
};

const Story: StoryObj<typeof Component> = {
  args: props,
};

export default Story;
