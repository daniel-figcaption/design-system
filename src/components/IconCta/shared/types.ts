import { TBaseComponent } from "@src/components/lib/types";
import { iconCtaBrandString } from "../IconCtaBrand";
import { TIconName, TIconRelativeSize } from "@src/components/Icon/lib/types";
import * as enums from "./enums";

export type TIconCtaVariant = typeof enums.iconCtaVariants[number];
export type TIconCtaIconNudgeX = typeof enums.iconCtaIconNudgeXValues[number];
export type TIconCtaIconNudgeY = typeof enums.iconCtaIconNudgeYValues[number];
export type TIconCtaSize = typeof enums.iconCtaSizes[number];

export type TBaseIconCtaProps = {
  icon: TIconName;
  variant?: TIconCtaVariant;
  hiddenLabel: string;
  iconRelativeSize?: TIconRelativeSize;
  iconNudgeX?: TIconCtaIconNudgeX;
  iconNudgeY?: TIconCtaIconNudgeY;
  size?: TIconCtaSize;
};

export type TBaseIconCta<
  P = {},
  B extends `${typeof iconCtaBrandString}${string}` = typeof iconCtaBrandString
> = TBaseComponent<
  P & TBaseIconCtaProps,
  B
>;
