import type { ArgTypes } from '@storybook/react';
import iconNames from '../Icon/lib/iconNames';
import Cta from './Cta';

type TProps = React.ComponentProps<typeof Cta>;

export const defaultProps: Partial<TProps> = {
  label: undefined,
  variant: 'primary',
  icon: undefined,
  iconPosition: 'before',
  iconRelativeSize: 'base',
  iconNudgeX: 'default',
  iconNudgeY: 'default',
  size: 'base',
  isFullWidth: false,
};

export const CTA_CATEGORY = 'Cta Properties';
export const ICON_SUBCATEGORY = 'Icon Properties';

export const argTypes: ArgTypes<TProps> = {
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
  iconNudgeX: {
    control: 'inline-radio',
    description: 'If the icon doesn\'t appear horizontally snug with the text we can nudge it left or right.',
    options: ['default', 'left', 'right'],
    table: {
      defaultValue: {
        summary: 'default',
      },
      category: CTA_CATEGORY,
      subcategory: ICON_SUBCATEGORY,
    },
  },
  iconNudgeY: {
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
};
