import { TRawOptions, TRawOptionsType } from "./types";

const getRawOptionsType = (rawOptions: TRawOptions): TRawOptionsType => {
  if (Array.isArray(rawOptions)) {
    const [ firstRawOption ] = rawOptions;
    return typeof firstRawOption === 'object' ? 'OPTION_DICTIONARY' : 'STRING_ARRAY';
  }
  return 'OPTION_DICTIONARY';
};

export default getRawOptionsType;
