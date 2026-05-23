import type { StoryObj } from '@storybook/react';
import Component from '../ToggleFieldSet';
import ToggleField from '@src/components/ToggleField/ToggleField';
import Radio from '@src/components/Control/ToggleControl/Radio/Radio';

export const props: React.ComponentProps<typeof Component> = {
  children: [
    <ToggleField label="Horror">
      <Radio
        valueElAttrs={{
          name: 'genre',
          value: 'horror',
        }}
      />
    </ToggleField>,
    <ToggleField label="Fantasy">
      <Radio
        valueElAttrs={{
          name: 'genre',
          value: 'fantasy',
        }}
      />
    </ToggleField>,
    <ToggleField label="Sci-fi">
      <Radio
        valueElAttrs={{
          name: 'genre',
          value: 'scifi',
        }}
      />
    </ToggleField>,
  ],
  layout: 'row',
};

const Story: StoryObj<typeof Component> = {
  args: props,
};

export default Story;
