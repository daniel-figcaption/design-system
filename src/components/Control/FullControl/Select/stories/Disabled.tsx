import type { StoryObj } from '@storybook/react';
import Component from '../Select';
import React from 'react';

export const props: React.ComponentProps<typeof Component> = {
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
  valueElAttrs: {
    name: 'province',
    value: 'qc',
    disabled: true,
  },
};

const Story: StoryObj<typeof Component> = {
  args: props,
};

export default Story;
