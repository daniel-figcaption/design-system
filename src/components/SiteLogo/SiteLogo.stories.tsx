import type { Meta } from '@storybook/react';
import SiteLogo from './SiteLogo';
import createPartialMeta from '../lib/storybook/createPartialMeta';
import renderWithResolvedLogoUrl from './lib/renderWithResolvedLogoUrl';
import LogoDecorator from '@sb/decorators/LogoDecorator/LogoDecorator';

const meta: Meta<typeof SiteLogo> = {
  title: 'Components/SiteLogo',
  render: renderWithResolvedLogoUrl,
  ...createPartialMeta({
    component: SiteLogo,
    layout: LogoDecorator,
    fields: {
      imageUrl: {
        p1_typeSafeDefaultValue: '',
        p2_valueTypeLabel: 'string',
        p3_description: 'The URL of the logo image, preferably an SVG file.',
        p4_storybookControlType: 'text',
      },
      imageAltText: {
        p1_typeSafeDefaultValue: '',
        p2_valueTypeLabel: 'string',
        p3_description: 'The alt text for the image, usually the logo text, i.e. the name of the organization.',
        p4_storybookControlType: 'text',
      },
      intrinsicWidth: {
        p1_typeSafeDefaultValue: 1,
        p2_valueTypeLabel: 'number',
        p3_description: 'The intrinsic width of the logo image. Don\'t use this to change the rendered size. That should be achieved through styling.',
        p4_storybookControlType: 'number',
        p5_controlNumberSettings: {
          min: 0,
          step: 1,
        },
      },
      intrinsicHeight: {
        p1_typeSafeDefaultValue: 1,
        p2_valueTypeLabel: 'number',
        p3_description: 'The intrinsic height of the logo image. Don\'t use this to change the rendered size. That should be achieved through styling.',
        p4_storybookControlType: 'number',
        p5_controlNumberSettings: {
          min: 0,
          step: 1,
        },
      },
      linkUrl: {
        p1_typeSafeDefaultValue: undefined,
        p2_valueTypeLabel: 'string',
        p3_description: 'The URL of the page to link to from this logo.',
        p4_storybookControlType: 'text',
      },
    },
  }),
};

export default meta;

export { default as Typical } from './stories/Typical';
export { default as NotLinked } from './stories/NotLinked';
