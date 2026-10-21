import defineComponent from "@src/components/lib/defineComponent";
import CtaBrand from "../CtaBrand";
import { TBaseCta } from "./types";
import { TBrand, Unbranded } from "@src/components/lib/types";

const defineCtaComponent = <C extends TBaseCta<any> = TBaseCta>(
  component: Unbranded<C>,
  brand: TBrand = CtaBrand,
): C => {
  return defineComponent<C>(component, brand);
};

export default defineCtaComponent;
