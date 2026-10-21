import type { Meta } from '@storybook/react';
import CtaSet from './CtaSet';
import createPartialMeta from '../lib/storybook/createPartialMeta';
import ctaLinkMeta from '../Cta/CtaLink/CtaLink.stories';
import ctaButtonMeta from '../Cta/CtaButton/CtaButton.stories';

const meta: Meta<typeof CtaSet> = {
  title: 'Components/CtaSet',
  ...createPartialMeta({
    component: CtaSet,
    layout: 'centered',
    fields: {
      children: {
        p1_typeSafeDefaultValue: null,
        p2_valueTypeLabel: 'ReactNode',
        p3_description: `A set of [${ctaLinkMeta.title}] or [${ctaButtonMeta.title}] components.`,
        p4_storybookControlType: 'NOT_SHOWN',
      },
    },
  }),
};

export default meta;

export { default as Typical } from './stories/Typical';
export { default as SocialMediaLinks } from './stories/SocialMediaLinks';
