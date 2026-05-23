import type { StoryObj } from '@storybook/react';
import Component from '../Field';
import ToggleFieldSet from '@src/components/ToggleFieldSet/ToggleFieldSet';
import { props as withCheckboxesProps } from '@src/components/ToggleFieldSet/stories/WithCheckboxes';

export const props: React.ComponentProps<typeof Component> = {
  label: 'How did you hear about us?',
  children: (
    <ToggleFieldSet
      {...withCheckboxesProps}
    />
  ),
  helpText: 'Select all that apply.',
  helpTextPosition: 'before',
};

const Story: StoryObj<typeof Component> = {
  args: props,
};

export default Story;
