import type { StoryObj } from '@storybook/react';
import Component from '../Breadcrumbs';

export const props: React.ComponentProps<typeof Component> = {
  items: [
    {
      label: 'Home',
      url: '#x',
    },
    {
      label: 'About us',
      url: '#x',
    },
    {
      label: 'Our team',
      url: '#x',
    },
    {
      label: 'Executive team',
      isCurrentPage: true,
    },
  ]
};

const Story: StoryObj<typeof Component> = {
  args: props,
};

export default Story;
