import type { Meta } from '@storybook/react';
import Pagination from './Pagination';
import createPartialMeta from '../lib/storybook/createPartialMeta';

const meta: Meta<typeof Pagination> = {
  title: 'Components/Pagination',
  ...createPartialMeta({
    component: Pagination,
    layout: 'centered',
    fields: {
      pageLinks: {
        p1_typeSafeDefaultValue: [],
        p2_valueTypeLabel: ['array', 'object'],
        p3_description: 'The list of pages. This can either be an array of page URLs, or an object used to generate them.',
        p4_storybookControlType: 'object',
      },
      currentPageNo: {
        p1_typeSafeDefaultValue: 1,
        p2_valueTypeLabel: 'number',
        p3_description: 'The currently active page number, where 1 is the start.',
        p4_storybookControlType: 'number',
        p5_controlNumberSettings: {
          min: 1,
          step: 1,
        },
      },
      maxCenterItemsCount: {
        p1_typeSafeDefaultValue: 1,
        p2_valueTypeLabel: 'number',
        p3_description: 'The maximum number of visible page items to display which are centered around the current page number.',
        p4_storybookControlType: 'number',
        p5_controlNumberSettings: {
          min: 0,
          step: 1,
        },
      },
      maxEndItemsCount: {
        p1_typeSafeDefaultValue: 2,
        p2_valueTypeLabel: 'number',
        p3_description: 'The maximum number of visible page items to display at the start & end of the list.',
        p4_storybookControlType: 'number',
        p5_controlNumberSettings: {
          min: 0,
          step: 1,
        },
      },
      showEndNavLinks: {
        p1_typeSafeDefaultValue: true,
        p2_valueTypeLabel: 'boolean',
        p3_description: 'Whether or not the end nav nav links (first, last) should be displayed.',
        p4_storybookControlType: 'boolean',
      },
      showTrackNavLinks: {
        p1_typeSafeDefaultValue: true,
        p2_valueTypeLabel: 'boolean',
        p3_description: 'Whether or not the track nav nav links (prev, next) should be displayed.',
        p4_storybookControlType: 'boolean',
      },
      showInactiveNavItems: {
        p1_typeSafeDefaultValue: true,
        p2_valueTypeLabel: 'boolean',
        p3_description: 'Whether or not inactive nav items should be displayed (grayed out). Inactive nav items occur when the current page is the very first or very last page.',
        p4_storybookControlType: 'boolean',
      },
      ariaLabel: {
        p1_typeSafeDefaultValue: 'Pagination',
        p2_valueTypeLabel: 'string',
        p3_description: 'The screen reader label for this component.',
        p4_storybookControlType: 'text',
      },
    },
  }),
};

export default meta;

export { default as Typical } from './stories/Typical';
export { default as MorePageLinks } from './stories/MorePageLinks';
export { default as ListEndPosition } from './stories/ListEndPosition';
export { default as HideInactiveNavLinks } from './stories/HideInactiveNavLinks';
export { default as NoEndNavLinks } from './stories/NoEndNavLinks';
export { default as WithLinksFormula } from './stories/WithLinksFormula';
