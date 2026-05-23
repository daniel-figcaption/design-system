import type { StoryObj } from '@storybook/react';
import Component from '../CtaLink';

export const props: React.ComponentProps<typeof Component> = {
  label: 'Download as PDF',
  variant: 'primary-outlined',
  icon: 'download-file',
  iconPosition: 'after',
  size: 'sm',
  url: '#download',
  aAttributes: {
    'download': 'document.pdf',
  },
};

const Story: StoryObj<typeof Component> = {
  args: props,
};

export default Story;
