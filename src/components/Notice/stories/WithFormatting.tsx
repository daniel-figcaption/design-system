import type { StoryObj } from '@storybook/react';
import Component from '../Notice';

export const props: React.ComponentProps<typeof Component> = {
  priority: 'normal',
  children: (
    <>
      <p>Lorem ipsum dolor sit amet, <a href="#x">consectetur adipiscing elit.</a> Proin a tristique lorem. Curabitur <strong>blandit erat ultrices</strong>, rutrum urna gravida, ornare nisi.</p>
    </>
  ),
};

const Story: StoryObj<typeof Component> = {
  args: props,
  argTypes: {
    children: {
      control: false,
    },
  },
};

export default Story;
