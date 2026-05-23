import type { StoryObj } from '@storybook/react';
import Component from '../Icon';

export const props: React.ComponentProps<typeof Component> = {
  iconName: 'facebook',
};

const Story: StoryObj<typeof Component> = {
  args: props,
};

export default Story;
