import type { StoryObj } from '@storybook/react';
import Component, { TProps } from '../ToggleField';
import Checkbox from '@src/components/ToggleControls/Checkbox/Checkbox';

export const props: TProps = {
  label: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris turpis est, tempor finibus volutpat non, tempus eu erat. Vivamus ut erat varius, consequat tellus ac, scelerisque mi. Mauris molestie odio sit amet porta aliquam. Phasellus aliquet facilisis pretium. Integer ut quam elementum lectus viverra pharetra.',
  control: (
    <Checkbox
      inputAttributes={{
        name: 'terms_and_conditions',
      }} 
    />
  ),
};

const Story: StoryObj<typeof Component> = {
  args: props,
};

export default Story;
