import type { StoryObj } from '@storybook/react';
import Component from '../CtaLink';

export const props: React.ComponentProps<typeof Component> = {
  label: 'non-fiction',
  variant: 'link',
  icon: 'tag',
  iconPosition: 'before',
  iconRelativeSize: 'sm',
  iconNudgeY: 'down',
  size: 'sm',
  url: '#tag',
};

const Story: StoryObj<typeof Component> = {
  args: props,
};

export default Story;
