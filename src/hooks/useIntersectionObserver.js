import { useEffect, useRef } from "react";

function useIntersectionObserver(threshold = 0.5) {
  const elRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold,
      }
    );

    elRef.current.forEach((element) => {
      if (element) observer.observe(element);
    });

    return () => {
      elRef.current.forEach((element) => {
        if (element) observer.unobserve(element);
      });
    };
  }, [threshold]);

  return elRef;
}

export default useIntersectionObserver;
