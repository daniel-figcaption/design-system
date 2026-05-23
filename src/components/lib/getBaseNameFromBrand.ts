import { TBrand } from "./types";

/*
 * getBaseNameFromBrand
 *
 * For a given brand, this will extract the name of the base.
 * e.g. for a brand "Component/Cta" the returned name will be "Cta".
 */
const getBaseNameFromBrand = (brand: TBrand) => {
  return brand.split('/').reverse()[0];
};

export default getBaseNameFromBrand;
