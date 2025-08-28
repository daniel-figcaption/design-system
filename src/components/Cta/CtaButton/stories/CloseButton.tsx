import type { StoryObj } from '@storybook/react';
import Component, { TProps } from '../CtaButton';

export const props: TProps = {
  label: 'Close',
  variant: 'link',
  icon: 'x',
  iconPosition: 'after',
  iconRelativeSize: 'lg',
};

const Story: StoryObj<typeof Component> = {
  args: props,
};

export default Story;
