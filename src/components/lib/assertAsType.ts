import React from "react";
import isElementOfType from "./isElementOfType";
import getNodeDisplayName from "./getNodeDisplayName";
import { TElement } from "./types";

/*
 * assertAsType
 *
 * This function processes JSX and filters out any content which is not 
 * an element matching the specific component type.
 * 
 * This type of runtime check is necessary because TypeScript only 
 * validates JSX in a very basic way.
 * 
 * The super-generic type React.ReactElement is the best we can do. This
 * type will disallow JSX like {false} or {1}. But elements are all
 * functions and thus treated with no distinction. 
 * 
 * In other words, if you type a prop (like children) as TElement<TCtaComponent>,
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
 * For guaranteeing that only one element is returned, use: 
 * assertAsOneOfType.
 */
const assertAsType = <C extends React.FC<any>>(jsx: React.ReactNode, component: C) => {
  const nodes = React.Children.toArray(jsx);
  return nodes.filter((node): node is TElement<C> => {
    if (isElementOfType(node, component)) {
      return true;
    } else {
      if (process.env.NODE_ENV !== "production") {
        console.error(
          `Node of type %s was ignored. Node must be an element of type %s.`, 
          getNodeDisplayName(node), 
          `<${(component as any).displayName ?? (component as any).name}>`
        );
      }
      return false;
    }
  });
};

export default assertAsType;
