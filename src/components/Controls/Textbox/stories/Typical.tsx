import type { StoryObj } from '@storybook/react';
import Component, { TProps } from '../Textbox';

export const props: TProps = {
  inputAttributes: {
    name: 'street_address',
    value: '4388 rue Saint-Denis',
  },
};

const Story: StoryObj<typeof Component> = {
  args: props,
};

export default Story;
