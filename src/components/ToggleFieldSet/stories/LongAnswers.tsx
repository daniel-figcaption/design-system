import type { StoryObj } from '@storybook/react';
import Component, { TProps } from '../ToggleFieldSet';
import ToggleField from '@src/components/ToggleField/ToggleField';
import Radio from '@src/components/ToggleControls/Radio/Radio';

export const props: TProps = {
  fields: [
    <ToggleField
      label="I have never held a passport issued by this country and am applying for my first one."
      control={(
        <Radio
          inputAttributes={{
            name: 'passport_status',
            value: '1',
            id: 'field_passport_status_1',
          }}
        />
      )}
      controlId="field_passport_status_1"
    />,
    <ToggleField
      label="I currently hold a valid passport issued by this country and am applying for a renewal of that passport."
      control={(
        <Radio
          inputAttributes={{
            name: 'passport_status',
            value: '2',
            id: 'field_passport_status_2',
          }}
        />
      )}
      controlId="field_passport_status_2"
    />,
    <ToggleField
      label="I previously held a passport issued by this country, but it has been lost, stolen, or has expired, and I am applying for a replacement."
      control={(
        <Radio
          inputAttributes={{
            name: 'passport_status',
            value: '3',
            id: 'field_passport_status_3',
          }}
        />
      )}
      controlId="field_passport_status_3"
    />,
  ],
  layout: 'stacked',
};

const Story: StoryObj<typeof Component> = {
  args: props,
};

export default Story;
