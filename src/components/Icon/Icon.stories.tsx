import type { Meta } from '@storybook/react';
import Icon from './Icon';
import iconNames from './lib/iconNames';

const meta: Meta<typeof Icon> = {
  title: 'Components/Icon',
  component: Icon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    iconName: undefined,
    relativeSize: 'base',
    className: undefined,
  },
  argTypes: {
    iconName: {
      control: 'select',
      description: 'The name of the icon to display.',
      options: iconNames,
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    relativeSize: {
      control: 'select',
      description: 'The relative size of the icon with respect to the surrounding text.',
      options: ['xs', 'sm', 'base', 'lg', 'xl'],
      table: {
        defaultValue: {
          summary: 'base',
        },
        type: {
          summary: 'string',
        },
      },
    },
    className: {
      control: 'text',
      description: 'Extra CSS classes to apply to the outer element.',
    },
  },
};

export default meta;

export { default as Typical } from './stories/Typical';
