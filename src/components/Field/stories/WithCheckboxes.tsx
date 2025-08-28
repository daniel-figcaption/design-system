import type { StoryObj } from '@storybook/react';
import Component, { TProps } from '../Field';
import ToggleFieldSet from '@src/components/ToggleFieldSet/ToggleFieldSet';
import { props as withCheckboxesProps } from '@src/components/ToggleFieldSet/stories/WithCheckboxes';

export const props: TProps = {
  label: 'How did you hear about us?',
  control: (
    <ToggleFieldSet
      {...withCheckboxesProps}
      className="c-field__toggle-field-set" 
    />
  ),
  helpText: 'Select all that apply.',
  helpTextPosition: 'before',
};

const Story: StoryObj<typeof Component> = {
  args: props,
};

export default Story;
