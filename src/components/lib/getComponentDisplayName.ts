/*
 * getComponentDisplayName
 *
 * displayName is React's stored value holding the proper name of 
 * the component, e.g. Checkbox.
 * 
 * This value could technically be undefined, so we default to
 * the native Function.name property.
 * In production this could be a mangled/minified string so is less 
 * useful.
 */
const getComponentDisplayName = (component: React.FC<any>) => {
  return `<${component.displayName || component.name}>`;
};

export default getComponentDisplayName;
