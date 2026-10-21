import type { Meta } from '@storybook/react';
import Icon from './Icon';
import { iconNames, iconRelativeSizes } from './lib/enums';
import createPartialMeta from '../lib/storybook/createPartialMeta';

const meta: Meta<typeof Icon> = {
  title: 'Components/Icon',
  ...createPartialMeta({
    component: Icon,
    layout: 'centered',
    fields: {
      iconName: {
        p1_typeSafeDefaultValue: '',
        p2_valueTypeLabel: 'string',
        p3_description: 'The name of the icon to display.',
        p4_storybookControlType: 'select',
        p5_controlOptions: iconNames,
      },
      relativeSize: {
        p1_typeSafeDefaultValue: 'base',
        p2_valueTypeLabel: 'string',
        p3_description: 'The relative size of the icon with respect to the surrounding text.',
        p4_storybookControlType: 'select',
        p5_controlOptions: iconRelativeSizes,
      },
    },
  }),
};

export default meta;

export { default as Typical } from './stories/Typical';
