import { useCallback, useRef } from "react";

/*
 * useMeasuredHeight
 *
 * This hook measures the scrollHeight of a 'measured' element and applies it
 * to a container element of your choice.
 * The measured scrollHeight contains the total height of all positioned 
 * descendents. In practice this can be used to measure the height of a header
 * for example, including the height of all its absolutely positioned dropdowns.
 * 
 */
const useMeasuredHeight = <M extends HTMLElement, C extends HTMLElement>() => {
  const containerRef = useRef<C>(null);
  const roRef = useRef<ResizeObserver | null>(null);
  const heightRef = useRef(0);

  const measuredRef = useCallback((measuredEl: M | null) => {
    if (measuredEl === null) {
      /* Cleanup */
      roRef.current?.disconnect();
      roRef.current = null;
      return;
    }

    /*
     * We also need to watch for size changes in all absolutely positioned descendents.
     */
    const observePositionedDescendants = () => {
      measuredEl.querySelectorAll<HTMLElement>('*').forEach((child) => {
        if (['absolute', 'fixed', 'sticky'].includes(getComputedStyle(child).position)) {
          roRef.current!.observe(child);
        }
      });
    };

    roRef.current = new ResizeObserver(() => {
      if (heightRef.current !== measuredEl.scrollHeight) {
        heightRef.current = measuredEl.scrollHeight;
        containerRef.current?.style.setProperty('--measured-height', `${measuredEl.scrollHeight}px`);
      }
      observePositionedDescendants();
    });

    roRef.current.observe(measuredEl);
    observePositionedDescendants();
  }, []);

  return { measuredRef, containerRef };
};

export default useMeasuredHeight;
