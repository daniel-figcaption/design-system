import { TOptionItem } from "./types";

const createOptionItem = (value: string, label: string): TOptionItem => {
  return {
    optionValue: value,
    optionLabel: label,
  };
};

export default createOptionItem;
