import clsx from "clsx";
import "./SiteHeader.scss";
import defineComponent from "../lib/defineComponent";
import { TBaseComponent } from "../lib/types";
import SiteLogo from "../SiteLogo/SiteLogo";
import DropdownMenu from "../DropdownMenu/DropdownMenu";
import resolveStorybookImageUrl from '../SiteLogo/lib/resolveStorybookLogoUrl';

type TSiteHeaderComponent = TBaseComponent<{
  //
}>;

const SiteHeader: TSiteHeaderComponent = defineComponent(({
  className,
}) => {
  const allClasses = clsx(
    'c-site-header',
    className,
  );

  return (
    <header className={allClasses}>
      <SiteLogo
        className="c-site-header__logo"
        imageUrl={resolveStorybookImageUrl("mcgill-logo.svg")}
        imageAltText="McGill"
        intrinsicWidth={166}
        intrinsicHeight={44}
        linkUrl="https://www.mcgill.ca/"
      />

      <nav className="c-site-header__nav" aria-label="Main navigation">
        <ul className="c-site-header__menu-list">
          <li className="c-site-header__menu-item">
            <a className="c-site-header__menu-link" href="#x">Programs</a>
            <DropdownMenu className="c-site-header__dropdown-menu" links={[
              {
                label: 'Mathematics',
                url: '#x',
              },
              {
                label: 'Psychology',
                url: '#x',
              },
            ]} />
          </li>
          <li className="c-site-header__menu-item">
            <a className="c-site-header__menu-link" href="#x">Research</a>
          </li>
          <li className="c-site-header__menu-item">
            <a className="c-site-header__menu-link" href="#x">News &amp; events</a>
          </li>
          <li className="c-site-header__menu-item">
            <a className="c-site-header__menu-link" href="#x">About</a>
            <DropdownMenu className="c-site-header__dropdown-menu" links={[
              {
                label: 'About us',
                url: '#x',
              },
              {
                label: 'Meet the team',
                url: '#x',
              },
              {
                label: 'Careers',
                url: '#x',
                isCurrent: true,
              },
              {
                label: 'Contact us',
                url: '#x',
              },
            ]} />
          </li>
        </ul>
      </nav>
    </header>
  );
});

export default SiteHeader
