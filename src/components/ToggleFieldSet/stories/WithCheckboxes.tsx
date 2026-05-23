import type { StoryObj } from '@storybook/react';
import Component from '../ToggleFieldSet';
import ToggleField from '@src/components/ToggleField/ToggleField';
import Checkbox from '@src/components/Control/ToggleControl/Checkbox/Checkbox';

export const props: React.ComponentProps<typeof Component> = {
  children: (
    <>
      <ToggleField label="Social media">
        <Checkbox 
          valueElAttrs={{
            name: 'source',
            value: 'social_media',
          }} 
        />
      </ToggleField>,
      <ToggleField label="A search engine (e.g. Google)">
        <Checkbox 
          valueElAttrs={{
            name: 'source',
            value: 'search_engine',
          }} 
        />
      </ToggleField>,
      <ToggleField label="Word of mouth">
        <Checkbox 
            valueElAttrs={{
            name: 'source',
            value: 'word_of_mouth',
          }} 
        />
      </ToggleField>
    </>
  ),
  layout: 'stacked',
};

const Story: StoryObj<typeof Component> = {
  args: props,
};

export default Story;
