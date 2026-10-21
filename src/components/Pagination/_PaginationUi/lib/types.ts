/*
 * Types for the page items.
 * e.g. 1 | 2 | 3 | 4
 */

export type TLinkPageItem = {
  pageNumber: number;
  url: string;
  isCurrent?: false;
};

export type TNonLinkPageItem = {
  pageNumber: number;
  url?: string;
  isCurrent: true;
};

export type TPageItem = TLinkPageItem | TNonLinkPageItem;


/*
 * Types for the nav items.
 * e.g. << First | < Prev | Next > | Last >>
 */

export type TLinkNavItem = { 
  isActive: true; 
  url: string; 
  shortLabel?: string; 
  ariaLabel?: string 
};

export type TNonLinkNavItem = {
  isActive?: false; 
  url?: string; 
  shortLabel?: string; 
  ariaLabel?: string 
};

export type TNavItem = TLinkNavItem | TNonLinkNavItem;
