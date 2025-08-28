import type { StoryObj } from '@storybook/react';
import Component, { TProps } from '../CtaButton';

export const props: TProps = {
  label: 'Search',
  icon: 'search',
  iconPosition: 'after',
  iconRelativeSize: 'sm',
  buttonAttributes: {
    'aria-label': 'Find out more about this website',
  },
};

const Story: StoryObj<typeof Component> = {
  args: props,
};

export default Story;
