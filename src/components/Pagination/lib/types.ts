export type TPageLinksFormulaCOnfig = {
  totalPageCount: number;
  formula: (pageNo: number) => string;
};

export type TPageLinksComplexType = string[] | TPageLinksFormulaCOnfig;

export type TPageGroupSet = {
  startGroup: number[];
  centerGroup: number[];
  endGroup: number[];
};
