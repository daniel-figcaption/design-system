import React from "react";
import getNodeDisplayName from "./getNodeDisplayName";
import { TBaseComponent, TBrand, TElement } from "./types";
import isElementOfBase from "./isElementOfBase";
import getBaseNameFromBrand from "./getBaseNameFromBrand";
import ComponentBrand from "../ComponentBrand";

/*
 * assertAsBase
 *
 * This function processes JSX and filters out any content which is not 
 * an element matching the specified base.
 * 
 * This type of runtime check is necessary because TypeScript only 
 * validates JSX in a very basic way.
 * 
 * The super-generic type React.ReactElement is the best we can do. This
 * type will disallow JSX like {false} or {1}. But elements are all
 * functions and thus treated with no distinction. 
 * 
 * In other words, if you type a prop (like children) as TElement<TBaseCta>,
 * the compiler will allow any component in this slot, even an HTML tag 
 * like <p />.
 * 
 * For this reason, anywhere we receive JSX we need to type this as
 * React.ReactElement and do further assertions to narrow down our type.
 * 
 * This assertAsBase assertion will simply filter out any non-conforming 
 * React nodes and notify via printing an error to the console (in dev
 * environments).
 * 
 * For simply asserting as a library component of any kind, rely on the
 * default brand argument, e.g.:
 * `const component = assertAsBase(jsx)`
 * 
 * For guaranteeing that only one element is returned, use: 
 * assertAsOneOfBase.
 */
const assertAsBase = <B extends TBaseComponent = TBaseComponent>(
  jsx: React.ReactNode, 
  brand: TBrand<B> = ComponentBrand as TBrand<B>
) => {
  type TBase = typeof brand.__associatedBase;

  const nodes = React.Children.toArray(jsx);
  return nodes.filter((node): node is TElement<TBase> => {
    if (isElementOfBase(node, brand)) {
      return true;
    } else {
      if (process.env.NODE_ENV !== "production") {
        console.error(
          `Node of type %s was ignored. Node must be an element of base %s.`, 
          getNodeDisplayName(node),
          getBaseNameFromBrand(brand)
        );
      }
      return false;
    }
  });
};

export default assertAsBase;
