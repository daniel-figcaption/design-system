import type { StoryObj } from '@storybook/react';
import Component from '../CtaButton';

export const props: React.ComponentProps<typeof Component> = {
  label: 'Close',
  variant: 'link',
  icon: 'x',
  iconPosition: 'after',
  iconRelativeSize: 'lg',
};

const Story: StoryObj<typeof Component> = {
  args: props,
};

export default Story;
