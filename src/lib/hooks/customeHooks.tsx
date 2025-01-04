import { useEffect, useRef } from "react";

const useElmObserver = (
  rootMargin: number,
  threshold: number,
  elmType: string
) => {
  const ref = useRef(null);

  useEffect(() => {
    const currentRef = ref.current;
    const observerOptions = {
      root: null,
      rootMargin: `${rootMargin}px`,
      threshold,
    };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          elmType === "img"
            ? setTimeout(() => {
                entry.target.classList.add("rvl");
              }, 800)
            : entry.target.classList.add("rvl");
        }
      });
    }, observerOptions);

    if (currentRef) {
      observer.observe(currentRef);
    }
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [rootMargin, threshold, elmType]);

  return ref;
};
export { useElmObserver };
