import type { StoryObj } from '@storybook/react';
import Component from '../CtaLink';

export const props: React.ComponentProps<typeof Component> = {
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
