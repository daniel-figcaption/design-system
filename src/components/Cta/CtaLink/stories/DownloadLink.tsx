import type { StoryObj } from '@storybook/react';
import Component, { TProps } from '../CtaLink';

export const props: TProps = {
  label: 'Download as PDF',
  variant: 'primary-outlined',
  icon: 'pdf',
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
