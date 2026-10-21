import type { StoryObj } from '@storybook/react';
import Component from '../SiteLogo';

export const props: React.ComponentProps<typeof Component> = {
  imageUrl: 'mcgill-logo.svg',
  imageAltText: 'McGill',
  intrinsicWidth: 166,
  intrinsicHeight: 44,
};

const Story: StoryObj<typeof Component> = {
  args: props,
};

export default Story;
