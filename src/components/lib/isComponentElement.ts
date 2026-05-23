import React from "react";
import isElementOfBase from "./isElementOfBase";
import ComponentBrand from "../ComponentBrand";
import { TBaseComponent } from "./types";

const isComponentElement = <B extends TBaseComponent>(element: React.ReactNode): element is React.ReactElement<React.ComponentProps<B>, B> => {
  return isElementOfBase<TBaseComponent>(element, ComponentBrand);
};

export default isComponentElement;
