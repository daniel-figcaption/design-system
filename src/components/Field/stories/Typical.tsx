import type { StoryObj } from '@storybook/react';
import Component from '../Field';
import Textbox from '@src/components/Control/FullControl/Textbox/Textbox';

export const props: React.ComponentProps<typeof Component> = {
  label: 'Email address',
  children: (
    <Textbox 
      valueElAttrs={{
        type: 'email',
        name: 'email_address',
        value: 'test@example.com',
      }}
    />
  ),
  helpText: 'Used to verify your account.',
  isRequired: true,
};

const Story: StoryObj<typeof Component> = {
  args: props,
};

export default Story;
