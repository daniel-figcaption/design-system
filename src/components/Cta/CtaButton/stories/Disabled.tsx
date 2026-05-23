import type { StoryObj } from '@storybook/react';
import Component from '../CtaButton';

export const props: React.ComponentProps<typeof Component> = {
  label: 'Submit',
  buttonAttributes: {
    disabled: true,
  },
};

const Story: StoryObj<typeof Component> = {
  args: props,
};

export default Story;
