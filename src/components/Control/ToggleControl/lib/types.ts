import { TBaseControl } from "../../lib/types";
import { toggleControlBrandString } from "../ToggleControlBrand";

export type TBaseToggleControlProps = {
  /* */
};

export type TBaseToggleControl<
  P = {}, 
  E extends HTMLElement = HTMLInputElement,
  B extends `${typeof toggleControlBrandString}${string}` = typeof toggleControlBrandString
> = TBaseControl<P & TBaseToggleControlProps, E, B>;
