import type { StoryObj } from '@storybook/react';
import Component from '../Textarea';

export const props: React.ComponentProps<typeof Component> = {
  valueElAttrs: {
    name: 'comments',
    placeholder: 'Text surrounded in *asterisks* will display as bold.',
  },
};

const Story: StoryObj<typeof Component> = {
  args: props,
};

export default Story;
