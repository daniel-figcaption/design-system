import type { StoryObj } from '@storybook/react';
import Component from '../Pagination';

export const props: React.ComponentProps<typeof Component> = {
  pageLinks: [
    '#p=1',
    '#p=2',
    '#p=3',
    '#p=4',
    '#p=5',
    '#p=6',
    '#p=7',
    '#p=8',
    '#p=9',
    '#p=10',
    '#p=11',
    '#p=12',
    '#p=13',
    '#p=14',
    '#p=15',
  ],
  currentPageNo: 8,
  showEndNavLinks: false,
};

const Story: StoryObj<typeof Component> = {
  args: props,
};

export default Story;
