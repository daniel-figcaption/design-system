import { TIconName, TIconRelativeSize } from "@src/components/Icon/lib/types";
import { TBaseComponent } from "@src/components/lib/types";
import { ctaBrandString } from "../CtaBrand";

export type TBaseCtaProps = {
  label: string;
  variant?: 'primary' | 'secondary' | 'primary-outlined' | 'secondary-outlined' | 'link';
  icon?: TIconName;
  iconPosition?: 'before' | 'after';
  iconRelativeSize?: TIconRelativeSize;
  iconNudgeX?: 'default' | 'left' | 'right';
  iconNudgeY?: 'default' | 'up' | 'down';
  size?: 'xs' | 'sm' | 'base' | 'lg';
  isFullWidth?: boolean;
};

export type TBaseCta<
  P = {},
  B extends `${typeof ctaBrandString}${string}` = typeof ctaBrandString
> = TBaseComponent<
  P & TBaseCtaProps,
  B
>;
