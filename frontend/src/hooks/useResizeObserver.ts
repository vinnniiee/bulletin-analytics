import { RefObject, useEffect, useState } from "react";

export const useResizeObserver = (ref: RefObject<HTMLDivElement>): DOMRectReadOnly|undefined => {
  const [dimension, setDimensions] = useState<DOMRectReadOnly>();

  useEffect(() => {
    const observeTarget = ref.current;
    // Check if the target element exists
    if (!observeTarget) {
      return;
    }

    const resizeObserver = new ResizeObserver((entries): void => {
      const dimensions = entries[0].contentRect;
      setDimensions(dimensions);
    });

    // Check if the resizeObserver is truthy before calling methods
    if (resizeObserver) {
      // Assuming entries[0].target is an Element
      resizeObserver.observe(observeTarget as Element);
    }

    return () => {
      // Check if the resizeObserver is truthy before calling methods
      if (resizeObserver) {
        resizeObserver.unobserve(observeTarget as Element);
      }
    };

  }, [ref]);

  return dimension;
};