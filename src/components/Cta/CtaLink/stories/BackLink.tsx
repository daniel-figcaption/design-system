import type { StoryObj } from '@storybook/react';
import Component, { TProps } from '../CtaLink';

export const props: TProps = {
  label: 'Back to all blog posts',
  variant: 'link',
  icon: 'arrow-left',
  iconPosition: 'before',
  size: 'xs',
  url: '#back',
};

const Story: StoryObj<typeof Component> = {
  args: props,
};

export default Story;
