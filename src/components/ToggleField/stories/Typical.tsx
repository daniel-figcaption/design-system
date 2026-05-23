import type { StoryObj } from '@storybook/react';
import Component from '../ToggleField';
import Checkbox from '@src/components/Control/ToggleControl/Checkbox/Checkbox';

export const props: React.ComponentProps<typeof Component> = {
  label: 'I have read and agreed to the terms & conditions.',
  children: (
    <Checkbox
      valueElAttrs={{
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
