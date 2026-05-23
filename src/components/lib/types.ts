import React from "react";
import { componentBrandString } from "../ComponentBrand";

/*
 * TBaseComponent
 *
 * All library components in the design system should inherit 
 * from this base type.
 * 
 * Library components are any public component that can be
 * included in client code.
 * 
 * Private components (usually prepended with _) that are only 
 * used for internal rendering within other components should 
 * not normally inherit from this type.
 * 
 * Library components share a common interface. For example,
 * className is common across all components and allows the
 * splicing together of custom classes with baked-in ones using 
 * clsx internally.
 */

export type TBaseComponentProps = {
  className?: string;
};

export type TBaseComponent<
  P = any,
  B extends `${typeof componentBrandString}${string}` = typeof componentBrandString
> = React.FC<P & TBaseComponentProps> & {
  readonly __brand: `${B}${string}`;
};


/*
 * Unbranded
 *
 * Returns the original component without the brand stamped on.
 * This is useful for define functions, where the unbranded
 * component is taken as an argument.
 */
export type Unbranded<C extends TBaseComponent<any, any>> =
  React.FC<React.ComponentProps<C>>;


/*
 * TBrand
 * 
 * A brand is simply a string constant that represents a given
 * type of base component.
 * 
 * Bases are abstract concepts that are useful for compile time type
 * checking.
 * 
 * The brand is thus concrete signature which can be checked at
 * runtime.
 * 
 * Some examples:
 *  - Base: Component => Brand: "Component"
 *  - Base Control => Brand: "Component/Control"
 *  - Base ToggleControl => Brand: "Component/Control/ToggleControl"
 * 
 * The TBrand type is a string (the brand string) with a link to the
 * associated type of base that it belongs to via the __associatedBase
 * property. 
 * 
 * Important: This is not a real property on the string object. It's
 * there purely as a way to work back from the brand to the base type
 * that it represents, e.g.:
 * `type TMyBase = typeof MyBrand.__associatedBase`.
 */
export type TBrand<B extends TBaseComponent = any> = `Component${string}` & { __associatedBase: B };

/*
 * TElement
 *
 * A React element of a given type of React component.
 * 
 * The given React component can be:
 *  - A specific Component type, e.g. Cta, Field
 *  - A base type, e.g. TBaseComponent, TBaseCta
 * 
 * This type is simply a shortcut that avoids supplying 2 generics.
 * 
 * Some usage examples:
 *  - TElement<TBaseComponent> (with a base)
 *  - TElement<TCtaComponent> (with a concrete type)
 */
export type TElement<C extends React.FC<any>> = React.ReactElement<React.ComponentProps<C>, C>;
