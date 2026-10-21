import { TIconName, TIconRelativeSize } from "@src/components/Icon/lib/types";
import { TBaseComponent } from "@src/components/lib/types";
import { ctaBrandString } from "../CtaBrand";
import * as enums from "./enums";

export type TCtaVariant = typeof enums.ctaVariants[number];
export type TCtaIconPosition = typeof enums.ctaIconPositions[number];
export type TCtaIconNudgeX = typeof enums.ctaIconNudgeXValues[number];
export type TCtaIconNudgeY = typeof enums.ctaIconNudgeYValues[number];
export type TCtaSize = typeof enums.ctaSizes[number];

export type TBaseCtaProps = {
  label: string;
  variant?: TCtaVariant;
  icon?: TIconName;
  iconPosition?: TCtaIconPosition;
  iconRelativeSize?: TIconRelativeSize;
  iconNudgeX?: TCtaIconNudgeX;
  iconNudgeY?: TCtaIconNudgeY;
  size?: TCtaSize;
  isFullWidth?: boolean;
};

export type TBaseCta<
  P = {},
  B extends `${typeof ctaBrandString}${string}` = typeof ctaBrandString
> = TBaseComponent<
  P & TBaseCtaProps,
  B
>;
