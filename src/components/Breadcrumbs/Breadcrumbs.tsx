import clsx from "clsx";
import defineComponent from "../lib/defineComponent";
import { TBaseComponent } from "../lib/types";
import "./Breadcrumbs.scss";
import { TBreadcrumbItem } from "./lib/types";

export type TBreadcrumbsComponent = TBaseComponent<{
  items: TBreadcrumbItem[];
  ariaLabel?: string;
}>;

const Breadcrumbs: TBreadcrumbsComponent = defineComponent(({
  items,
  ariaLabel = 'Breadcrumbs',
  className,
}) => {
  const allClasses = clsx(
    'c-breadcrumbs',
    className,
  );

  return (
    <nav className={allClasses} aria-label={ariaLabel}>
      <ol className="c-breadcrumbs__list">
        {items.map((item, i) => {
          return item.url ? (
            <li className="c-breadcrumbs__item">
              <a 
                className="c-breadcrumbs__link" 
                href={item.url} 
                aria-current={item.isCurrentPage ? 'page' : undefined}
              >
                {item.label}
              </a>
            </li>
          ) : (
            <li className="c-breadcrumbs__item" aria-current={item.isCurrentPage ? 'page' : undefined}>
              {item.label}
            </li>
          );
        })}
      </ol>
    </nav>
  );
});

export default Breadcrumbs;
