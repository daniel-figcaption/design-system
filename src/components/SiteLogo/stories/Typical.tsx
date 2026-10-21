import type { StoryObj } from '@storybook/react';
import Component from '../SiteLogo';

export const props: React.ComponentProps<typeof Component> = {
  imageUrl: 'udm-logo.svg',
  imageAltText: 'Université de Montréal',
  intrinsicWidth: 351,
  intrinsicHeight: 134,
  linkUrl: 'https://www.umontreal.ca/',
};

const Story: StoryObj<typeof Component> = {
  args: props,
};

export default Story;
