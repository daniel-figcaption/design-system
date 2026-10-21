import type { Meta } from '@storybook/react';
import IconCtaLink from './IconCtaLink';
import CtaDecorator from '@sb/decorators/CtaDecorator/CtaDecorator';
import createPartialMeta from '@src/components/lib/storybook/createPartialMeta';
import iconCtaPropFields from '../shared/iconCtaPropFields';

const LINK_CATEGORY = 'Link Properties';

const meta: Meta<typeof IconCtaLink> = {
  title: 'Components/IconCta/IconCtaLink',
  ...createPartialMeta({
    component: IconCtaLink,
    layout: CtaDecorator,
    fields: {
      ...iconCtaPropFields,
      url: {
        p0_tableCategory: LINK_CATEGORY,
        p1_typeSafeDefaultValue: undefined,
        p2_valueTypeLabel: 'string',
        p3_description: 'The URL of the page to link to from this CTA.',
        p4_storybookControlType: 'text',
      },
      openInNewTab: {
        p0_tableCategory: LINK_CATEGORY,
        p1_typeSafeDefaultValue: false,
        p2_valueTypeLabel: 'boolean',
        p3_description: 'Whether or not the link will open in a new tab.',
        p4_storybookControlType: 'boolean',
      },
      aAttributes: {
        p0_tableCategory: LINK_CATEGORY,
        p1_typeSafeDefaultValue: undefined,
        p2_valueTypeLabel: 'object',
        p3_description: 'Extra HTML attributes to apply to the `a` element. Use the `className` prop to apply extra classes.',
        p4_storybookControlType: 'object',
      },
    },
  }),
};

export default meta;

export { default as Primary } from './stories/Primary';
export { default as Secondary } from './stories/Secondary';
export { default as Bare } from './stories/Bare';
export { default as PrimaryOutlined } from './stories/PrimaryOutlined';
export { default as Small } from './stories/Small';
export { default as Large } from './stories/Large';
