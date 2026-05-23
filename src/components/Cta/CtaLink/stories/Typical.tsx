import type { StoryObj } from '@storybook/react';
import Component from '../CtaLink';

export const props: React.ComponentProps<typeof Component> = {
  label: 'Read more',
  icon: 'arrow-right',
  iconPosition: 'after',
  url: 'https://www.example.com/',
  aAttributes: {
    'aria-label': 'Find out more about this website',
  },
};

const Story: StoryObj<typeof Component> = {
  args: props,
};

export default Story;
