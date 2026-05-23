import { TBrand } from "../lib/types";
import { TBaseCta } from "./lib/types";

export const ctaBrandString = "Component/Cta" as const;

const CtaBrand = ctaBrandString as TBrand<TBaseCta>;
export default CtaBrand;
