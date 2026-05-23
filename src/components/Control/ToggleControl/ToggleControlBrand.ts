import { TBrand } from "@src/components/lib/types";
import { TBaseToggleControl } from "./lib/types";

export const toggleControlBrandString = "Component/Control/ToggleControl" as const;

const ToggleControlBrand = "Component/Control/ToggleControl" as TBrand<TBaseToggleControl>;
export default ToggleControlBrand;
