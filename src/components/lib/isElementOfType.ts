import React from "react";

const isElementOfType = <C extends React.ElementType>(
  element: React.ReactNode,
  component: C
): element is React.ReactElement<React.ComponentProps<C>, C> => {
  return React.isValidElement(element) && element.type === component;
};

export default isElementOfType;
