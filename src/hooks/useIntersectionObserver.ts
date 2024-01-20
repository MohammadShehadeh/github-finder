import { RefObject, useEffect } from 'react';

export const useIntersectionObserver = (
  observerTargetRef: RefObject<HTMLElement>,
  callback: () => void
) => {
  useEffect(() => {
    const observerTarget = observerTargetRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          callback();
        }
      },
      { threshold: 0.1 }
    );

    if (observerTarget) {
      observer.observe(observerTarget);
    }

    return () => {
      if (observerTarget) {
        observer.unobserve(observerTarget);
      }
    };
  }, [callback, observerTargetRef]);
};
