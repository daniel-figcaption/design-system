/*
 * numberRange
 *
 * Constructs an array of numbers from the start number up until the end number.
 */

const numberRange = (start: number, end: number): number[] => {
  return Array.from({ length: Math.max(0, end - start + 1) }, (_, i) => start + i);
};

export default numberRange;
