import type { StoryObj } from '@storybook/react';
import Component, { TProps } from '../Select';

export const props: TProps = {
  options: {
    '': '-- Select a province --',
    'ab': 'Alberta',
    'bc': 'British Columbia',
    'mb': 'Manitoba',
    'nb': 'New Brunswick',
    'nl': 'Newfoundland and Labrador',
    'ns': 'Nova Scotia',
    'on': 'Ontario',
    'pe': 'Prince Edward Island',
    'qc': 'Quebec',
    'sk': 'Saskatchewan',
  },
  selectAttributes: {
    name: 'province',
    value: 'qc',
  },
};

const Story: StoryObj<typeof Component> = {
  args: props,
};

export default Story;
