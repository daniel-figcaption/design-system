import type { StoryObj } from '@storybook/react';
import Component, { TProps } from '../ToggleField';
import Checkbox from '@src/components/ToggleControls/Checkbox/Checkbox';

export const props: TProps = {
  label: 'I would like to sign up to the weekly newsletter.',
  control: (
    <Checkbox
      inputAttributes={{
        name: 'newsletter_sign_up',
      }}
    />
  ),
};

const Story: StoryObj<typeof Component> = {
  args: props,
};

export default Story;
