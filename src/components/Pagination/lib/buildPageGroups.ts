import numberRange from "./numberRange";
import { TPageGroupSet } from "./types";

const buildPageGroups = (
  totalPageCount: number,
  currentPageNo: number,
  maxEndItemsCount: number,
  maxCenterItemsCount: number,
): TPageGroupSet => {
  const startEnd = currentPageNo <= maxEndItemsCount
  ? maxEndItemsCount + 1
  : maxEndItemsCount;
  const startNums = numberRange(1, Math.min(startEnd, totalPageCount));

  const naturalEndStart = totalPageCount - maxEndItemsCount + 1;
  const endStart = Math.max(
    currentPageNo >= naturalEndStart ? naturalEndStart - 1 : naturalEndStart,
    startNums[startNums.length - 1] + 1,
  );
  const endNums = numberRange(endStart, totalPageCount);

  const centerLower = startNums.length > 0 ? startNums[startNums.length - 1] + 1 : 1;
  const centerUpper = endNums.length > 0 ? endNums[0] - 1 : totalPageCount;
  const centerNums = numberRange(
    Math.max(centerLower, currentPageNo - maxCenterItemsCount),
    Math.min(centerUpper, currentPageNo + maxCenterItemsCount),
  );

  /* Using a Set here will naturally eliminate duplicates. */
  const allNums = [...new Set([...startNums, ...centerNums, ...endNums])].sort((a, b) => a - b);

  /* 
   * Split sorted page numbers into contiguous runs. 
   * The gaps become separate groups.
   */
  const groups: number[][] = [];
  let current: number[] = [];
  for (const num of allNums) {
    if (current.length > 0 && num > current[current.length - 1] + 1) {
      groups.push(current);
      current = [];
    }
    current.push(num);
  }
  if (current.length > 0) groups.push(current);

  return {
    startGroup: groups[0] ?? [],
    centerGroup: groups[1] ?? [],
    endGroup: groups[2] ?? [],
  };
};

export default buildPageGroups;
