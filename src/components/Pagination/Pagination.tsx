import "./Pagination.scss";
import defineComponent from "../lib/defineComponent";
import { TBaseComponent } from "../lib/types";
import { TNavItem, TPageItem } from "./_PaginationUi/lib/types";
import _PaginationUi from "./_PaginationUi/_PaginationUi";
import { TPageLinksComplexType } from "./lib/types";
import buildPageGroups from "./lib/buildPageGroups";

type TPaginationComponent = TBaseComponent<{
  pageLinks: TPageLinksComplexType;
  currentPageNo: number;
  maxCenterItemsCount?: number;
  maxEndItemsCount?: number;
  showEndNavLinks?: boolean;
  showTrackNavLinks?: boolean;
  showInactiveNavItems?: boolean;
  ariaLabel?: string;
}>;

const Pagination: TPaginationComponent = defineComponent(({
  pageLinks = [],
  currentPageNo = 1,
  maxCenterItemsCount = 1,
  maxEndItemsCount = 2,
  showEndNavLinks = true,
  showTrackNavLinks = true,
  showInactiveNavItems = true,
  className,
  ariaLabel,
}) => {
  const totalPageCount = Array.isArray(pageLinks)
    ? pageLinks.length
    : pageLinks.totalPageCount;

  const {
    startGroup, 
    centerGroup, 
    endGroup 
  } = buildPageGroups(
    totalPageCount,
    currentPageNo,
    maxEndItemsCount,
    maxCenterItemsCount,
  );

  const getPageLinkUrl = (pageNumber: number) => {
    return Array.isArray(pageLinks) ? pageLinks[pageNumber - 1] : pageLinks.formula(pageNumber);
  };

  const createPageItem = (pageNumber: number): TPageItem => {
    if (pageNumber === currentPageNo) {
      /* The current page, which apepars as a number but is not expressed as a page link.  */
      return  {
        pageNumber, 
        isCurrent: true 
      };
    } else {
      /* A regular, linked page number. */
      return {
        pageNumber, 
        url: getPageLinkUrl(pageNumber) 
      };
    }
  };

  const createNavItem = (pageNumber: number, condition: boolean): TNavItem | undefined => {
    if (condition) {
      /* A regular, active nav link. */
      return { 
        isActive: true, 
        url: getPageLinkUrl(pageNumber) 
      };
    } else {
      /* An inactive (grayed out) nav item, such as when the current page is 1 or the last page. */
      return showInactiveNavItems ? { 
        isActive: false 
      } : undefined;
    }
  };

  return (
    <_PaginationUi
      className={className}
      firstPageLink={showEndNavLinks ? createNavItem(1, currentPageNo > 1) : undefined}
      prevPageLink={showTrackNavLinks ? createNavItem(currentPageNo - 1, currentPageNo > 1) : undefined}
      startPageItems={startGroup.map(item => createPageItem(item))}
      centerPageItems={centerGroup.map(item => createPageItem(item))}
      endPageItems={endGroup.map(item => createPageItem(item))}
      nextPageLink={showTrackNavLinks ? createNavItem(currentPageNo + 1, currentPageNo < totalPageCount) : undefined}
      lastPageLink={showEndNavLinks ? createNavItem(totalPageCount, currentPageNo < totalPageCount) : undefined}
      ariaLabel={ariaLabel}
    />
  );
});

export default Pagination;
