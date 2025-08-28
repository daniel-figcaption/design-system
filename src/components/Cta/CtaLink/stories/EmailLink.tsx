import type { StoryObj } from '@storybook/react';
import Component, { TProps } from '../CtaLink';

export const props: TProps = {
  label: 'test@example.com',
  variant: 'link',
  icon: 'envelope',
  iconRelativeSize: 'lg',
  iconVerticalNudge: 'down',
  url: 'mailto:test@example.com',
};

const Story: StoryObj<typeof Component> = {
  args: props,
};

export default Story;
