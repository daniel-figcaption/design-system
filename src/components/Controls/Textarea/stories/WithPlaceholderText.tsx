import type { StoryObj } from '@storybook/react';
import Component, { TProps } from '../Textarea';

export const props: TProps = {
  textareaAttributes: {
    name: 'comments',
    placeholder: 'Text surrounded in *asterisks* will display as bold.',
  },
};

const Story: StoryObj<typeof Component> = {
  args: props,
};

export default Story;
