import type { StoryObj } from '@storybook/react';
import Component, { TProps } from '../Field';
import Textbox from '@src/components/Controls/Textbox/Textbox';

export const props: TProps = {
  label: 'First name',
  control: (
    <Textbox
      inputAttributes={{
        name: 'first_name',
        value: 'Bob',
      }}
      className="c-field__control" 
    />
  ),
};

const Story: StoryObj<typeof Component> = {
  args: props,
};

export default Story;
