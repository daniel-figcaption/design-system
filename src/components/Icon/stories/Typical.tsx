import type { StoryObj } from '@storybook/react';
import Component, { TProps } from '../Icon';

export const props: TProps = {
  iconName: 'facebook',
};

const Story: StoryObj<typeof Component> = {
  args: props,
};

export default Story;
