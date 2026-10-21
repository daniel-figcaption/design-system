export type TValueTypeLabel = 
  'string' | 'boolean' | 'number' | 
  'array' | 'object' | 'function' |
  'ReactNode' |
  'NOT_SHOWN';

export type TAllowedControlType = 
  'text' | 'boolean' | 
  'number' | 'range' |
  'select' | 'inline-radio' | 'radio' |
  'object' |
  'NOT_SHOWN';


/*
 * TBasePropField
 * 
 * The properties common to all prop fields.
 */
type TBasePropField = {
  p0_tableCategory?: string;
  p3_description: string;
};

/*
 * TTextPropField
 *
 * Fields managing a freeform string value.
 * These are usually displayed with a textbox control, or occasionally with this 
 * disabled if the field is only for documetation purposes (such as with the base 
 * className prop).
 */
type TTextPropField = TBasePropField & {
  p1_typeSafeDefaultValue: string | undefined;
  p2_valueTypeLabel: 'string';
  p4_storybookControlType: 'text' | 'NOT_SHOWN';
  p5_controlOptions?: never;
  p5_controlNumberSettings?: never;
};

/*
 * TBooleanPropField
 *
 * Fields managing a boolean value.
 * Undefined is not allowed as a default value here because logically that 
 * resolves to false anyway.
 */
type TBooleanPropField = TBasePropField & {
  p1_typeSafeDefaultValue: boolean;
  p2_valueTypeLabel: 'boolean';
  p4_storybookControlType: 'boolean' | 'NOT_SHOWN';
  p5_controlOptions?: never;
  p5_controlNumberSettings?: never;
};

/*
 * TNumberPropField
 *
 * Fields managing a number value.
 * These can be displayed either with a number or range control.
 */
type TNumberPropField = TBasePropField & {
  p1_typeSafeDefaultValue: number | undefined;
  p2_valueTypeLabel: 'number';
  p4_storybookControlType: 'number' | 'range' | 'NOT_SHOWN';
  p5_controlOptions?: never;
  p5_controlNumberSettings: {
    min?: number; 
    max?: number; 
    step?: number;
  };
};

/*
 * TOptionsPropField
 *
 * Fields managing a string value where the value is part of a fixed set (enum).
 * Select is normally preferred here as a control type, but radio can be used if
 * there are a max of about 3 options.
 */
type TOptionsPropField = TBasePropField & {
  p1_typeSafeDefaultValue: string | undefined;
  p2_valueTypeLabel: 'string';
  p4_storybookControlType: 'select' | 'inline-radio' | 'radio' | 'NOT_SHOWN';
  p5_controlOptions: readonly string[];
  p5_controlNumberSettings?: never;
};

/*
 * TArrayPropField
 *
 * Fields managing an array value.
 * For arrays of simple primitives or simple objects, the object control type
 * can be used, which is also used by Storybook to display arrays. For more 
 * complex arrays (such as React component), this control should be hidden.
 */
type TArrayPropField = TBasePropField & {
  p1_typeSafeDefaultValue: Array<any> | undefined;
  p2_valueTypeLabel: 'array';
  p4_storybookControlType: 'object' | 'NOT_SHOWN';
  p5_controlOptions?: never;
  p5_controlNumberSettings?: never;
};

/*
 * TObjectPropField
 *
 * Fields managing an object value.
 * For simple objects containing mostly primitives, the object control type
 * can be used.
 */
type TObjectPropField = TBasePropField & {
  p1_typeSafeDefaultValue: object | undefined;
  p2_valueTypeLabel: 'object';
  p4_storybookControlType: 'object' | 'NOT_SHOWN';
  p5_controlOptions?: never;
  p5_controlNumberSettings?: never;
};

/*
 * TFunctionPropField
 *
 * Fields managing a function value.
 * These are usually for event handler props. A control should never be shown.
 */
type TFunctionPropField = TBasePropField & {
  p1_typeSafeDefaultValue: Function | undefined;
  p2_valueTypeLabel: 'function';
  p4_storybookControlType: 'NOT_SHOWN';
  p5_controlOptions?: never;
  p5_controlNumberSettings?: never;
};

/*
 * TReactNodePropField
 *
 * Fields managing React content (such as the children prop) are displayed
 * purely for documentation reasons, and as such have no control.
 * ReactNode refers to the React.ReactNode type, which encompasses string, null, 
 * and arrays of other React nodes. As such, complex value types (that include this 
 * in a value type array) are often not necessary, unless the component has separate
 * internal logic for strings passed in for this prop.
 */
type TReactNodePropField = TBasePropField & {
  p1_typeSafeDefaultValue: null;
  p2_valueTypeLabel: 'ReactNode';
  p4_storybookControlType: 'NOT_SHOWN';
  p5_controlOptions?: never;
  p5_controlNumberSettings?: never;
};

/*
 * TComplexPropField
 *
 * If the field value can be multiple types (e.g. array OR object, string OR array)
 * then the value type can be set to an array of values. In this case, it is left up
 * to the implementer to determine the most appropriate field settings.
 */
type TComplexPropField = TBasePropField & {
  p1_typeSafeDefaultValue: any;
  p2_valueTypeLabel: TValueTypeLabel[];
  p4_storybookControlType: TAllowedControlType;
  p5_controlOptions?: never;
  p5_controlNumberSettings?: never;
};

export type TPropField =
  | TTextPropField
  | TBooleanPropField
  | TNumberPropField
  | TOptionsPropField
  | TArrayPropField
  | TObjectPropField
  | TFunctionPropField
  | TReactNodePropField
  | TComplexPropField;
