import type { StoryObj } from '@storybook/react';
import Component, { TProps } from '../Textarea';

export const props: TProps = {
  value: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pharetra nec dui luctus cursus.',
  hasError: true,
  textareaAttributes: {
    name: 'comments',
  },
};

const Story: StoryObj<typeof Component> = {
  args: props,
};

export default Story;
