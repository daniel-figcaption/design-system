import type { StoryObj } from '@storybook/react';
import Component, { TProps } from '../ToggleFieldSet';
import ToggleField from '@src/components/ToggleField/ToggleField';
import Checkbox from '@src/components/ToggleControls/Checkbox/Checkbox';

export const props: TProps = {
  fields: [
    <ToggleField 
      label="Social media" 
      control={(
        <Checkbox 
          inputAttributes={{
            name: 'source',
            value: 'social_media',
            id: 'field_source_social_media',
          }} 
        />
      )} 
      controlId="field_source_social_media"
    />,
    <ToggleField 
      label="A search engine (e.g. Google)" 
      control={(
        <Checkbox 
          inputAttributes={{
            name: 'source',
            value: 'search_engine',
            id: 'field_source_search_engine',
          }} 
        />
      )} 
      controlId="field_source_search_engine"
    />,
    <ToggleField 
      label="Word of mouth" 
        control={(
          <Checkbox 
            inputAttributes={{
            name: 'source',
            value: 'word_of_mouth',
            id: 'field_source_word_of_mouth',
          }} 
        />
      )} 
      controlId="field_source_word_of_mouth"
    />,
  ],
  layout: 'stacked',
};

const Story: StoryObj<typeof Component> = {
  args: props,
};

export default Story;
