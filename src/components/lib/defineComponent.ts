import { TBaseComponent, TBrand, Unbranded } from "./types";
import ComponentBrand from "../ComponentBrand";

/*
 * defineComponent
 *
 * This function takes an unbranded component and returns the same
 * component with the brand string applied (i.e. a valid library
 * component).
 * 
 * All library components should be defined via this function or a
 * function that extends this for a more specific base
 * e.g.: defineCtaComponent
 */
const defineComponent = <C extends TBaseComponent = TBaseComponent>(
  component: Unbranded<C>,
  brand: TBrand = ComponentBrand,
): C => {
  /*
   * These 2 lines need to be executed in quick succession.
   * We are quickly stamping on the brand and then force casting
   * it to the new type.
   */
  (component as any).__brand = brand;
  return component as C;
};

export default defineComponent;
