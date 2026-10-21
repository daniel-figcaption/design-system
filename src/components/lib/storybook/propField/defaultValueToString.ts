/*
 * defaultValueToString
 *
 * This function returns a Storybook string representation of a default prop
 * value, e.g. '', 3, true, [], {}, 'primary'.
 * 
 * Simple values like string literals, boolean values, numbers, and empty
 * arrays and objects can be printed using one of these text representations.
 * 
 * Complex values like functions, complex objects, and complex arrays are not
 * supported and should display no label. Equally, the default value of
 * undefined should display no label (as it means nothing in the semantic sense).
 */

const defaultValueToString = (value: any): string | null => {
  if (value === undefined) {
    /* Not supported: Undefined values */
    return null;
  }

  if (typeof value === 'function') {
    /* Not supported: Functions */
    return null;
  }

  if (typeof value === 'symbol') {
    /* Not supported: Symbols */
    return null;
  }

  if (Array.isArray(value)) {
    if (value.length === 0) {
      /* Supported: An empty array */
      return '[]';
    }
    /* Not supported: A non-empty array */
    return null;
  }

  if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
    /* Object */
    if (Object.keys(value).length === 0) {
      /* Supported: An empty object */
      return '{}';
    } else {
      /* Not supported: A complex object */
      return null;
    }
  }

  if (typeof value === 'string') {
    /* String */
    return `'${value}'`;
  }

  /*
   * Also supported:
   *  - null
   *  - any boolean
   *  - any number
   */
  return String(value);
};

export default defaultValueToString;
