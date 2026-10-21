import type { Meta } from '@storybook/react';
import SiteHeader from './SiteHeader';
import createPartialMeta from '../lib/storybook/createPartialMeta';
import MeasuredDecorator from '@sb/decorators/MeasuredDecorator/MeasuredDecorator';

const meta: Meta<typeof SiteHeader> = {
  title: 'Components/SiteHeader',
  parameters: {
    pseudo: {
      hover: true,
    },
  },
  ...createPartialMeta({
    component: SiteHeader,
    layout: MeasuredDecorator,
    fields: {},
  }),
};

export default meta;

export { default as Typical } from './stories/Typical';
