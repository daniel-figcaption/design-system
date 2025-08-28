import type { StoryObj } from '@storybook/react';
import Component, { TProps } from '../CtaLink';

export const props: TProps = {
  label: 'Find out more',
  variant: 'secondary',
  url: 'https://www.example.com/',
};

const Story: StoryObj<typeof Component> = {
  args: props,
};

export default Story;
