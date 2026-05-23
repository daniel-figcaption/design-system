import { TBaseComponent, TBrand } from "./lib/types";

export const componentBrandString = "Component" as const;

const ComponentBrand = componentBrandString as TBrand<TBaseComponent>;
export default ComponentBrand;
