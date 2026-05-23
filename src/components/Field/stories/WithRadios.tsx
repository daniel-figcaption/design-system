import type { StoryObj } from '@storybook/react';
import Component from '../Field';
import ToggleFieldSet from '@src/components/ToggleFieldSet/ToggleFieldSet';
import { props as rowLayoutProps } from '@src/components/ToggleFieldSet/stories/RowLayout';

export const props: React.ComponentProps<typeof Component> = {
  label: 'Genre',
  children: (
    <ToggleFieldSet 
      {...rowLayoutProps}
    />
  ),
  helpTextPosition: 'before',
};

const Story: StoryObj<typeof Component> = {
  args: props,
};

export default Story;
