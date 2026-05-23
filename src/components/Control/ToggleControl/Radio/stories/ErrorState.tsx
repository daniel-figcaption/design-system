import type { StoryObj } from '@storybook/react';
import Component from '../Radio';

export const props: React.ComponentProps<typeof Component> = {
  hasError: true,
  valueElAttrs: {
    name: 'gender',
    value: 'f',
  },
};

const Story: StoryObj<typeof Component> = {
  args: props,
};

export default Story;
