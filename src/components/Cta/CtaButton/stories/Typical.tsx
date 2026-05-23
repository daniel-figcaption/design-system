import type { StoryObj } from '@storybook/react';
import Component from '../CtaButton';

export const props: React.ComponentProps<typeof Component> = {
  label: 'Search',
  icon: 'search',
  iconPosition: 'after',
  buttonAttributes: {
    'aria-label': 'Find out more about this website',
  },
};

const Story: StoryObj<typeof Component> = {
  args: props,
};

export default Story;
