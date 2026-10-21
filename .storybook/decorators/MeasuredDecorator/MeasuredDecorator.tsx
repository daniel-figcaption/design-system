import type { Decorator } from '@storybook/react';
import './MeasuredDecorator.scss';
import useTriggeredPseudoStates from '@src/components/lib/hooks/useTriggeredPseudoStates';
import { useCallback, useRef } from 'react';

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

const MeasuredDecorator: Decorator = (Story) => {
  useTriggeredPseudoStates(['hover'], '.sb-measured-decorator__measured');
  const { measuredRef, containerRef } = useMeasuredHeight<HTMLDivElement, HTMLDivElement>();

  return (
    <div className="sb-measured-decorator" ref={containerRef}>
      <div className="sb-measured-decorator__measured" aria-hidden="true" ref={measuredRef}>
        <Story />
      </div>
      <div className="sb-measured-decorator__component">
        <Story />
      </div>
    </div>
  );
};

export default MeasuredDecorator;
