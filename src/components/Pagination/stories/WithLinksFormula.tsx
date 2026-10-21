import type { StoryObj } from '@storybook/react';
import Component from '../Pagination';

export const props: React.ComponentProps<typeof Component> = {
  pageLinks: {
    totalPageCount: 100,
    formula: (pageNumber) => `#p=${pageNumber}`,
  },
  currentPageNo: 25,
};

const Story: StoryObj<typeof Component> = {
  args: props,
  argTypes: {
    pageLinks: {
      control: false,
    },
  },
};

export default Story;
