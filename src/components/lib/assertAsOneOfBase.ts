import React from "react";
import { TBaseComponent, TBrand } from "./types";
import assertAsBase from "./assertAsBase";
import getBaseNameFromBrand from "./getBaseNameFromBrand";
import ComponentBrand from "../ComponentBrand";

/*
 * assertAsOneOfBase
 *
 * This function filters JSX content based on base, and returns the first
 * matching element. All other matches are ignored. An error is thrown if 
 * no matches are found.
 */
const assertAsOneOfBase = <B extends TBaseComponent = TBaseComponent>(
  jsx: React.ReactNode, 
  brand: TBrand<B> = ComponentBrand as TBrand<B>
) => {
  const elements = assertAsBase(jsx, brand);

  if (elements.length > 1) {
    if (process.env.NODE_ENV !== "production") {
      console.error(
        `%d elements of type %s were found. Exactly 1 expected.`,
        elements.length,
        getBaseNameFromBrand(brand)
      );
    }
  }

  if (elements.length === 0) {
    const message = `No elements of type ${getBaseNameFromBrand(brand)} were found. Exactly 1 expected.`;
    if (process.env.NODE_ENV !== "production") {
      console.error(message);
    }
    throw new Error(message);
  }

  return elements[0];
};

export default assertAsOneOfBase;
