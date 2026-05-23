import defineComponent from "@src/components/lib/defineComponent";
import IconCtaBrand from "../IconCtaBrand";
import { TBaseIconCta } from "./types";
import { TBrand, Unbranded } from "@src/components/lib/types";

const defineIconCtaComponent = <C extends TBaseIconCta<any> = TBaseIconCta>(
  component: Unbranded<C>,
  brand: TBrand = IconCtaBrand,
): C => {
  return defineComponent<C>(component, brand);
};

export default defineIconCtaComponent;
