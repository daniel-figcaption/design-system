import type { StoryObj } from '@storybook/react';
import Component, { TProps } from '../CtaLink';

export const props: TProps = {
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
