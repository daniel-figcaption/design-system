import type { StoryObj } from '@storybook/react';
import Component, { TProps } from '../ToggleField';
import Checkbox from '@src/components/ToggleControls/Checkbox/Checkbox';

export const props: TProps = {
  label: 'I have read and agreed to the terms & conditions.',
  control: (
    <Checkbox
      inputAttributes={{
        name: 'terms_and_conditions',
      }}
    />
  ),
  helpText: 'Our T&Cs policy can be accessed via our help section.',
  isRequired: true,
};

const Story: StoryObj<typeof Component> = {
  args: props,
};

export default Story;
