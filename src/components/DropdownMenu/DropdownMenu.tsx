import clsx from "clsx";
import "./DropdownMenu.scss";
import defineComponent from "../lib/defineComponent";
import { TBaseComponent } from "../lib/types";
import { TDropdownLink } from "./lib/types";

type TDropdownMenuComponent = TBaseComponent<{
  links: TDropdownLink[];
}>;

const DropdownMenu: TDropdownMenuComponent = defineComponent(({
  links,
  className,
}) => {
  const allClasses = clsx(
    'c-dropdown-menu',
    className,
  );

  return (
    <div className={allClasses}>
      <ul className="c-dropdown-menu__list">
        {links.map(({
          label, 
          url, 
          isCurrent
        }, i) => (
          <li key={i} className="c-dropdown-menu__item">
            <a className="c-dropdown-menu__link" href={url} aria-current={isCurrent ? 'page' : undefined}>
              {label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
});

export default DropdownMenu
