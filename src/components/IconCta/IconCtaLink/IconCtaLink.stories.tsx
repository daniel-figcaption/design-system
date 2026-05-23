import type { Meta } from '@storybook/react';
import IconCtaLink from './IconCtaLink';
import { argTypes as iconCtaArgTypes, defaultProps as defaultIconCtaProps } from '../IconCta.stories.config';
import CtaDecorator from '@sb/decorators/CtaDecorator/CtaDecorator';

const LINK_CATEGORY = 'Link Properties';

const meta: Meta<typeof IconCtaLink> = {
  title: 'Components/IconCta/IconCtaLink',
  component: IconCtaLink,
  decorators: [CtaDecorator],
  tags: ['autodocs'],
  args: {
    ...defaultIconCtaProps,
    url: undefined,
    openInNewTab: false,
    aAttributes: {},
  },
  argTypes: {
    ...iconCtaArgTypes,
    url: {
      control: 'text',
      description: 'The URL of the page to link to from this CTA.',
      table: {
        category: LINK_CATEGORY,
      },
    },
    openInNewTab: {
      control: 'boolean',
      description: 'Whether or not the link will open in a new tab.',
      table: {
        defaultValue: {
          summary: 'false',
        },
        category: LINK_CATEGORY,
      },
    },
    aAttributes: {
      control: 'object',
      description: 'Extra HTML attributes to apply to the `a` element.',
      table: {
        category: LINK_CATEGORY,
      },
    },
  }
};

export default meta;

export { default as Primary } from './stories/Primary';
export { default as Secondary } from './stories/Secondary';
export { default as Bare } from './stories/Bare';
export { default as PrimaryOutlined } from './stories/PrimaryOutlined';
export { default as Small } from './stories/Small';
export { default as Large } from './stories/Large';
