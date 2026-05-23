import React from "react";
import { TBaseComponent, TElement } from "@src/components/lib/types";
import { controlBrandString } from "../ControlBrand";

type TValueElAttrs<E extends HTMLElement> =
  E extends HTMLInputElement
    ? React.InputHTMLAttributes<HTMLInputElement>
    : E extends HTMLSelectElement
    ? React.SelectHTMLAttributes<HTMLSelectElement>
    : E extends HTMLTextAreaElement
    ? React.TextareaHTMLAttributes<HTMLTextAreaElement>
    : never;

export type TBaseControlProps<E extends HTMLElement> = {
  hasError?: boolean;
  valueElAttrs?: TValueElAttrs<E>;
};

export type TBaseControl<
  P = {},
  E extends HTMLElement = HTMLInputElement,
  B extends `${typeof controlBrandString}${string}` = typeof controlBrandString
> = TBaseComponent<
  P & TBaseControlProps<E>,
  B
>;

export type TControlElement = TElement<TBaseControl>;
