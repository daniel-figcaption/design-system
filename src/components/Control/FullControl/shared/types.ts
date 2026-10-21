import { TBaseControl } from "../../lib/types";
import { fullControlBrandString } from "../FullControlBrand";
import { fullControlSizes } from "./enums";

/*
 * Size is shared by most full control components, but not necessarily all.
 * It is defined here because it is (mostly) shared.
 */
export type TFullControlSize = typeof fullControlSizes[number];

export type TBaseFullControlProps = {
  /* */
};

export type TBaseFullControl<
  P = {}, 
  E extends HTMLElement = HTMLInputElement,
  B extends `${typeof fullControlBrandString}${string}` = typeof fullControlBrandString
> = TBaseControl<P & TBaseFullControlProps, E, B>;
