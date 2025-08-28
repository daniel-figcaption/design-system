import type { StoryObj } from '@storybook/react';
import Component, { TProps } from '../Radio';

export const props: TProps = {
  inputAttributes: {
    name: 'gender',
    value: 'f',
    disabled: true,
  },
};

const Story: StoryObj<typeof Component> = {
  args: props,
};

export default Story;
