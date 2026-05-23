import type { StoryObj } from '@storybook/react';
import Component from '../ToggleField';
import Checkbox from '@src/components/Control/ToggleControl/Checkbox/Checkbox';

export const props: React.ComponentProps<typeof Component> = {
  label: (
    <>I have read and agreed to the <a href="#terms">terms & conditions</a>.</>
  ),
  children: (
    <Checkbox
      valueElAttrs={{
        name: 'terms_and_conditions',
      }}
    />
  ),
  helpText: (
    <>Our T&Cs policy can be accessed via our <a href="#help">help section</a>.</>
  ),
  isRequired: true,
};

const Story: StoryObj<typeof Component> = {
  args: props,
  argTypes: {
    label: {
      control: false,
    },
    helpText: {
      control: false,
    }
  },
};

export default Story;
