import type { StoryObj } from '@storybook/react';
import Component from '../Textbox';

export const props: React.ComponentProps<typeof Component> = {
  hasError: true,
  valueElAttrs: {
    name: 'street_address',
    value: '4388 rue Saint-Denis',
  },
};

const Story: StoryObj<typeof Component> = {
  args: props,
};

export default Story;
