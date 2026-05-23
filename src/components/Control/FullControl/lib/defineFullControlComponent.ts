import defineComponent from "@src/components/lib/defineComponent";
import FullControlBrand from "../FullControlBrand";
import { TBaseFullControl } from "./types";
import { TBrand, Unbranded } from "@src/components/lib/types";

const defineFullControlComponent = <C extends TBaseFullControl<any> = TBaseFullControl>(
  component: Unbranded<C>,
  brand: TBrand = FullControlBrand,
): C => {
  return defineComponent<C>(component, brand);
};

export default defineFullControlComponent;
