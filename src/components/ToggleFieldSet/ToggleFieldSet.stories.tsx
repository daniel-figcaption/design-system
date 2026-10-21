import type { Meta } from '@storybook/react';
import ToggleFieldSet from './ToggleFieldSet';
import FieldDecorator from '@sb/decorators/FieldDecorator/FieldDecorator';
import createPartialMeta from '../lib/storybook/createPartialMeta';
import toggleFieldMeta from '../ToggleField/ToggleField.stories';
import { toggleFieldSetLayouts } from './lib/enums';

const meta: Meta<typeof ToggleFieldSet> = {
  title: 'Components/ToggleFieldSet',
  ...createPartialMeta({
    component: ToggleFieldSet,
    layout: FieldDecorator,
    fields: {
      children: {
        p1_typeSafeDefaultValue: null,
        p2_valueTypeLabel: 'ReactNode',
        p3_description: `An array of [${toggleFieldMeta.title}] components.`,
        p4_storybookControlType: 'NOT_SHOWN',
      },
      layout: {
        p1_typeSafeDefaultValue: 'stacked',
        p2_valueTypeLabel: 'string',
        p3_description: 'Whether the items should appear stacked, or displayed in a horizontal row (useful for shorter lists).',
        p4_storybookControlType: 'inline-radio',
        p5_controlOptions: toggleFieldSetLayouts,
      },
    },
  }),
};

export default meta;

export { default as RowLayout } from './stories/RowLayout';
export { default as LongAnswers } from './stories/LongAnswers';
export { default as WithCheckboxes } from './stories/WithCheckboxes';
