import type { StoryObj } from '@storybook/react';
import Component, { TProps } from '../ToggleField';
import Radio from '@src/components/ToggleControls/Radio/Radio';

export const props: TProps = {
  label: 'Male',
  control: (
    <Radio
      inputAttributes={{
        name: 'gender',
      }} 
    />
  ),
  controlId: 'field_male',
};

const Story: StoryObj<typeof Component> = {
  args: props,
};

export default Story;
