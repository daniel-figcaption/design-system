import type { StoryObj } from '@storybook/react';
import Component from '../ToggleField';
import Radio from '@src/components/Control/ToggleControl/Radio/Radio';

export const props: React.ComponentProps<typeof Component> = {
  label: 'Male',
  children: (
    <Radio
      valueElAttrs={{
        name: 'gender',
      }} 
    />
  ),
};

const Story: StoryObj<typeof Component> = {
  args: props,
};

export default Story;
