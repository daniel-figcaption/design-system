import type { StoryObj } from '@storybook/react';
import Component from '../ToggleField';
import Checkbox from '@src/components/Control/ToggleControl/Checkbox/Checkbox';

export const props: React.ComponentProps<typeof Component> = {
  label: 'I would like to sign up to the weekly newsletter.',
  children: (
    <Checkbox
      valueElAttrs={{
        name: 'newsletter_sign_up',
      }}
    />
  ),
};

const Story: StoryObj<typeof Component> = {
  args: props,
};

export default Story;
