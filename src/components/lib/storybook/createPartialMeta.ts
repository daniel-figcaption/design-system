import type { Meta } from "@storybook/react";
import { TBaseComponent } from "@src/components/lib/types";
import { TPropField } from "./propField/types";
import { TCreatePartialMetaConfig } from "./types";
import createInputType from "./propField/createInputType";
import sourceConfig from "./sourceConfig";
import basePropFields from "./basePropFields";

const createPartialMeta = <C extends TBaseComponent>({
  component,
  layout,
  fields,
}: TCreatePartialMetaConfig<C>): Partial<Meta<C>> => {
  fields = {
    ...fields,
    ...basePropFields,
  };

  const propFieldEntries = [...Object.entries<TPropField>(fields)];

  const args: Meta<any>['args'] = Object.fromEntries(
    propFieldEntries.map(([propName, propField]) => [propName, propField.p1_typeSafeDefaultValue])
  );

  const argTypes: Meta<any>['argTypes'] = Object.fromEntries(
    propFieldEntries.map(([propName, propField]) => [propName, createInputType(propField)])
  );

  return {
    component: component,
    parameters: {
      layout: layout === 'centered' ? 'centered' : undefined,
      docs: {
        /* Commented out here because it casues the browser to freeze when changing control values. Needs work. */
        //source: sourceConfig,
      },
    },
    decorators: typeof layout !== 'string' ? [layout] : undefined,
    args,
    argTypes,
  } as Partial<Meta<C>>;
};

export default createPartialMeta;
