import clsx from "clsx";
import "./Cta.scss";
import Icon from "../../Icon/Icon";
import defineCtaComponent from "../shared/defineCtaComponent";
import { TBaseCta } from "../shared/types";

export type TCtaComponent = TBaseCta<{
  as?: React.ElementType;
  onClick?: React.MouseEventHandler<HTMLElement>;
  ctaProps?: Record<string, any>;
}>;

const Cta: TCtaComponent = defineCtaComponent(({
  as,
  label,
  variant = 'primary',
  icon,
  iconPosition = 'before',
  iconRelativeSize = 'base',
  iconNudgeX = 'default',
  iconNudgeY = 'default',
  size = 'base',
  isFullWidth = false,
  onClick,
  className,
  ctaProps: {
    className: ctaPropsClassName,
    ...ctaProps
  } = {},
}) => {
  const HtmlElement = as || 'button';

  const allClasses = clsx(
    'c-cta',
    {
      // Variants
      'c-cta--secondary': variant === 'secondary',
      'c-cta--primary-outlined': variant === 'primary-outlined',
      'c-cta--secondary-outlined': variant === 'secondary-outlined',
      'c-cta--link': variant === 'link',
      // Sizes
      'c-cta--xs': size === 'xs',
      'c-cta--sm': size === 'sm',
      'c-cta--lg': size === 'lg',
      'c-cta--full-width': isFullWidth,
    },
    className,
    ctaPropsClassName as (string | undefined),
  );

  const CtaIcon = () => {
    const allIconClasses = clsx(
      'c-cta__icon',
      {
        'c-cta__icon--nudge-left': iconNudgeX === 'left',
        'c-cta__icon--nudge-right': iconNudgeX === 'right',
      },
      {
        'c-cta__icon--nudge-up': iconNudgeY === 'up',
        'c-cta__icon--nudge-down': iconNudgeY === 'down',
      },
    );

    return icon ? (
      <Icon 
        className={allIconClasses} 
        iconName={icon} 
        relativeSize={iconRelativeSize} 
      />
    ) : undefined;
  };

  return (
    <HtmlElement className={allClasses} onClick={onClick} {...ctaProps}>
      <>
        {iconPosition === 'before' && (
          <CtaIcon />
        )}
        <span className="c-cta__label">{label}</span>
        {iconPosition === 'after' && (
          <CtaIcon />
        )}
      </>
    </HtmlElement>
  );
});

export default Cta;
