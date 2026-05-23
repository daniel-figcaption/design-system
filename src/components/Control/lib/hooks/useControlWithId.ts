import { useMemo } from "react";
import React from "react";
import useUniqueId from "@src/components/lib/hooks/useUniqueId";
import { TControlElement } from "../types";

/*
 * Ensure that a control component always has an ID by generating
 * one if necessary and adding it to the control via `cloneElement`.
 */
const useControlWithId = <T extends TControlElement>(control: T): [T, string] => {
  const fallbackId = useUniqueId('control');
  const controlId = control.props.valueElAttrs?.id || fallbackId;

  const valueElAttrs = { 
    ...(control.props.valueElAttrs || {}),
    id: controlId,
  };

  const controlWithId = useMemo(() => {
    return React.cloneElement(control, {
      valueElAttrs: valueElAttrs as any,
    }) as T;
  }, [control, controlId]);

  return [controlWithId, controlId];
}

export default useControlWithId;
