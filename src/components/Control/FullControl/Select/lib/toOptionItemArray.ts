import createOptionItem from "./createOptionItem";
import getRawOptionsType from "./getRawOptionsType";
import { TOptionDictionary, TOptionItem, TRawOptions } from "./types";

const toOptionItemArray = (rawOptions: TRawOptions): TOptionItem[] => {
  const rawOptionsType = getRawOptionsType(rawOptions);
  switch (rawOptionsType) {
    case 'STRING_ARRAY': {
      const stringArray = rawOptions as string[];
      return stringArray.map((stringValue) => createOptionItem(stringValue, stringValue));
    }
    case 'OPTION_DICTIONARY': {
      const optionDictionary = rawOptions as TOptionDictionary;
      return Object.keys(optionDictionary).map((key) => {
        return createOptionItem(key, optionDictionary[key]);
      });
    }
    case 'OPTION_ITEM_ARRAY': {
      return rawOptions as TOptionItem[];
    }
  }
};

export default toOptionItemArray;
