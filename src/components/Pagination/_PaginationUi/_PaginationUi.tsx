import React from "react";
import clsx from "clsx";
import { TNavItem, TPageItem } from "./lib/types";
import Icon from "@src/components/Icon/Icon";

type TProps = {
  firstPageLink?: TNavItem;
  prevPageLink?: TNavItem;
  startPageItems?: TPageItem[];
  centerPageItems?: TPageItem[];
  endPageItems?: TPageItem[];
  nextPageLink?: TNavItem;
  lastPageLink?: TNavItem;
  ariaLabel?: string;
  className?: string;
};

const _PaginationUi: React.FC<TProps> = ({
  firstPageLink,
  prevPageLink,
  startPageItems,
  centerPageItems,
  endPageItems,
  nextPageLink,
  lastPageLink,
  ariaLabel = 'Pagination',
  className,
}) => {
  const allClasses = clsx(
    'c-pagination',
    className,
  );

  const pageItemGroups = [
    startPageItems, 
    centerPageItems, 
    endPageItems
  ].filter((group) => group && group.length) as TPageItem[][];

  return (
    <nav className={allClasses} aria-label={ariaLabel}>
      <div className="c-pagination__nav-group">
        {firstPageLink && (
          <NavLink 
            type="end" 
            isActive={firstPageLink.isActive}
            url={firstPageLink.url}
            ariaLabel={firstPageLink.ariaLabel || 'First page'}
          >
            <Icon iconName="arrow-left" relativeSize="sm" />
            {firstPageLink.shortLabel || 'First'}
          </NavLink>
        )}

        {prevPageLink && (
          <NavLink 
            type="track" 
            isActive={prevPageLink.isActive}
            url={prevPageLink.url}
            ariaLabel={prevPageLink.ariaLabel || 'Previous page'}
          >
            <Icon iconName="chevron-left" relativeSize="sm" />
            {prevPageLink.shortLabel || 'Prev'}
          </NavLink>
        )}
      </div>

      <div className="c-pagination__page-group">
        {pageItemGroups.map((pageItemGroup, i) => (
          <div key={i} className="c-pagination__page-subgroup">
            {pageItemGroup.map(({ 
              pageNumber, 
              url, 
              isCurrent 
            }) => url ? (
              <a
                key={pageNumber}
                className="c-pagination__page-link" 
                href={url} 
                aria-label={`Page ${pageNumber}`}
              >
                {pageNumber}
              </a>
            ) : (
              <span 
                key={pageNumber}
                className="c-pagination__page-item" 
                aria-current={isCurrent ? 'page' : undefined}
                aria-label={`Page ${pageNumber}`}
              >
                {pageNumber}
              </span>
            ))}
          </div>
        ))}
      </div>

      <div className="c-pagination__nav-group">
        {nextPageLink && (
          <NavLink 
            type="track" 
            isActive={nextPageLink.isActive}
            url={nextPageLink.url}
            ariaLabel={nextPageLink.ariaLabel || 'Next page'}
          >
            {nextPageLink.shortLabel || 'Next'}
            <Icon iconName="chevron-right" relativeSize="sm" />
          </NavLink>
        )}
        
        {lastPageLink && (
          <NavLink 
            type="end" 
            isActive={lastPageLink.isActive}
            url={lastPageLink.url}
            ariaLabel={lastPageLink.ariaLabel || 'Last page'}
          >
            {lastPageLink.shortLabel || 'Last'}
            <Icon iconName="arrow-right" relativeSize="sm" />
          </NavLink>
        )}
      </div>
    </nav>
  );
};

const NavLink: React.FC<{
  type: 'end' | 'track';
  isActive?: boolean;
  url?: string;
  ariaLabel: string;
  children: React.ReactNode;
}> = ({
  type,
  isActive,
  url,
  ariaLabel,
  children
}) => {
  if (isActive && url) {
    const className = clsx({
      'c-pagination__end-link': type === 'end',
      'c-pagination__track-link': type === 'track',
    });
    return (
      <a className={className} href={url} aria-label={ariaLabel}>
        {children}
      </a>
    );
  } else {
    const className = clsx({
      'c-pagination__end-item': type === 'end',
      'c-pagination__track-item': type === 'track',
    });
    return (
      <span className={className} aria-disabled="true" aria-label={`${ariaLabel}, unavailable`}>
        {children}
      </span>
    );
  }
};

export default _PaginationUi;
