import type { StoryObj } from '@storybook/react';
import Component, { TProps } from '../Field';
import Select from '@src/components/Controls/Select/Select';
import { props as typicalSelectProps } from '@src/components/Controls/Select/stories/Typical';

export const props: TProps = {
  label: 'Province',
  control: (
    <Select {...typicalSelectProps} />
  ),
  controlId: 'field_province',
};

const Story: StoryObj<typeof Component> = {
  args: props,
};

export default Story;
