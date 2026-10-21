import type { Meta } from '@storybook/react';
import IconCtaButton from './IconCtaButton';
import CtaDecorator from '@sb/decorators/CtaDecorator/CtaDecorator';
import createPartialMeta from '@src/components/lib/storybook/createPartialMeta';
import iconCtaPropFields from '../shared/iconCtaPropFields';
import { iconCtaButtonButtonTypes } from './lib/enums';

const CTABUTTON_CATEGORY = 'Button Properties';

const meta: Meta<typeof IconCtaButton> = {
  title: 'Components/IconCta/IconCtaButton',
  ...createPartialMeta({
    component: IconCtaButton,
    layout: CtaDecorator,
    fields: {
      ...iconCtaPropFields,
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
        p3_description: 'The value of the `type` attribute on the `button` element.',
        p4_storybookControlType: 'select',
        p5_controlOptions: iconCtaButtonButtonTypes,
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

export { default as Primary } from './stories/Primary';
export { default as Secondary } from './stories/Secondary';
export { default as Expand } from './stories/Expand';
export { default as CloseButton } from './stories/CloseButton';
export { default as BurgerMenu } from './stories/BurgerMenu';
