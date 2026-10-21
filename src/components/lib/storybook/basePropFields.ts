import { TPropFieldsMap } from "@src/components/lib/storybook/types";
import { TBaseComponent } from "../types";

export const COMMON_CATEGORY = 'Common';

const ctaPropFields: TPropFieldsMap<TBaseComponent> = {
  className: {
    p0_tableCategory: 'Common',
    p1_typeSafeDefaultValue: undefined,
    p2_valueTypeLabel: 'string',
    p3_description: 'Extra CSS classes to apply to the outer element.',
    p4_storybookControlType: 'NOT_SHOWN',
  },
};

export default ctaPropFields;
