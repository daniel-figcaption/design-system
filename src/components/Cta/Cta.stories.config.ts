import type { ArgTypes } from '@storybook/react';
import type { TProps as TCtaProps } from './Cta';
import { iconNames } from '../Icon/Icon';

export const defaultProps: Partial<TCtaProps> = {
  label: undefined,
  variant: 'primary',
  icon: undefined,
  iconPosition: 'before',
  iconRelativeSize: 'base',
  iconVerticalNudge: 'default',
  size: 'base',
  isFullWidth: false,
};

export const CTA_CATEGORY = 'Cta Properties';
export const ICON_SUBCATEGORY = 'Icon Properties';

export const argTypes: ArgTypes<TCtaProps> = {
  label: {
    control: 'text',
    description: 'The text to display for the button.',
    table: {
      category: CTA_CATEGORY,
    },
  },
  variant: {
    control: 'select',
    description: 'The CTA variant to display.',
    options: ['primary', 'secondary', 'primary-outlined', 'secondary-outlined', 'link'],
    table: {
      defaultValue: {
        summary: 'primary',
      },
      category: CTA_CATEGORY,
    },
  },
  icon: {
    control: 'select',
    description: 'The name of the icon to display alongside the label.',
    options: ['', ...iconNames],
    table: {
      category: CTA_CATEGORY,
    },
  },
  iconPosition: {
    control: 'inline-radio',
    description: 'Whether the icon should display before or after the label.',
    options: ['before', 'after'],
    table: {
      defaultValue: {
        summary: 'before',
      },
      category: CTA_CATEGORY,
      subcategory: ICON_SUBCATEGORY,
    },
  },
  iconRelativeSize: {
    control: 'select',
    description: 'The relative size of the icon with respect to the label.',
    options: ['xs', 'sm', 'base', 'lg', 'xl'],
    table: {
      defaultValue: {
        summary: 'base',
      },
      category: CTA_CATEGORY,
      subcategory: ICON_SUBCATEGORY,
    },
  },
  iconVerticalNudge: {
    control: 'inline-radio',
    description: 'If the icon doesn\'t appear vertically aligned with the text we can nudge it up or down.',
    options: ['default', 'up', 'down'],
    table: {
      defaultValue: {
        summary: 'default',
      },
      category: CTA_CATEGORY,
      subcategory: ICON_SUBCATEGORY,
    },
  },
  size: {
    control: 'select',
    description: 'The size of the CTA.',
    options: ['xs', 'sm', 'base', 'lg'],
    table: {
      defaultValue: {
        summary: 'base',
      },
      category: CTA_CATEGORY,
    },
  },
  isFullWidth: {
    control: 'boolean',
    description: 'Whether or not the CTA should fill to expand its entire container width.',
    table: {
      defaultValue: {
        summary: 'false',
      },
      category: CTA_CATEGORY,
    },
  },
  className: {
    control: 'text',
    description: 'Extra CSS classes to apply to the outer element.',
    table: {
      category: CTA_CATEGORY,
    },
  },
};
