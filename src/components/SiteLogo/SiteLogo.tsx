import clsx from "clsx";
import "./SiteLogo.scss";
import defineComponent from "../lib/defineComponent";
import { TBaseComponent } from "../lib/types";

type TSiteLogoComponent = TBaseComponent<{
  imageUrl: string;
  imageAltText: string;
  intrinsicWidth: number;
  intrinsicHeight: number;
  linkUrl?: string;
}>;

const SiteLogo: TSiteLogoComponent = defineComponent(({
  imageUrl,
  imageAltText,
  intrinsicWidth,
  intrinsicHeight,
  linkUrl,
  className,
}) => {
  const allClasses = clsx(
    'c-site-logo',
    className,
  );

  const imageEl = (
    <img 
      className="c-site-logo__image" 
      src={imageUrl} 
      alt={imageAltText}
      width={intrinsicWidth} 
      height={intrinsicHeight} 
    />
  );

  return (
    <div className={allClasses} style={{
      '--intrinsic-width': intrinsicWidth,
      '--intrinsic-height': intrinsicHeight,
    } as React.CSSProperties}>
      {linkUrl ? (
        <a className="c-site-logo__link" href={linkUrl}>
          {imageEl}
        </a>
      ) : imageEl}
    </div>
  );
});

export default SiteLogo;

export { default as Typical } from './stories/Typical';
