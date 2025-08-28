import clsx from "clsx";
import * as React from "react";
import "./Cta.scss";
import Icon, { TIconName, TIconRelativeSize } from "../Icon/Icon";

export type TProps = {
  label: string;
  variant?: 'primary' | 'secondary' | 'primary-outlined' | 'secondary-outlined' | 'link';
  icon?: TIconName;
  iconPosition?: 'before' | 'after';
  iconRelativeSize?: TIconRelativeSize;
  iconVerticalNudge?: 'default' | 'up' | 'down';
  size?: 'xs' | 'sm' | 'base' | 'lg';
  isFullWidth?: boolean;
  className?: string;
};

type TCtaProps<T extends React.ElementType> = TProps & {
  as?: T;
  ctaProps?: Record<string, any>;
};

const Cta = <T extends React.ElementType = 'button'>({
  as,
  label,
  variant = 'primary',
  icon,
  iconPosition = 'before',
  iconRelativeSize = 'base',
  iconVerticalNudge = 'default',
  size = 'base',
  isFullWidth = false,
  className,
  ctaProps: {
    className: ctaPropsClassName,
    ...ctaProps
  } = {},
}:
  TCtaProps<T>
  & Omit<React.ComponentPropsWithoutRef<T>, keyof TCtaProps<T>>
) => {
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
        'c-cta__icon--nudge-up': iconVerticalNudge === 'up',
        'c-cta__icon--nudge-down': iconVerticalNudge === 'down',
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
    <HtmlElement className={allClasses} {...ctaProps}>
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
};

export default Cta;
