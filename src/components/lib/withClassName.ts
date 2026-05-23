import React from "react";
import clsx, { ClassValue } from "clsx";
import { TBaseComponent, TElement } from "./types";

/*
 * withClassName
 * 
 * This utility can be used in components to extend library
 * components with extra classes.
 * 
 * This is useful if your component contains child components
 * that need to be modified via CSS.
 * 
 * You can pass in any value that you would normally pass in
 * to the clsx utility.
 */
const withClassName = <
  T extends TElement<TBaseComponent<any, any>>
>(
  element: T,
  className: ClassValue
): T => {
  return React.cloneElement(element, {
    className: clsx(element.props.className, className),
  }) as T;
};

export default withClassName;
