import { TBrand } from "@src/components/lib/types";
import { TBaseFullControl } from "./lib/types";

export const fullControlBrandString = "Component/Control/FullControl" as const;

const FullControlBrand = "Component/Control/FullControl" as TBrand<TBaseFullControl>;
export default FullControlBrand;
