import { TPropFieldsMap } from "@src/components/lib/storybook/types";
import { TBaseIconCta } from "./types";
import * as enums from './enums';
import { iconNames, iconRelativeSizes } from "@src/components/Icon/lib/enums";

export const CTA_CATEGORY = 'Cta Properties';
export const ICON_SUBCATEGORY = 'Cta Properties > Icon Properties';

const iconCtaPropFields: TPropFieldsMap<TBaseIconCta> = {
  /* Cta Properties */
  icon: {
    p0_tableCategory: CTA_CATEGORY,
    p1_typeSafeDefaultValue: undefined,
    p2_valueTypeLabel: 'string',
    p3_description: 'The name of the icon to display alongside the label.',
    p4_storybookControlType: 'select',
    p5_controlOptions: ['', ...iconNames],
  },
  variant: {
    p0_tableCategory: CTA_CATEGORY,
    p1_typeSafeDefaultValue: 'bare',
    p2_valueTypeLabel: 'string',
    p3_description: 'The CTA variant to display.',
    p4_storybookControlType: 'select',
    p5_controlOptions: enums.iconCtaVariants,
  },
  hiddenLabel: {
    p0_tableCategory: CTA_CATEGORY,
    p1_typeSafeDefaultValue: '',
    p2_valueTypeLabel: 'string',
    p3_description: 'The text to display for the button.',
    p4_storybookControlType: 'text',
  },
  
  size: {
    p0_tableCategory: CTA_CATEGORY,
    p1_typeSafeDefaultValue: 'base',
    p2_valueTypeLabel: 'string',
    p3_description: 'The size of the CTA.',
    p4_storybookControlType: 'select',
    p5_controlOptions: enums.iconCtaSizes,
  },

  /* Cta > Icon Properties */
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
    p5_controlOptions: enums.iconCtaIconNudgeXValues,
  },
  iconNudgeY: {
    p0_tableCategory: ICON_SUBCATEGORY,
    p1_typeSafeDefaultValue: 'default',
    p2_valueTypeLabel: 'string',
    p3_description: 'If the icon doesn\'t appear vertically aligned with the text we can nudge it up or down.',
    p4_storybookControlType: 'inline-radio',
    p5_controlOptions: enums.iconCtaIconNudgeYValues,
  },
};

export default iconCtaPropFields;
