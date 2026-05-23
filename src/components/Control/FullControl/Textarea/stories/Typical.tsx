import type { StoryObj } from '@storybook/react';
import Component from '../Textarea';

export const props: React.ComponentProps<typeof Component> = {
  valueElAttrs: {
    name: 'comments',
    value: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pharetra nec dui luctus cursus.',
  },
};

const Story: StoryObj<typeof Component> = {
  args: props,
};

export default Story;
