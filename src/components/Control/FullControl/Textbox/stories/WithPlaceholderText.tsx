import type { StoryObj } from '@storybook/react';
import Component from '../Textbox';

export const props: React.ComponentProps<typeof Component> = {
  valueElAttrs: {
    name: 'street_address',
    value: '',
    placeholder: 'e.g. 123 Example Street',
  },
};

const Story: StoryObj<typeof Component> = {
  args: props,
};

export default Story;
