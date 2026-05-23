import type { StoryObj } from '@storybook/react';
import Component from '../Field';
import Select from '@src/components/Control/FullControl/Select/Select';
import { props as typicalSelectProps } from '@src/components/Control/FullControl/Select/stories/Typical';

export const props: React.ComponentProps<typeof Component> = {
  label: 'Province',
  children: (
    <Select 
      {...typicalSelectProps} 
      valueElAttrs={{
        ...(typicalSelectProps.valueElAttrs || {}),
        id: 'field_province',
      }}
    />
  ),
};

const Story: StoryObj<typeof Component> = {
  args: props,
};

export default Story;
