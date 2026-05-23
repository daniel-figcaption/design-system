import type { StoryObj } from '@storybook/react';
import Component from '../Notice';

export const props: React.ComponentProps<typeof Component> = {
  children: (
    <>
      <p>Lorem ipsum dolor sit amet, <a href="#x">consectetur adipiscing elit.</a> Proin a tristique lorem. Curabitur blandit erat ultrices, rutrum urna gravida, ornare nisi.</p>
    </>
  ),
};

const Story: StoryObj<typeof Component> = {
  args: props,
};

export default Story;
