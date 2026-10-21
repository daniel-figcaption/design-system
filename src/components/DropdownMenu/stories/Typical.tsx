import type { StoryObj } from '@storybook/react';
import Component from '../DropdownMenu';

export const props: React.ComponentProps<typeof Component> = {
  links: [
    {
      label: 'About us',
      url: '#x',
    },
    {
      label: 'Meet the team',
      url: '#x',
    },
    {
      label: 'Careers',
      url: '#x',
      isCurrent: true,
    },
    {
      label: 'Contact us',
      url: '#x',
    },
  ],
};

const Story: StoryObj<typeof Component> = {
  args: props,
};

export default Story;
