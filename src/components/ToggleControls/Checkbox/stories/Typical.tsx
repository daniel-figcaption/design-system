import type { StoryObj } from '@storybook/react';
import Component, { TProps } from '../Checkbox';

export const props: TProps = {
  inputAttributes: {
    name: 'accept_terms',
  },
};

const Story: StoryObj<typeof Component> = {
  args: props,
};

export default Story;
