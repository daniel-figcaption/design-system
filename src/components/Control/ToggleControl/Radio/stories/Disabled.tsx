import type { StoryObj } from '@storybook/react';
import Component from '../Radio';

export const props: React.ComponentProps<typeof Component> = {
  valueElAttrs: {
    name: 'gender',
    value: 'f',
    disabled: true,
  },
};

const Story: StoryObj<typeof Component> = {
  args: props,
};

export default Story;
