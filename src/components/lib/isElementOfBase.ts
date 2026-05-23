import React from "react";
import { TBaseComponent, TBrand, TElement } from "./types";
import ComponentBrand from "../ComponentBrand";

const isElementOfBase = <B extends TBaseComponent = TBaseComponent>(
  element: React.ReactNode,
  brand: TBrand<B> = ComponentBrand as TBrand<B>
): element is TElement<B> => {
  return React.isValidElement(element)
    && typeof element.type === 'function'
    && '__brand' in element.type
    && typeof element.type.__brand === 'string'
    && element.type.__brand.startsWith(brand);
};

export default isElementOfBase;
