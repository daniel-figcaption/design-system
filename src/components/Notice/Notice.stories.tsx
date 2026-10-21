import type { Meta } from '@storybook/react';
import Notice from './Notice';
import createPartialMeta from '../lib/storybook/createPartialMeta';
import { noticePriorityValues } from './lib/enums';

const meta: Meta<typeof Notice> = {
  title: 'Components/Notice',
  ...createPartialMeta({
    component: Notice,
    layout: 'default',
    fields: {
      priority: {
        p1_typeSafeDefaultValue: 'normal',
        p2_valueTypeLabel: 'string',
        p3_description: 'The priority level of the notice for screen readers.',
        p4_storybookControlType: 'select',
        p5_controlOptions: noticePriorityValues,
      },
      children: {
        p1_typeSafeDefaultValue: '',
        p2_valueTypeLabel: ['string', 'ReactNode'],
        p3_description: 'The message to display. This can either be a simple string, or rich text HTML for formatting (e.g. `<strong>`).',
        p4_storybookControlType: 'text',
      },
      title: {
        p1_typeSafeDefaultValue: undefined,
        p2_valueTypeLabel: 'string',
        p3_description: 'An optional short heading to display above the main message.',
        p4_storybookControlType: 'text',
      },
      isDismissable: {
        p1_typeSafeDefaultValue: true,
        p2_valueTypeLabel: 'boolean',
        p3_description: 'Whether or not the notice can been dismissed via a close button.',
        p4_storybookControlType: 'boolean',
      },
      isContainerized: {
        p1_typeSafeDefaultValue: false,
        p2_valueTypeLabel: 'boolean',
        p3_description: 'Whether or not to display the contents at the standard container width.',
        p4_storybookControlType: 'boolean',
      },
    },
  }),
};

export default meta;

export { default as Typical } from './stories/Typical';
export { default as WithFormatting } from './stories/WithFormatting';
export { default as WithTitle } from './stories/WithTitle';
export { default as Permanent } from './stories/Permanent';
export { default as IsContainerized } from './stories/IsContainerized';
export { default as LongMessage } from './stories/LongMessage';
