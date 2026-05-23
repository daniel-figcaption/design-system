import { TBaseComponent } from "@src/components/lib/types";
import { iconCtaBrandString } from "../IconCtaBrand";
import { TIconName, TIconRelativeSize } from "@src/components/Icon/lib/types";

export type TBaseIconCtaProps = {
  icon: TIconName;
  variant?: 'bare' | 'primary' | 'secondary' | 'primary-outlined' | 'secondary-outlined';
  hiddenLabel: string;
  iconRelativeSize?: TIconRelativeSize;
  iconNudgeX?: 'default' | 'left' | 'right';
  iconNudgeY?: 'default' | 'up' | 'down';
  size?: 'sm' | 'base' | 'lg' | 'xl';
};

export type TBaseIconCta<
  P = {},
  B extends `${typeof iconCtaBrandString}${string}` = typeof iconCtaBrandString
> = TBaseComponent<
  P & TBaseIconCtaProps,
  B
>;
