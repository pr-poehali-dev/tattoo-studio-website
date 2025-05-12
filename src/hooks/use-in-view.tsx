
import { useState, useEffect, useRef, RefObject } from "react";

interface UseInViewOptions {
  threshold?: number;
  triggerOnce?: boolean;
  rootMargin?: string;
}

export function useInView<T extends HTMLElement = HTMLElement>({
  threshold = 0,
  triggerOnce = false,
  rootMargin = "0px",
}: UseInViewOptions = {}) {
  const [inView, setInView] = useState(false);
  const ref = useRef<T>(null);
  const enteredView = useRef(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const isInView = entry.isIntersecting;
        if (isInView && triggerOnce) {
          if (!enteredView.current) {
            setInView(true);
            enteredView.current = true;
          }
        } else {
          setInView(isInView);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);
    return () => {
      observer.disconnect();
    };
  }, [threshold, triggerOnce, rootMargin]);

  return { ref, inView };
}
