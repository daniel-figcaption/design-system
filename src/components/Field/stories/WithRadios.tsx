import type { StoryObj } from '@storybook/react';
import Component, { TProps } from '../Field';
import ToggleFieldSet from '@src/components/ToggleFieldSet/ToggleFieldSet';
import { props as rowLayoutProps } from '@src/components/ToggleFieldSet/stories/RowLayout';

export const props: TProps = {
  label: 'Gender',
  control: (
    <ToggleFieldSet 
      {...rowLayoutProps}
      className="c-field__toggle-field-set" 
    />
  ),
  helpTextPosition: 'before',
};

const Story: StoryObj<typeof Component> = {
  args: props,
};

export default Story;
