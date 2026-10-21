import { TPropFieldsMap } from "@src/components/lib/storybook/types";
import { TBaseCta } from "./types";
import * as enums from './enums';
import { iconNames, iconRelativeSizes } from "@src/components/Icon/lib/enums";

export const CTA_CATEGORY = 'Cta Properties';
export const ICON_SUBCATEGORY = 'Cta Properties > Icon Properties';

const ctaPropFields: TPropFieldsMap<TBaseCta> = {
  /* Cta Properties */
  label: {
    p0_tableCategory: CTA_CATEGORY,
    p1_typeSafeDefaultValue: '',
    p2_valueTypeLabel: 'string',
    p3_description: 'The text to display for the button.',
    p4_storybookControlType: 'text',
  },
  variant: {
    p0_tableCategory: CTA_CATEGORY,
    p1_typeSafeDefaultValue: 'primary',
    p2_valueTypeLabel: 'string',
    p3_description: 'The CTA variant to display.',
    p4_storybookControlType: 'select',
    p5_controlOptions: enums.ctaVariants,
  },
  icon: {
    p0_tableCategory: CTA_CATEGORY,
    p1_typeSafeDefaultValue: undefined,
    p2_valueTypeLabel: 'string',
    p3_description: 'The name of the icon to display alongside the label.',
    p4_storybookControlType: 'select',
    p5_controlOptions: ['', ...iconNames],
  },
  size: {
    p0_tableCategory: CTA_CATEGORY,
    p1_typeSafeDefaultValue: 'base',
    p2_valueTypeLabel: 'string',
    p3_description: 'The size of the CTA.',
    p4_storybookControlType: 'select',
    p5_controlOptions: enums.ctaSizes,
  },
  isFullWidth: {
    p0_tableCategory: CTA_CATEGORY,
    p1_typeSafeDefaultValue: false,
    p2_valueTypeLabel: 'boolean',
    p3_description: 'Whether or not the CTA should fill to expand its entire container width.',
    p4_storybookControlType: 'boolean',
  },

  /* Cta > Icon Properties */
  iconPosition: {
    p0_tableCategory: ICON_SUBCATEGORY,
    p1_typeSafeDefaultValue: 'before',
    p2_valueTypeLabel: 'string',
    p3_description: '',
    p4_storybookControlType: 'inline-radio',
    p5_controlOptions: enums.ctaIconPositions,
  },
  iconRelativeSize: {
    p0_tableCategory: ICON_SUBCATEGORY,
    p1_typeSafeDefaultValue: 'base',
    p2_valueTypeLabel: 'string',
    p3_description: 'The relative size of the icon with respect to the label.',
    p4_storybookControlType: 'select',
    p5_controlOptions: iconRelativeSizes,
  },
  iconNudgeX: {
    p0_tableCategory: ICON_SUBCATEGORY,
    p1_typeSafeDefaultValue: 'default',
    p2_valueTypeLabel: 'string',
    p3_description: 'If the icon doesn\'t appear horizontally snug with the text we can nudge it left or right.',
    p4_storybookControlType: 'inline-radio',
    p5_controlOptions: enums.ctaIconNudgeXValues,
  },
  iconNudgeY: {
    p0_tableCategory: ICON_SUBCATEGORY,
    p1_typeSafeDefaultValue: 'default',
    p2_valueTypeLabel: 'string',
    p3_description: 'If the icon doesn\'t appear vertically aligned with the text we can nudge it up or down.',
    p4_storybookControlType: 'inline-radio',
    p5_controlOptions: enums.ctaIconNudgeYValues,
  },
};

export default ctaPropFields;
