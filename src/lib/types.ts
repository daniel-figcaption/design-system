export type OneOrMany<T> = T | T[];

export type WithRequiredKeys<T> = {
  [K in keyof Required<T>]: T[K];
};
