/*
 * There are 3 types of defining options for a select:
 * 
 * 1. OptionDictionary
 *    Simple object where each key is the option `value`, and the corresponding value is the text label.
 * 
 * 2. String array
 *    Simple string array where each value is both the label and HTML value.
 * 
 * 3. OptionItem array
 *    The most complete, flexible way. An array of OptionItem objects.
 * 
 * These 3 ways of defining options are known as RawOptions.
 * 
 */

export type TOptionDictionary = { 
  [Key: string] : string; 
};

export type TOptionItem = {
  optionValue: string;
  optionLabel: string;
};

export type TRawOptions = (
  TOptionDictionary |
  string[] |
  TOptionItem[]
);

export type TRawOptionsType = 'OPTION_DICTIONARY' | 'STRING_ARRAY' | 'OPTION_ITEM_ARRAY';
