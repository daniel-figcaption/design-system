import type { StoryObj } from '@storybook/react';
import Component from '../ToggleFieldSet';
import ToggleField from '@src/components/ToggleField/ToggleField';
import Radio from '@src/components/Control/ToggleControl/Radio/Radio';

export const props: React.ComponentProps<typeof Component> = {
  children: [
    <ToggleField label="I have never held a passport issued by this country and am applying for my first one.">
      <Radio
        valueElAttrs={{
          name: 'passport_status',
          value: '1',
        }}
      />
    </ToggleField>,
    <ToggleField label="I currently hold a valid passport issued by this country and am applying for a renewal of that passport.">
      <Radio
        valueElAttrs={{
          name: 'passport_status',
          value: '2',
        }}
      />
    </ToggleField>,
    <ToggleField label="I previously held a passport issued by this country, but it has been lost, stolen, or has expired, and I am applying for a replacement.">
      <Radio
        valueElAttrs={{
          name: 'passport_status',
          value: '3',
        }}
      />
    </ToggleField>,
  ],
  layout: 'stacked',
};

const Story: StoryObj<typeof Component> = {
  args: props,
};

export default Story;
