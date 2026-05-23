import type { StoryObj } from '@storybook/react';
import Component from '../Field';
import Textbox from '@src/components/Control/FullControl/Textbox/Textbox';

export const props: React.ComponentProps<typeof Component> = {
  label: 'First name',
  children: (
    <Textbox
      valueElAttrs={{
        name: 'first_name',
        value: 'Bob',
      }}
    />
  ),
};

const Story: StoryObj<typeof Component> = {
  args: props,
};

export default Story;
