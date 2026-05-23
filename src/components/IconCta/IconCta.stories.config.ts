import type { ArgTypes } from '@storybook/react';
import IconCta from './IconCta';
import iconNames from '../Icon/lib/iconNames';

type TProps = React.ComponentProps<typeof IconCta>

export const defaultProps: Partial<TProps> = {
  icon: undefined,
  variant: 'bare',
  hiddenLabel: undefined,
  size: 'base',
  iconRelativeSize: 'base',
  iconNudgeX: 'default',
  iconNudgeY: 'default',
};

export const CTA_CATEGORY = 'Cta Properties';
export const ICON_SUBCATEGORY = 'Icon Properties';

export const argTypes: ArgTypes<TProps> = {
  icon: {
    control: 'select',
    description: 'The name of the icon to display alongside the label.',
    options: ['', ...iconNames],
    table: {
      category: CTA_CATEGORY,
    },
  },
  variant: {
    control: 'select',
    description: 'The Icon CTA variant to display.',
    options: ['primary', 'bare', 'secondary', 'primary-outlined', 'secondary-outlined'],
    table: {
      defaultValue: {
        summary: 'primary',
      },
      category: CTA_CATEGORY,
    },
  },
  hiddenLabel: {
    control: 'text',
    description: 'Text representing this Icon CTA to display to screen readers.',
    table: {
      category: CTA_CATEGORY,
    },
  },
  size: {
    control: 'select',
    description: 'The size of the CTA, including the clickable area.',
    options: ['sm', 'base', 'lg', 'xl'],
    table: {
      defaultValue: {
        summary: 'base',
      },
      category: CTA_CATEGORY,
    },
  },
  iconRelativeSize: {
    control: 'select',
    description: 'The relative size of the icon with respect to the CTA size.',
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
    description: 'If the icon doesn\'t appear horizontally centered we can nudge it left or right.',
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
    description: 'If the icon doesn\'t appear vertically centered we can nudge it up or down.',
    options: ['default', 'up', 'down'],
    table: {
      defaultValue: {
        summary: 'default',
      },
      category: CTA_CATEGORY,
      subcategory: ICON_SUBCATEGORY,
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
