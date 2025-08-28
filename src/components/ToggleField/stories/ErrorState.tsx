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
  activeErrorMessage: 'You must read and agree to our terms & conditions.',
  isRequired: true,
};

const Story: StoryObj<typeof Component> = {
  args: props,
};

export default Story;
