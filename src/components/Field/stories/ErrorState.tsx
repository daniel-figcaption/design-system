import type { StoryObj } from '@storybook/react';
import Component, { TProps } from '../Field';
import Textbox from '@src/components/Controls/Textbox/Textbox';

export const props: TProps = {
  label: 'Email address',
  control: (
    <Textbox 
      hasError
      inputAttributes={{
        type: 'email',
        name: 'email_address',
        value: 'test@example.com',
      }}
      className="c-field__control" 
    />
  ),
  helpText: 'Used to verify your account.',
  helpTextPosition: 'after',
  activeErrorMessage: 'Email address is required.',
  errorMessagePosition: 'before',
};

const Story: StoryObj<typeof Component> = {
  args: props,
};

export default Story;
