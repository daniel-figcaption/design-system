import type { StoryObj } from '@storybook/react';
import Component, { TProps } from '../Textarea';

export const props: TProps = {
  value: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pharetra nec dui luctus cursus.',
  textareaAttributes: {
    name: 'comments',
    disabled: true,
  },
};

const Story: StoryObj<typeof Component> = {
  args: props,
};

export default Story;
