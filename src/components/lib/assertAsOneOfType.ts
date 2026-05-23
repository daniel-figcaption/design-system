import React from "react";
import assertAsType from "./assertAsType";
import getComponentDisplayName from "./getComponentDisplayName";

/*
 * assertAsOneOfType
 *
 * This function filters JSX content based on base, and returns the first
 * matching element. All other matches are ignored. An error is thrown if 
 * no matches are found.
 */
const assertAsOneOfType = <C extends React.FC<any>>(jsx: React.ReactNode, component: C) => {
  const elements = assertAsType<C>(jsx, component);

  if (elements.length > 1) {
    if (process.env.NODE_ENV !== "production") {
      console.error(
        `%d elements of type %s were found. Exactly 1 expected.`,
        elements.length,
        `<${getComponentDisplayName(component)}>`
      );
    }
  }

  if (elements.length === 0) {
    const message = `No elements of type ${getComponentDisplayName(component)} were found. Exactly 1 expected.`;
    if (process.env.NODE_ENV !== "production") {
      console.error(message);
    }
    throw new Error(message);
  }

  return elements[0];
};

export default assertAsOneOfType;
