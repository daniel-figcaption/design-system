import { TBrand } from "../lib/types";
import { TBaseIconCta } from "./shared/types";

export const iconCtaBrandString = "Component/IconCta" as const;

const IconCtaBrand = iconCtaBrandString as TBrand<TBaseIconCta>;
export default IconCtaBrand;
