import type { StoryObj } from '@storybook/react';
import Component, { TProps } from '../CtaButton';

export const props: TProps = {
  label: 'Show more',
  variant: 'primary-outlined',
  size: 'xs',
};

const Story: StoryObj<typeof Component> = {
  args: props,
};

export default Story;
