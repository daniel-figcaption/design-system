import type { StoryObj } from '@storybook/react';
import Component from '../SiteHeader';

export const props: React.ComponentProps<typeof Component> = {};

const Story: StoryObj<typeof Component> = {
  args: props,
  parameters: {
    pseudo: {
      hover: true,
    },
  },
};

export default Story;
