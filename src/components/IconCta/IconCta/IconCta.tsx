import clsx from "clsx";
import * as React from "react";
import "./IconCta.scss";
import Icon from "../../Icon/Icon";
import { TBaseIconCta } from "../shared/types";
import defineIconCtaComponent from "../shared/defineIconCtaComponent";

export type TIconCtaComponent = TBaseIconCta<{
  as?: React.ElementType;
  onClick?: React.MouseEventHandler<HTMLElement>;
  ctaProps?: Record<string, any>;
}>

const IconCta: TIconCtaComponent = defineIconCtaComponent(({
  as,
  icon,
  variant = 'bare',
  hiddenLabel,
  size = 'base',
  iconRelativeSize = 'base',
  iconNudgeX = 'default',
  iconNudgeY = 'default',
  onClick,
  className,
  ctaProps: {
    className: ctaPropsClassName,
    ...ctaProps
  } = {},
}) => {
  const HtmlElement = as || 'button';

  const allClasses = clsx(
    'c-icon-cta',
    {
      // Variants
      'c-icon-cta--bare': variant === 'bare',
      'c-icon-cta--secondary': variant === 'secondary',
      'c-icon-cta--primary-outlined': variant === 'primary-outlined',
      'c-icon-cta--secondary-outlined': variant === 'secondary-outlined',
      // Sizes
      'c-icon-cta--sm': size === 'sm',
      'c-icon-cta--lg': size === 'lg',
      'c-icon-cta--xl': size === 'xl',
    },
    className,
    ctaPropsClassName as (string | undefined),
  );

  const IconCtaIcon = () => {
    const allIconClasses = clsx(
      'c-icon-cta__icon',
      {
        'c-icon-cta__icon--nudge-left': iconNudgeX === 'left',
        'c-icon-cta__icon--nudge-right': iconNudgeX === 'right',
      },
      {
        'c-icon-cta__icon--nudge-up': iconNudgeY === 'up',
        'c-icon-cta__icon--nudge-down': iconNudgeY === 'down',
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
      <span className="u-visually-hidden">{hiddenLabel}</span>
      <IconCtaIcon />
    </HtmlElement>
  );
});

export default IconCta;
