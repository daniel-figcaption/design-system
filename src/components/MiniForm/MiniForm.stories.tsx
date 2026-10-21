import type { Meta } from '@storybook/react';
import MiniForm from './MiniForm';
import FieldDecorator from '@sb/decorators/FieldDecorator/FieldDecorator';
import createPartialMeta from '../lib/storybook/createPartialMeta';
import textboxMeta from '../Control/FullControl/Textbox/Textbox.stories';
import ctaButtonMeta from '../Cta/CtaButton/CtaButton.stories';
import iconCtaMeta from '../IconCta/IconCtaButton/IconCtaButton.stories';

const meta: Meta<typeof MiniForm> = {
  title: 'Components/MiniForm',
  ...createPartialMeta({
    component: MiniForm,
    layout: FieldDecorator,
    fields: {
      control: {
        p1_typeSafeDefaultValue: null,
        p2_valueTypeLabel: 'ReactNode',
        p3_description: `The control to enter information, usually a [${textboxMeta.title}] element.`,
        p4_storybookControlType: 'NOT_SHOWN',
      },
      hiddenControlLabel: {
        p1_typeSafeDefaultValue: undefined,
        p2_valueTypeLabel: 'string',
        p3_description: 'The text label for the control to display to screen readers.',
        p4_storybookControlType: 'text',
      },
      cta: {
        p1_typeSafeDefaultValue: null,
        p2_valueTypeLabel: 'ReactNode',
        p3_description: `The submit button, usually a [${ctaButtonMeta.title}] or [${iconCtaMeta.title}] component.`,
        p4_storybookControlType: 'NOT_SHOWN',
      },
    },
  }),
};

export default meta;

export { default as Typical } from './stories/Typical';
export { default as IconCta } from './stories/IconCta';
export { default as SubscribeForm } from './stories/SubscribeForm';
