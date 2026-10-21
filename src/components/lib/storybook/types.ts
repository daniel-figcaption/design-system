import type { Decorator } from "@storybook/react";
import { WithRequiredKeys } from "@src/lib/types";
import { ComponentProps } from "react";
import { TBaseComponent, TBaseComponentProps } from "../types";
import { TPropField } from "./propField/types";

/*
 * TFilteredProps
 *
 * An object representing all the *unique* props of a component. 
 * i.e. The props minus the base props. All prop keys are required, even optional ones.
 */
export type TFilteredProps<C extends TBaseComponent> 
  = WithRequiredKeys<Omit<ComponentProps<C>, keyof TBaseComponentProps>>;


/*
 * TPropFieldsMap
 * 
 * An object mapping of prop names => TPropField objects, to be passed in as the fields
 * property to createPartialMeta.
 */
export type TPropFieldsMap<C extends TBaseComponent> = {
  [K in keyof TFilteredProps<C>]: TPropField;
};

export type TCreatePartialMetaConfig<C extends TBaseComponent> = {
  component: C;
  layout: Decorator | 'centered' | 'default';
  fields: TPropFieldsMap<C>;
};
