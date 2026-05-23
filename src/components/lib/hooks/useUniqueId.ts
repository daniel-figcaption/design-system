import { useRef } from "react";

/*
 * useUniqueId
 *
 * This hook generates a unique ID string for use in HTML.
 * This could also be used in other attributes such as name, 
 * or various aria attributes.
 */
const useUniqueId = (stem: string) => {
  const uniqueIdRef = useRef<string | null>(null);

  if (!uniqueIdRef.current) {
    uniqueIdRef.current = `${stem}_${crypto.randomUUID().split("-")[0]}`;
  }

  return uniqueIdRef.current;
};

export default useUniqueId;
