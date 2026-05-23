import React from "react";
import getComponentDisplayName from "./getComponentDisplayName";

/*
 * getNodeDisplayName
 *
 * This function serves to determine an appropriate displayName
 * for a given node.
 * These are useful for display in console messages.
 * 
 * For nodes of type ReactElement this will be something like:
 * "<Component>".
 * 
 * For all other types of node (string, numbers) this is the
 * typeof string, like:
 * "string".
 */
const getNodeDisplayName = (node: React.ReactNode) => {
  if (React.isValidElement(node)) {
    const nodeType = node.type;

    if (typeof nodeType === "string") {
      /*
       * An intrinsic HTML element
       * type will be a string such as "div".
       */
      return `<${nodeType}>`;
    }

    /*
     * A function (or potentially class) component.
     */
    return getComponentDisplayName(nodeType as React.FC);
  }

  return typeof node;
};

export default getNodeDisplayName;
