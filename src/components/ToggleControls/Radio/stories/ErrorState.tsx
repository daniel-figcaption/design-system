import type { StoryObj } from '@storybook/react';
import Component, { TProps } from '../Radio';

export const props: TProps = {
  hasError: true,
  inputAttributes: {
    name: 'gender',
    value: 'f',
  },
};

const Story: StoryObj<typeof Component> = {
  args: props,
};

export default Story;
