import type { Meta } from '@storybook/react';
import CtaLink from './CtaLink';
import CtaDecorator from '@sb/decorators/CtaDecorator/CtaDecorator';
import createPartialMeta from '@src/components/lib/storybook/createPartialMeta';
import ctaPropFields from '../shared/ctaPropFields';

const LINK_CATEGORY = 'Link Properties';

const meta: Meta<typeof CtaLink> = {
  title: 'Components/Cta/CtaLink',
  ...createPartialMeta({
    component: CtaLink,
    layout: CtaDecorator,
    fields: {
      ...ctaPropFields,
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

export { default as Typical } from './stories/Typical';
export { default as Simple } from './stories/Simple';
export { default as DownloadLink } from './stories/DownloadLink';
export { default as EmailLink } from './stories/EmailLink';
export { default as BackLink } from './stories/BackLink';
export { default as ExternalLink } from './stories/ExternalLink';
export { default as Tag } from './stories/Tag';
