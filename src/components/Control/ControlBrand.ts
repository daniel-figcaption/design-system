import { TBrand } from "../lib/types";
import { TBaseControl } from "./lib/types";

export const controlBrandString = "Component/Control" as const;

const ControlBrand = controlBrandString as TBrand<TBaseControl>;
export default ControlBrand;
