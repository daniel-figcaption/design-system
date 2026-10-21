import type { Meta } from '@storybook/react';
import CtaButton from './CtaButton';
import CtaDecorator from '@sb/decorators/CtaDecorator/CtaDecorator';
import createPartialMeta from '@src/components/lib/storybook/createPartialMeta';
import ctaPropFields from '../shared/ctaPropFields';
import { ctaButtonButtonTypes } from './lib/enums';

const CTABUTTON_CATEGORY = 'CtaButton Properties';

const meta: Meta<typeof CtaButton> = {
  title: 'Components/Cta/CtaButton',
  ...createPartialMeta({
    component: CtaButton,
    layout: CtaDecorator,
    fields: {
      ...ctaPropFields,
      onClick: {
        p0_tableCategory: CTABUTTON_CATEGORY,
        p1_typeSafeDefaultValue: undefined,
        p2_valueTypeLabel: 'function',
        p3_description: 'The function to call when the button is clicked.',
        p4_storybookControlType: 'NOT_SHOWN',
      },
      buttonType: {
        p0_tableCategory: CTABUTTON_CATEGORY,
        p1_typeSafeDefaultValue: 'button',
        p2_valueTypeLabel: 'string',
        p3_description: '',
        p4_storybookControlType: 'select',
        p5_controlOptions: ctaButtonButtonTypes,
      },
      buttonAttributes: {
        p0_tableCategory: CTABUTTON_CATEGORY,
        p1_typeSafeDefaultValue: undefined,
        p2_valueTypeLabel: 'object',
        p3_description: 'Extra HTML attributes to apply to the `button` element. Use the `className` prop to apply extra classes.',
        p4_storybookControlType: 'object',
      },
    },
  }),
};

export default meta;

export { default as Typical } from './stories/Typical';
export { default as FullWidth } from './stories/FullWidth';
export { default as MinorAction } from './stories/MinorAction';
export { default as CloseButton } from './stories/CloseButton';
export { default as Disabled } from './stories/Disabled';
