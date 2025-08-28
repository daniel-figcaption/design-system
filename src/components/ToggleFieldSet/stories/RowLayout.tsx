import type { StoryObj } from '@storybook/react';
import Component, { TProps } from '../ToggleFieldSet';
import ToggleField from '@src/components/ToggleField/ToggleField';
import Radio from '@src/components/ToggleControls/Radio/Radio';

export const props: TProps = {
  fields: [
    <ToggleField
      label="Horror"
      control={(
        <Radio
          inputAttributes={{
            name: 'genre',
            value: 'horror',
            id: 'field_genres_horror',
          }}
        />
      )}
      controlId="field_genres_horror"
    />,
    <ToggleField
      label="Fantasy"
      control={(
        <Radio
          inputAttributes={{
            name: 'genre',
            value: 'fantasy',
            id: 'field_genres_fantasy',
          }}
        />
      )}
      controlId="field_genres_fantasy"
    />,
    <ToggleField
      label="Sci-fi"
      control={(
        <Radio
          inputAttributes={{
            name: 'genre',
            value: 'scifi',
            id: 'field_genres_scifi',
          }}
        />
      )}
      controlId="field_genres_scifi"
    />,
  ],
  layout: 'row',
};

const Story: StoryObj<typeof Component> = {
  args: props,
};

export default Story;
