import type { StoryObj } from '@storybook/react';
import Component from '../Notice';

export const props: React.ComponentProps<typeof Component> = {
  priority: 'normal',
  isContainerized: true,
  children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a tristique lorem. Curabitur blandit erat ultrices, rutrum urna gravida, ornare nisi.",
};

const Story: StoryObj<typeof Component> = {
  args: props,
};

export default Story;
