import type { StoryObj } from '@storybook/react';
import Component from '../Checkbox';

export const props: React.ComponentProps<typeof Component> = {
  valueElAttrs: {
    name: 'accept_terms',
    disabled: true,
  },
};

const Story: StoryObj<typeof Component> = {
  args: props,
};

export default Story;
