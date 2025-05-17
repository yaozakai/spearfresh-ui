import { useEffect, useRef, useState } from "react";

// Usage: const [ref, inView] = useInView({ threshold: 0.2 });
export function useInView(options = { threshold: 0.15 }) {
  const ref = useRef<HTMLElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      options
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [options]);

  return [ref, inView] as const;
}
