import type { StoryObj } from '@storybook/react';
import Component from '../Breadcrumbs';

export const props: React.ComponentProps<typeof Component> = {
  items: [
    {
      label: 'Home',
      url: '#x',
    },
    {
      label: 'Latest updates',
      url: '#x',
    },
    {
      label: 'Archive',
      url: '#x',
    },
    {
      label: 'Science & technology',
      url: '#x',
    },
    {
      label: 'New research advances renewable energy systems',
      isCurrentPage: true,
    },
  ]
};

const Story: StoryObj<typeof Component> = {
  args: props,
};

export default Story;
