import defineComponent from "@src/components/lib/defineComponent";
import ToggleControlBrand from "../ToggleControlBrand";
import { TBaseToggleControl } from "./types";
import { TBrand, Unbranded } from "@src/components/lib/types";

const defineToggleControlComponent = <C extends TBaseToggleControl<any> = TBaseToggleControl>(
  component: Unbranded<C>,
  brand: TBrand = ToggleControlBrand,
): C => {
  return defineComponent<C>(component, brand);
};

export default defineToggleControlComponent;
