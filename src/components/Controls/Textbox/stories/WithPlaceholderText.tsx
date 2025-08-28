import type { StoryObj } from '@storybook/react';
import Component, { TProps } from '../Textbox';

export const props: TProps = {
  inputAttributes: {
    name: 'street_address',
    value: '',
    placeholder: 'e.g. 123 Example Street',
  },
};

const Story: StoryObj<typeof Component> = {
  args: props,
};

export default Story;
