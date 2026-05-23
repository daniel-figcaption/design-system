import type { StoryObj } from '@storybook/react';
import Component from '../CtaButton';

export const props: React.ComponentProps<typeof Component> = {
  label: 'Show more',
  variant: 'primary-outlined',
  size: 'xs',
};

const Story: StoryObj<typeof Component> = {
  args: props,
};

export default Story;
