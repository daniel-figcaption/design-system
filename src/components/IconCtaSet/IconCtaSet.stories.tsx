import type { Meta } from '@storybook/react';
import IconCtaSet from './IconCtaSet';
import createPartialMeta from '../lib/storybook/createPartialMeta';
import iconCtaLinkMeta from '../IconCta/IconCtaLink/IconCtaLink.stories';
import iconCtaButtonMeta from '../IconCta/IconCtaButton/IconCtaButton.stories';

const meta: Meta<typeof IconCtaSet> = {
  title: 'Components/IconCtaSet',
  ...createPartialMeta({
    component: IconCtaSet,
    layout: 'centered',
    fields: {
      children: {
        p1_typeSafeDefaultValue: null,
        p2_valueTypeLabel: 'ReactNode',
        p3_description: `An array of [${iconCtaLinkMeta.title}] or [${iconCtaButtonMeta.title}] components.`,
        p4_storybookControlType: 'NOT_SHOWN',
      },
    },
  }),
};

export default meta;

export { default as Typical } from './stories/Typical';
export { default as SocialMediaLinks } from './stories/SocialMediaLinks';
export { default as NavIcons } from './stories/NavIcons';
