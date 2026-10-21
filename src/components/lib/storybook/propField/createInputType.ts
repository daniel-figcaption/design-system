import { InputType } from "storybook/internal/csf";
import resolveDescriptionLinks from "./resolveDescriptionLinks";
import defaultValueToString from "./defaultValueToString";
import { TPropField } from "./types";

const createInputType = ({
  p0_tableCategory: tableCategory,
  p1_typeSafeDefaultValue: typeSafeDefaultValue,
  p2_valueTypeLabel: valueTypeLabel,
  p3_description: description,
  p4_storybookControlType: storybookControlType,
  p5_controlOptions: controlOptions,
  p5_controlNumberSettings: controlNumberSettings,
}: TPropField): InputType => {

  /*
   * Let's split our single chevron-delimited tableCategory string into 
   * the category and subcategory property values.
   * Combining these into our one tableCategory property is safer for 
   * implementors.
   */
  const [
    category,
    subcategory
  ] = (tableCategory || '').split(' > ');

  return {
    control: storybookControlType === 'NOT_SHOWN' ? false : { 
      type: storybookControlType,
      ...controlNumberSettings
    },

    /*
     * The description takes markdown-style link formatting.
     * Let's expand the Component paths that areencoded in the
     * description into markdown links.
     */
    description: resolveDescriptionLinks(description),

    options: controlOptions,

    table: {
      defaultValue: {
        /*
         * This is the text representation of the prop's default value.
         * e.g. '', 3, true, [], {}, 'primary'.
         * Storybook will automatically infer a default if we pass
         * undefined to defaultValue. So we pass null instead and cast it.
         */
        summary: defaultValueToString(typeSafeDefaultValue) as any,
      },
      type: {
        /*
         * The type value summary takes a pipe (|) delimited string, so
         * let's join it from our type array.
         */
        summary: Array.isArray(valueTypeLabel) ? 
          valueTypeLabel.join(' | ') : valueTypeLabel,
      },
      category,
      subcategory,
    },
  };
};

export default createInputType;
