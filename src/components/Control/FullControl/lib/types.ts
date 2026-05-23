import { TBaseControl } from "../../lib/types";
import { fullControlBrandString } from "../FullControlBrand";

export type TBaseFullControlProps = {
  /* */
};

export type TBaseFullControl<
  P = {}, 
  E extends HTMLElement = HTMLInputElement,
  B extends `${typeof fullControlBrandString}${string}` = typeof fullControlBrandString
> = TBaseControl<P & TBaseFullControlProps, E, B>;
